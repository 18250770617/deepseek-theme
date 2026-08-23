import type { ClientContext } from '@deepseek-ai/dsh-client-runtime/client'
import type {} from '@deepseek-ai/dsh-client-ui-conversation/client'
import type {} from '@deepseek-ai/dsh-client-ui-settings/client'
import type {} from '@deepseek-ai/dsh-client-ui-theme/client'
import { SETTINGS_ID, type DeepSeekThemeSettings } from '../contracts.ts'
import { AppearanceController } from './appearance-controller.ts'
import { BalanceController } from './balance-controller.ts'
import { BalanceMeter } from './BalanceMeter.tsx'
import { SettingsPanel } from './SettingsPanel.tsx'
import { installStyles } from './styles.ts'
import { BLACK_RED_THEME } from './theme.ts'

export const inject = ['slots', 'theme', 'settingsScope']

/** Mount theme registration, durable controls, and the composer balance meter. */
export function apply(ctx: ClientContext): void {
  ctx.effect(() => installStyles(), 'deepseek-theme: styles')
  ctx.effect(() => ctx.theme.register(BLACK_RED_THEME), 'deepseek-theme: theme')

  const scope = ctx.settingsScope.bind<DeepSeekThemeSettings>({ namespace: SETTINGS_ID })
  const appearance = new AppearanceController(scope, ctx.theme)
  const balance = new BalanceController()
  ctx.effect(() => appearance.start(), 'deepseek-theme: appearance state')
  ctx.effect(() => balance.start(), 'deepseek-theme: balance polling')

  ctx.slots.inject('settings.general.item', () => ctx.slots.register({
    name: 'settings.general.item',
    id: 'deepseek-theme',
    order: 11,
    inject: () => ({ controller: appearance }),
  } as never, SettingsPanel as never))

  ctx.slots.inject('conversation.input.left', () => ctx.slots.register({
    name: 'conversation.input.left',
    id: 'deepseek-theme-balance',
    order: 80,
    inject: () => ({ controller: balance }),
  } as never, BalanceMeter as never))

  ctx.effect(() => () => {
    document.body.style.removeProperty('--deepseek-theme-body-font')
    document.body.style.removeProperty('--deepseek-theme-conversation-font')
    document.body.style.removeProperty('--deepseek-theme-progress-font')
    document.body.style.removeProperty('--deepseek-theme-body-color')
    document.body.style.removeProperty('--deepseek-theme-progress-color')
    delete document.body.dataset.deepseekThemeBodyColor
    delete document.body.dataset.deepseekThemeProgressColor
  }, 'deepseek-theme: presentation cleanup')
}
