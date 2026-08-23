import { readFile } from 'node:fs/promises'
import type { IncomingMessage, OutgoingHttpHeaders, ServerResponse } from 'node:http'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Context } from '@deepseek-ai/cordis'
import { credentialRef } from '@deepseek-ai/dsh-credentials'
import type { WebRoute } from '@deepseek-ai/dsh-host-webserver'
import { isLoopbackRequest } from './loopback.ts'

export const BALANCE_PATH = '/deepseek-theme/balance'
export const ASSET_PREFIX = '/deepseek-theme/assets'

const ASSETS = new Map<string, string>([
  ['sidebar-bg.png', 'image/png'],
  ['orbitron-latin-400-normal.woff2', 'font/woff2'],
  ['orbitron-latin-500-normal.woff2', 'font/woff2'],
  ['chakra-petch-latin-400-normal.woff2', 'font/woff2'],
  ['chakra-petch-latin-500-normal.woff2', 'font/woff2'],
  ['rajdhani-latin-400-normal.woff2', 'font/woff2'],
  ['rajdhani-latin-500-normal.woff2', 'font/woff2'],
])

const assetRoot = fileURLToPath(new URL('../assets/', import.meta.url))

function writeJson(
  response: ServerResponse,
  status: number,
  body: unknown,
  headers: OutgoingHttpHeaders = {},
): void {
  response.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    'referrer-policy': 'no-referrer',
    ...headers,
  })
  response.end(JSON.stringify(body))
}

async function balance(ctx: Context, request: IncomingMessage, response: ServerResponse): Promise<void> {
  if (request.method !== 'GET') {
    writeJson(response, 405, { error: 'method-not-allowed' }, { allow: 'GET' })
    return
  }
  if (!isLoopbackRequest(request)) {
    writeJson(response, 403, { error: 'forbidden' })
    return
  }
  const resolved = await ctx.credentials.resolve(credentialRef('DEEPSEEK_API_KEY'))
  const raw = resolved?.value ?? process.env.DEEPSEEK_API_KEY
  const apiKey = typeof raw === 'string' ? raw.trim() : ''
  if (apiKey.length === 0) {
    writeJson(response, 503, { error: 'DeepSeek API key is not configured' })
    return
  }

  const baseUrl = (process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com').replace(/\/+$/u, '')
  let upstream: Response
  try {
    upstream = await fetch(`${baseUrl}/user/balance`, {
      headers: { authorization: `Bearer ${apiKey}`, accept: 'application/json' },
    })
  } catch {
    writeJson(response, 502, { error: 'DeepSeek balance request failed' })
    return
  }
  if (!upstream.ok) {
    writeJson(response, 502, { error: `DeepSeek balance returned HTTP ${upstream.status}` })
    return
  }

  let payload: unknown
  try {
    payload = await upstream.json()
  } catch {
    writeJson(response, 502, { error: 'DeepSeek balance returned invalid JSON' })
    return
  }
  const value = payload as { is_available?: unknown; balance_infos?: unknown }
  const infos = Array.isArray(value.balance_infos) ? value.balance_infos : []
  const info = infos.find(candidate => (candidate as { currency?: unknown })?.currency === 'CNY')
    ?? infos[0]
  const record = info as { total_balance?: unknown; currency?: unknown } | undefined
  const total = Number(record?.total_balance)
  if (!Number.isFinite(total) || total < 0 || typeof record?.currency !== 'string') {
    writeJson(response, 502, { error: 'DeepSeek balance payload is incomplete' })
    return
  }
  writeJson(response, 200, {
    total,
    currency: record.currency,
    isAvailable: value.is_available === true,
  })
}

async function asset(request: IncomingMessage, response: ServerResponse): Promise<void> {
  if (request.method !== 'GET' || !isLoopbackRequest(request)) {
    response.writeHead(request.method === 'GET' ? 403 : 405)
    response.end()
    return
  }
  const pathname = new URL(request.url ?? '/', 'http://localhost').pathname
  const name = pathname.startsWith(`${ASSET_PREFIX}/`) ? pathname.slice(ASSET_PREFIX.length + 1) : ''
  const mime = ASSETS.get(name)
  if (mime === undefined) {
    response.writeHead(404)
    response.end()
    return
  }
  try {
    const content = await readFile(join(assetRoot, name))
    response.writeHead(200, {
      'content-type': mime,
      'cache-control': 'public, max-age=31536000, immutable',
      'x-content-type-options': 'nosniff',
    })
    response.end(content)
  } catch {
    response.writeHead(404)
    response.end()
  }
}

export function themeRoutes(ctx: Context): readonly WebRoute[] {
  return [
    { kind: 'exact', path: BALANCE_PATH, handler: (request, response) => balance(ctx, request, response) },
    { kind: 'prefix', path: ASSET_PREFIX, handler: asset },
  ]
}
