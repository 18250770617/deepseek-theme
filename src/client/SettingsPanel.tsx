import { useEffect, useState, useSyncExternalStore, type ReactNode } from 'react'
import type { DeepSeekThemeSettings } from '../contracts.ts'
import type { AppearanceController } from './appearance-controller.ts'

interface Option {
  value: string
  label: string
  group?: '中文字体' | '英文字体'
}

const BODY_OPTIONS: readonly Option[] = [
  { value: 'noto', label: 'Noto Sans SC（清晰现代）' },
  { value: 'chakra', label: 'Chakra Petch（机械切角）' },
  { value: 'rajdhani', label: 'Rajdhani（HUD 窄体）' },
]

const CONVERSATION_OPTIONS: readonly Option[] = [
  { value: 'inherit', label: '跟随正文文本' },
  { value: 'xingkai', label: '华文行楷（书写感）', group: '中文字体' },
  { value: 'kaiti', label: '楷体（端正古典）', group: '中文字体' },
  { value: 'fangsong', label: '仿宋（书刊风格）', group: '中文字体' },
  { value: 'times', label: 'Times New Roman（经典衬线）', group: '英文字体' },
  { value: 'georgia', label: 'Georgia（屏幕衬线）', group: '英文字体' },
  { value: 'cambria', label: 'Cambria（现代书刊）', group: '英文字体' },
]

const PROGRESS_OPTIONS: readonly Option[] = [
  { value: 'orbitron', label: 'Orbitron（科幻仪表）' },
  { value: 'chakra', label: 'Chakra Petch（机械终端）' },
  { value: 'rajdhani', label: 'Rajdhani（HUD 仪表）' },
]

interface FontSelectProps {
  label: string
  value: string
  options: readonly Option[]
  onChange: (value: string) => void
}

function FontSelect({ label, value, options, onChange }: FontSelectProps) {
  const plain = options.filter(option => option.group === undefined)
  const groups = ['中文字体', '英文字体'] as const
  return (
    <select
      className="dstSelect"
      aria-label={label}
      value={value}
      onChange={event => { onChange(event.currentTarget.value) }}
    >
      {plain.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
      {groups.map(group => {
        const children = options.filter(option => option.group === group)
        return children.length === 0 ? null : (
          <optgroup key={group} label={group}>
            {children.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
          </optgroup>
        )
      })}
    </select>
  )
}

interface ColorEditorProps {
  label: string
  value: string
  fallback: string
  onChange: (value: string) => void
}

function ColorEditor({ label, value, fallback, onChange }: ColorEditorProps) {
  const [draft, setDraft] = useState(value === 'auto' ? '' : value)
  const valid = draft === '' || /^#[0-9a-f]{6}$/iu.test(draft)
  useEffect(() => { setDraft(value === 'auto' ? '' : value) }, [value])
  const commit = (): void => {
    if (draft === '') onChange('auto')
    else if (valid) onChange(draft.toLowerCase())
  }
  return (
    <div className="dstColorEditor">
      <input
        className="dstColorPicker"
        type="color"
        aria-label={`${label}自由色盘`}
        value={value === 'auto' ? fallback : value}
        onChange={event => { onChange(event.currentTarget.value.toLowerCase()) }}
      />
      <input
        className="dstHex"
        type="text"
        maxLength={7}
        aria-label={`${label}十六进制颜色`}
        aria-invalid={!valid}
        placeholder="自动"
        value={draft}
        onChange={event => { setDraft(event.currentTarget.value) }}
        onBlur={commit}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            event.preventDefault()
            commit()
          }
        }}
      />
    </div>
  )
}

interface RowProps {
  title: string
  description: string
  children: ReactNode
  onReset: () => void
}

function Row({ title, description, children, onReset }: RowProps) {
  return (
    <section className="dstSettingRow">
      <div className="dstSettingHeading">
        <strong>{title}</strong>
        <span>{description}</span>
      </div>
      <div className="dstSettingControls">
        {children}
        <button type="button" className="dstReset" onClick={onReset}>恢复默认</button>
      </div>
    </section>
  )
}

export interface SettingsPanelProps {
  controller: AppearanceController
}

export function SettingsPanel({ controller }: SettingsPanelProps) {
  const value = useSyncExternalStore(controller.subscribe, controller.getSnapshot)
  const set = <K extends keyof DeepSeekThemeSettings>(field: K, next: DeepSeekThemeSettings[K]): void => {
    controller.set(field, next)
  }
  return (
    <div className="dstSettings">
      <div className="dstSettingsTitle">
        <strong>黑红主题与排版</strong>
        <label className="dstThemeToggle">
          <input
            type="checkbox"
            checked={value.enabled}
            onChange={event => { set('enabled', event.currentTarget.checked) }}
          />
          启用黑红主题
        </label>
      </div>
      <Row
        title="正文文本"
        description="侧栏、按钮和普通界面文字"
        onReset={() => { controller.reset(['bodyFont', 'bodyColor']) }}
      >
        <FontSelect label="正文文本字体" value={value.bodyFont} options={BODY_OPTIONS} onChange={next => { set('bodyFont', next as DeepSeekThemeSettings['bodyFont']) }} />
        <ColorEditor label="正文文本" value={value.bodyColor} fallback="#fff1f1" onChange={next => { set('bodyColor', next) }} />
      </Row>
      <Row
        title="对话文本"
        description="用户消息与 Agent 回复；代码块保持等宽字体"
        onReset={() => { controller.reset(['conversationFont']) }}
      >
        <FontSelect label="对话文本字体" value={value.conversationFont} options={CONVERSATION_OPTIONS} onChange={next => { set('conversationFont', next as DeepSeekThemeSettings['conversationFont']) }} />
      </Row>
      <Row
        title="进度数字"
        description="余额进度条右侧的百分比字样"
        onReset={() => { controller.reset(['progressFont', 'progressColor']) }}
      >
        <FontSelect label="进度数字字体" value={value.progressFont} options={PROGRESS_OPTIONS} onChange={next => { set('progressFont', next as DeepSeekThemeSettings['progressFont']) }} />
        <ColorEditor label="进度数字" value={value.progressColor} fallback="#e58990" onChange={next => { set('progressColor', next) }} />
      </Row>
    </div>
  )
}

export const FONT_OPTION_VALUES = Object.freeze({
  body: BODY_OPTIONS.map(option => option.value),
  conversation: CONVERSATION_OPTIONS.map(option => option.value),
  progress: PROGRESS_OPTIONS.map(option => option.value),
})
