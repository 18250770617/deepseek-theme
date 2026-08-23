import { describe, expect, it } from 'vitest'
import type { IncomingMessage } from 'node:http'
import { isLoopbackRequest } from '../src/loopback.ts'

function request(remoteAddress: string, host: string, extra: Record<string, string> = {}): IncomingMessage {
  return {
    socket: { remoteAddress },
    headers: { host, ...extra },
  } as unknown as IncomingMessage
}

describe('loopback route fence', () => {
  it('accepts a same-origin loopback request', () => {
    expect(isLoopbackRequest(request('127.0.0.1', '127.0.0.1:3080', {
      origin: 'http://127.0.0.1:3080',
      'sec-fetch-site': 'same-origin',
    }))).toBe(true)
  })

  it('rejects non-loopback sockets and cross-site browser requests', () => {
    expect(isLoopbackRequest(request('192.168.1.20', '127.0.0.1:3080'))).toBe(false)
    expect(isLoopbackRequest(request('127.0.0.1', '127.0.0.1:3080', {
      'sec-fetch-site': 'cross-site',
    }))).toBe(false)
  })
})

