export interface BalanceSnapshot {
  readonly total: number
  readonly currency: string
  readonly status: 'loading' | 'ready' | 'error'
}

type Listener = () => void

export class BalanceController {
  private value: BalanceSnapshot = { total: 0, currency: 'CNY', status: 'loading' }
  private readonly listeners = new Set<Listener>()

  readonly getSnapshot = (): BalanceSnapshot => this.value

  readonly subscribe = (listener: Listener): (() => void) => {
    this.listeners.add(listener)
    return () => { this.listeners.delete(listener) }
  }

  start(): () => void {
    const onVisibility = (): void => {
      if (document.visibilityState === 'visible') void this.refresh()
    }
    const interval = window.setInterval(() => { void this.refresh() }, 60_000)
    document.addEventListener('visibilitychange', onVisibility)
    void this.refresh()
    return () => {
      window.clearInterval(interval)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }

  private async refresh(): Promise<void> {
    try {
      const response = await fetch('/deepseek-theme/balance', { cache: 'no-store' })
      if (!response.ok) throw new Error(String(response.status))
      const payload = await response.json() as { total?: unknown; currency?: unknown }
      const total = Number(payload.total)
      if (!Number.isFinite(total) || total < 0 || typeof payload.currency !== 'string') {
        throw new Error('invalid balance')
      }
      this.publish({ total, currency: payload.currency, status: 'ready' })
    } catch {
      this.publish({ total: 0, currency: 'CNY', status: 'error' })
    }
  }

  private publish(value: BalanceSnapshot): void {
    this.value = value
    for (const listener of this.listeners) listener()
  }
}

