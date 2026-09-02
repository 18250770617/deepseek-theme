import { describe, expect, it } from 'vitest'
import { BLACK_RED_THEME } from '../src/client/theme.ts'

describe('black-red theme', () => {
  it('keeps the Harness sidebar fill transparent so the artwork remains visible', () => {
    expect(BLACK_RED_THEME.tokens['--dsw-specific-sidebar-fill']).toBe('transparent')
  })
})
