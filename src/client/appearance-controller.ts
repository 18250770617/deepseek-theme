import type { SettingsScope } from '@deepseek-ai/dsh-client-ui-settings/client'
import type { ThemeRuntime } from '@deepseek-ai/dsh-client-ui-theme/client'
import { DEFAULT_SETTINGS, type DeepSeekThemeSettings } from '../contracts.ts'
import { THEME_ID } from './theme.ts'

export const FONT_STACKS = Object.freeze({
  noto: "'Noto Sans SC', 'Microsoft YaHei UI', 'PingFang SC', sans-serif",
  chakra: "'Chakra Petch', 'Noto Sans SC', 'Microsoft YaHei UI', 'PingFang SC', sans-serif",
  rajdhani: "'Rajdhani', 'Noto Sans SC', 'Microsoft YaHei UI', 'PingFang SC', sans-serif",
  yahei: "'Microsoft YaHei UI', 'Microsoft YaHei', 'Noto Sans SC', 'PingFang SC', sans-serif",
  pingfang: "'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei UI', 'Noto Sans SC', sans-serif",
  sourcehan: "'Source Han Sans SC', 'Noto Sans CJK SC', 'Noto Sans SC', 'Microsoft YaHei UI', sans-serif",
  inter: "Inter, 'Segoe UI', Roboto, Arial, 'Noto Sans SC', sans-serif",
  segoe: "'Segoe UI', Arial, 'Noto Sans SC', 'Microsoft YaHei UI', sans-serif",
  roboto: "Roboto, Arial, 'Noto Sans SC', 'Microsoft YaHei UI', sans-serif",
  orbitron: "'Orbitron', 'Rajdhani', sans-serif",
  inherit: "var(--deepseek-theme-body-font, 'Noto Sans SC', 'Microsoft YaHei UI', 'PingFang SC', sans-serif)",
  xingkai: "'STXingkai', '华文行楷', 'KaiTi', '楷体', serif",
  kaiti: "'KaiTi', '楷体', 'STKaiti', serif",
  fangsong: "'FangSong', '仿宋', 'STFangsong', serif",
  times: "'Times New Roman', Times, serif",
  georgia: "Georgia, 'Times New Roman', serif",
  cambria: "Cambria, Georgia, serif",
})

type Listener = () => void

export class AppearanceController {
  private value: DeepSeekThemeSettings = DEFAULT_SETTINGS
  private readonly listeners = new Set<Listener>()

  constructor(
    private readonly scope: SettingsScope<DeepSeekThemeSettings>,
    private readonly theme: ThemeRuntime,
  ) {}

  readonly getSnapshot = (): DeepSeekThemeSettings => this.value

  readonly subscribe = (listener: Listener): (() => void) => {
    this.listeners.add(listener)
    return () => { this.listeners.delete(listener) }
  }

  start(): () => void {
    const sync = (): void => {
      this.value = { ...DEFAULT_SETTINGS, ...(this.scope.getSnapshot().value ?? {}) }
      this.apply()
      for (const listener of this.listeners) listener()
    }
    const unsubscribe = this.scope.subscribe(sync)
    sync()
    return unsubscribe
  }

  set<K extends keyof DeepSeekThemeSettings>(field: K, value: DeepSeekThemeSettings[K]): void {
    void this.scope.set(field, value)
  }

  reset(fields: readonly (keyof DeepSeekThemeSettings)[]): void {
    for (const field of fields) void this.scope.set(field, DEFAULT_SETTINGS[field])
  }

  private apply(): void {
    const bodyFont = FONT_STACKS[this.value.bodyFont]
    const conversationFont = FONT_STACKS[this.value.conversationFont]
    const progressFont = FONT_STACKS[this.value.progressFont]
    document.body.style.setProperty('--deepseek-theme-body-font', bodyFont)
    document.body.style.setProperty('--deepseek-theme-conversation-font', conversationFont)
    document.body.style.setProperty('--deepseek-theme-progress-font', progressFont)
    this.applyColor('body', this.value.bodyColor)
    this.applyColor('progress', this.value.progressColor)
    if (this.value.enabled) this.theme.setTheme(THEME_ID)
    else if (String(this.theme.getTheme().preference) === THEME_ID) this.theme.setTheme('dark')
  }

  private applyColor(target: 'body' | 'progress', color: string): void {
    const attribute = target === 'body' ? 'deepseekThemeBodyColor' : 'deepseekThemeProgressColor'
    const property = target === 'body' ? '--deepseek-theme-body-color' : '--deepseek-theme-progress-color'
    if (/^#[0-9a-f]{6}$/iu.test(color)) {
      document.body.dataset[attribute] = ''
      document.body.style.setProperty(property, color)
    } else {
      delete document.body.dataset[attribute]
      document.body.style.removeProperty(property)
    }
  }
}
