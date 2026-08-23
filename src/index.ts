import type { Context } from '@deepseek-ai/cordis'
import type {} from '@deepseek-ai/dsh-credentials'
import type {} from '@deepseek-ai/dsh-host-webserver'
import type {} from '@deepseek-ai/dsh-settings'
import { themeRoutes } from './http.ts'
import { DeepSeekThemeSettingsSchema, SETTINGS_NAMESPACE } from './settings.ts'

export const name = 'deepseek-theme'

/** Register durable settings and loopback-only Host routes. */
export function apply(ctx: Context): void {
  ctx.inject(['settings'], settingsCtx => {
    settingsCtx.settings.register(SETTINGS_NAMESPACE, DeepSeekThemeSettingsSchema)
  })
  ctx.inject(['webServer', 'credentials'], webCtx => {
    for (const route of themeRoutes(webCtx)) {
      webCtx.effect(() => webCtx.webServer.register(route), `deepseek-theme: ${route.path}`)
    }
  })
}

