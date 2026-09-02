import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { credentialRef } from "@deepseek-ai/dsh-credentials";
import z from "@deepseek-ai/schemastery";
//#region src/loopback.ts
function isIPv4Loopback(value) {
	const parts = value.split(".");
	return parts.length === 4 && parts[0] === "127" && parts.every((part) => /^\d{1,3}$/.test(part) && Number(part) <= 255);
}
function isLoopbackAddress(address) {
	if (address === void 0) return false;
	const normalized = address.toLowerCase();
	if (normalized === "::1") return true;
	if (normalized.startsWith("::ffff:")) return isIPv4Loopback(normalized.slice(7));
	return isIPv4Loopback(normalized);
}
function isLoopbackHostname(hostname) {
	return hostname === "localhost" || hostname === "[::1]" || isIPv4Loopback(hostname);
}
/** Require a loopback socket and same-origin browser authority. */
function isLoopbackRequest(request) {
	if (!isLoopbackAddress(request.socket.remoteAddress)) return false;
	const host = request.headers.host;
	if (typeof host !== "string") return false;
	let authority;
	try {
		authority = new URL(`http://${host}`);
	} catch {
		return false;
	}
	if (!isLoopbackHostname(authority.hostname)) return false;
	if (request.headers["sec-fetch-site"] === "cross-site") return false;
	const origin = request.headers.origin;
	if (origin === void 0) return true;
	try {
		return new URL(origin).host === authority.host;
	} catch {
		return false;
	}
}
//#endregion
//#region src/http.ts
const BALANCE_PATH = "/deepseek-theme/balance";
const ASSET_PREFIX = "/deepseek-theme/assets";
const ASSETS = /* @__PURE__ */ new Map([
	["sidebar-bg.png", "image/png"],
	["orbitron-latin-400-normal.woff2", "font/woff2"],
	["orbitron-latin-500-normal.woff2", "font/woff2"],
	["chakra-petch-latin-400-normal.woff2", "font/woff2"],
	["chakra-petch-latin-500-normal.woff2", "font/woff2"],
	["rajdhani-latin-400-normal.woff2", "font/woff2"],
	["rajdhani-latin-500-normal.woff2", "font/woff2"]
]);
const assetRoot = fileURLToPath(new URL("../assets/", import.meta.url));
function writeJson(response, status, body, headers = {}) {
	response.writeHead(status, {
		"content-type": "application/json; charset=utf-8",
		"cache-control": "no-store",
		"referrer-policy": "no-referrer",
		...headers
	});
	response.end(JSON.stringify(body));
}
async function balance(ctx, request, response) {
	if (request.method !== "GET") {
		writeJson(response, 405, { error: "method-not-allowed" }, { allow: "GET" });
		return;
	}
	if (!isLoopbackRequest(request)) {
		writeJson(response, 403, { error: "forbidden" });
		return;
	}
	const raw = (await ctx.credentials.resolve(credentialRef("DEEPSEEK_API_KEY")))?.value ?? process.env.DEEPSEEK_API_KEY;
	const apiKey = typeof raw === "string" ? raw.trim() : "";
	if (apiKey.length === 0) {
		writeJson(response, 503, { error: "DeepSeek API key is not configured" });
		return;
	}
	const baseUrl = (process.env.DEEPSEEK_BASE_URL || "https://api.deepseek.com").replace(/\/+$/u, "");
	let upstream;
	try {
		upstream = await fetch(`${baseUrl}/user/balance`, { headers: {
			authorization: `Bearer ${apiKey}`,
			accept: "application/json"
		} });
	} catch {
		writeJson(response, 502, { error: "DeepSeek balance request failed" });
		return;
	}
	if (!upstream.ok) {
		writeJson(response, 502, { error: `DeepSeek balance returned HTTP ${upstream.status}` });
		return;
	}
	let payload;
	try {
		payload = await upstream.json();
	} catch {
		writeJson(response, 502, { error: "DeepSeek balance returned invalid JSON" });
		return;
	}
	const value = payload;
	const infos = Array.isArray(value.balance_infos) ? value.balance_infos : [];
	const record = infos.find((candidate) => candidate?.currency === "CNY") ?? infos[0];
	const total = Number(record?.total_balance);
	if (!Number.isFinite(total) || total < 0 || typeof record?.currency !== "string") {
		writeJson(response, 502, { error: "DeepSeek balance payload is incomplete" });
		return;
	}
	writeJson(response, 200, {
		total,
		currency: record.currency,
		isAvailable: value.is_available === true
	});
}
async function asset(request, response) {
	if (request.method !== "GET" || !isLoopbackRequest(request)) {
		response.writeHead(request.method === "GET" ? 403 : 405);
		response.end();
		return;
	}
	const pathname = new URL(request.url ?? "/", "http://localhost").pathname;
	const name = pathname.startsWith(`/deepseek-theme/assets/`) ? pathname.slice(23) : "";
	const mime = ASSETS.get(name);
	if (mime === void 0) {
		response.writeHead(404);
		response.end();
		return;
	}
	try {
		const content = await readFile(join(assetRoot, name));
		response.writeHead(200, {
			"content-type": mime,
			"cache-control": "public, max-age=31536000, immutable",
			"x-content-type-options": "nosniff"
		});
		response.end(content);
	} catch {
		response.writeHead(404);
		response.end();
	}
}
function themeRoutes(ctx) {
	return [{
		kind: "exact",
		path: BALANCE_PATH,
		handler: (request, response) => balance(ctx, request, response)
	}, {
		kind: "prefix",
		path: ASSET_PREFIX,
		handler: asset
	}];
}
//#endregion
//#region src/contracts.ts
const SETTINGS_ID = "deepseek-theme";
const BODY_FONTS = [
	"noto",
	"chakra",
	"rajdhani",
	"yahei",
	"pingfang",
	"sourcehan",
	"inter",
	"segoe",
	"roboto"
];
const CONVERSATION_FONTS = [
	"inherit",
	"xingkai",
	"kaiti",
	"fangsong",
	"times",
	"georgia",
	"cambria"
];
const PROGRESS_FONTS = [
	"orbitron",
	"chakra",
	"rajdhani"
];
const DEFAULT_SETTINGS = Object.freeze({
	enabled: true,
	bodyFont: "noto",
	bodyColor: "auto",
	conversationFont: "inherit",
	progressFont: "orbitron",
	progressColor: "auto"
});
//#endregion
//#region src/settings.ts
const SETTINGS_NAMESPACE = SETTINGS_ID;
const color = z.string().pattern(/^(?:auto|#[0-9a-fA-F]{6})$/);
const DeepSeekThemeSettingsSchema = z.object({
	enabled: z.boolean().default(DEFAULT_SETTINGS.enabled),
	bodyFont: z.union([...BODY_FONTS]).default(DEFAULT_SETTINGS.bodyFont),
	bodyColor: color.default(DEFAULT_SETTINGS.bodyColor),
	conversationFont: z.union([...CONVERSATION_FONTS]).default(DEFAULT_SETTINGS.conversationFont),
	progressFont: z.union([...PROGRESS_FONTS]).default(DEFAULT_SETTINGS.progressFont),
	progressColor: color.default(DEFAULT_SETTINGS.progressColor)
});
//#endregion
//#region src/index.ts
const name = "deepseek-theme";
/** Register durable settings and loopback-only Host routes. */
function apply(ctx) {
	ctx.inject(["settings"], (settingsCtx) => {
		settingsCtx.settings.register(SETTINGS_NAMESPACE, DeepSeekThemeSettingsSchema);
	});
	ctx.inject(["webServer", "credentials"], (webCtx) => {
		for (const route of themeRoutes(webCtx)) webCtx.effect(() => webCtx.webServer.register(route), `deepseek-theme: ${route.path}`);
	});
}
//#endregion
export { apply, name };
