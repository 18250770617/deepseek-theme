import z from '@deepseek-ai/schemastery'
import { settingsNamespace } from '@deepseek-ai/dsh-settings'
import {
  BODY_FONTS, CONVERSATION_FONTS, DEFAULT_SETTINGS, PROGRESS_FONTS, SETTINGS_ID,
  type DeepSeekThemeSettings,
} from './contracts.ts'

export const SETTINGS_NAMESPACE = settingsNamespace(SETTINGS_ID)

const color = z.string().pattern(/^(?:auto|#[0-9a-fA-F]{6})$/)

export const DeepSeekThemeSettingsSchema: z<DeepSeekThemeSettings> = z.object({
  enabled: z.boolean().default(DEFAULT_SETTINGS.enabled),
  bodyFont: z.union([...BODY_FONTS]).default(DEFAULT_SETTINGS.bodyFont),
  bodyColor: color.default(DEFAULT_SETTINGS.bodyColor),
  conversationFont: z.union([...CONVERSATION_FONTS]).default(DEFAULT_SETTINGS.conversationFont),
  progressFont: z.union([...PROGRESS_FONTS]).default(DEFAULT_SETTINGS.progressFont),
  progressColor: color.default(DEFAULT_SETTINGS.progressColor),
})

export type { DeepSeekThemeSettings } from './contracts.ts'
