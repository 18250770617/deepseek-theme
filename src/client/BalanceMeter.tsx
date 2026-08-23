import { useSyncExternalStore } from 'react'
import type { BalanceController } from './balance-controller.ts'

export interface BalanceMeterProps {
  controller: BalanceController
}

export function BalanceMeter({ controller }: BalanceMeterProps) {
  const balance = useSyncExternalStore(controller.subscribe, controller.getSnapshot)
  const percent = Math.min(100, Math.max(0, balance.total))
  const reading = `${balance.currency} ${balance.total.toFixed(2)} · ${percent.toFixed(1)}%`
  const ready = balance.status === 'ready'
  return (
    <div
      className="dstBalanceMeter"
      data-status={balance.status}
      role="meter"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={ready ? Math.round(percent * 10) / 10 : undefined}
      aria-label={ready ? `余额能量 ${reading}` : '余额暂不可用'}
      title={ready ? `余额能量 ${reading}` : '余额暂不可用；配置 DeepSeek API Key 后会自动恢复'}
    >
      <span className="dstBalanceTrack">
        <span className="dstBalanceFill" style={{ width: `${percent}%` }} />
      </span>
      <span className="dstBalanceValue" aria-hidden="true">{ready ? `${percent.toFixed(2)}%` : '--%'}</span>
    </div>
  )
}

