export const SETTINGS_ID = 'deepseek-theme'

export const BODY_FONTS = ['noto', 'chakra', 'rajdhani'] as const
export const CONVERSATION_FONTS = [
  'inherit', 'xingkai', 'kaiti', 'fangsong', 'times', 'georgia', 'cambria',
] as const
export const PROGRESS_FONTS = ['orbitron', 'chakra', 'rajdhani'] as const

export interface DeepSeekThemeSettings {
  enabled: boolean
  bodyFont: typeof BODY_FONTS[number]
  bodyColor: string
  conversationFont: typeof CONVERSATION_FONTS[number]
  progressFont: typeof PROGRESS_FONTS[number]
  progressColor: string
}

export const DEFAULT_SETTINGS: DeepSeekThemeSettings = Object.freeze({
  enabled: true,
  bodyFont: 'noto',
  bodyColor: 'auto',
  conversationFont: 'inherit',
  progressFont: 'orbitron',
  progressColor: 'auto',
})

