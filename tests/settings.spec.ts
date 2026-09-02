import { describe, expect, it } from 'vitest'
import {
  BODY_FONTS, CONVERSATION_FONTS, DEFAULT_SETTINGS, PROGRESS_FONTS,
} from '../src/contracts.ts'

describe('theme settings contract', () => {
  it('keeps every default inside its accepted option list', () => {
    expect(BODY_FONTS).toContain(DEFAULT_SETTINGS.bodyFont)
    expect(CONVERSATION_FONTS).toContain(DEFAULT_SETTINGS.conversationFont)
    expect(PROGRESS_FONTS).toContain(DEFAULT_SETTINGS.progressFont)
  })

  it('ships the requested Chinese and English conversation choices', () => {
    expect(CONVERSATION_FONTS).toEqual([
      'inherit', 'xingkai', 'kaiti', 'fangsong', 'times', 'georgia', 'cambria',
    ])
  })

  it('ships popular Chinese and English body-font choices', () => {
    expect(BODY_FONTS).toEqual([
      'noto', 'chakra', 'rajdhani',
      'yahei', 'pingfang', 'sourcehan',
      'inter', 'segoe', 'roboto',
    ])
  })
})
