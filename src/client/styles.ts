export const STYLES = String.raw`
@font-face{font-family:Orbitron;src:url('/deepseek-theme/assets/orbitron-latin-400-normal.woff2') format('woff2');font-style:normal;font-weight:400;font-display:swap}
@font-face{font-family:Orbitron;src:url('/deepseek-theme/assets/orbitron-latin-500-normal.woff2') format('woff2');font-style:normal;font-weight:500;font-display:swap}
@font-face{font-family:'Chakra Petch';src:url('/deepseek-theme/assets/chakra-petch-latin-400-normal.woff2') format('woff2');font-style:normal;font-weight:400;font-display:swap}
@font-face{font-family:'Chakra Petch';src:url('/deepseek-theme/assets/chakra-petch-latin-500-normal.woff2') format('woff2');font-style:normal;font-weight:500;font-display:swap}
@font-face{font-family:Rajdhani;src:url('/deepseek-theme/assets/rajdhani-latin-400-normal.woff2') format('woff2');font-style:normal;font-weight:400;font-display:swap}
@font-face{font-family:Rajdhani;src:url('/deepseek-theme/assets/rajdhani-latin-500-normal.woff2') format('woff2');font-style:normal;font-weight:500;font-display:swap}

body{font-family:var(--deepseek-theme-body-font,var(--dsw-font-family))}
body[data-deepseek-theme-body-color]{--dsw-alias-label-primary:var(--deepseek-theme-body-color)!important}
body :is([data-chat-flow-kind='user'],[data-chat-flow-kind='assistant-step']) :is([class^='_text_'],[class*=' _text_'],[class^='_markdown_'],[class*=' _markdown_']){font-family:var(--deepseek-theme-conversation-font,var(--deepseek-theme-body-font))}
body :is([data-chat-flow-kind='user'],[data-chat-flow-kind='assistant-step']) :is([class^='_text_'],[class*=' _text_'],[class^='_markdown_'],[class*=' _markdown_']) :where(code,pre,kbd,samp){font-family:var(--ds-font-family-code)!important}

body[style*='--deepseek-theme-active'],body[style*='--deepseek-theme-active'] .pI_x6G_frame{background:radial-gradient(ellipse at 78% 8%,rgba(157,36,54,.18),transparent 38%),radial-gradient(ellipse at 16% 88%,rgba(111,27,43,.16),transparent 36%),linear-gradient(135deg,#1d0b11 0%,#10080b 42%,#1a0a10 72%,#0e0709 100%)}
body[style*='--deepseek-theme-active'] .hHd-Xa_root{background-image:var(--deepseek-theme-sidebar-background);background-position:center;background-repeat:no-repeat;background-size:cover}
body[style*='--deepseek-theme-active'] .uV2eYG_card{border:1px solid transparent;background:radial-gradient(circle at 18% 0%,rgba(190,54,70,.16),transparent 42%) padding-box,linear-gradient(145deg,rgba(43,15,23,.98),rgba(25,9,14,.98)) padding-box,linear-gradient(110deg,#681f2a 0%,#dc8e94 22%,#772934 46%,#efb0b4 51%,#8d3540 74%,#501721 100%) border-box;box-shadow:inset 0 1px 0 rgba(255,222,224,.08),0 10px 28px rgba(91,12,28,.24)}
body[style*='--deepseek-theme-active'] .uV2eYG_primary{position:relative;isolation:isolate;overflow:hidden;border:1px solid rgba(224,132,140,.72);background:linear-gradient(142deg,#68212b 0%,#a74652 36%,#762a35 70%,#a94a56 100%);box-shadow:inset 0 1px 0 rgba(255,222,225,.18),inset 0 -1px 2px rgba(57,5,16,.48),0 3px 9px rgba(120,20,39,.25);text-shadow:0 1px 1px rgba(48,4,13,.68)}
body[style*='--deepseek-theme-active'] .uV2eYG_primary:hover:not(:disabled){background:linear-gradient(142deg,#842d38 0%,#c45a65 36%,#913641 70%,#ca626c 100%);box-shadow:inset 0 1px 0 rgba(255,226,228,.34),inset 0 -1px 2px rgba(57,5,16,.5),0 4px 14px rgba(141,24,45,.4)}
body[style*='--deepseek-theme-active'] .hHd-Xa_newSession{border:1px solid transparent;background:linear-gradient(135deg,rgba(76,25,35,.92),rgba(39,12,19,.92)) padding-box,linear-gradient(110deg,#7b2632 0%,#dc8a91 24%,#70232e 48%,#e9a5aa 52%,#812c37 78%,#531923 100%) border-box;box-shadow:inset 0 1px 0 rgba(255,219,222,.1),0 5px 16px rgba(80,8,23,.26)}
body[style*='--deepseek-theme-active'] .pI_x6G_sidebarCol{border-right-color:transparent;border-image:linear-gradient(180deg,#5a1823 0%,#d36f7b 18%,#7b2632 48%,#e29aa1 52%,#76232f 82%,#45131c 100%) 1;box-shadow:5px 0 18px rgba(91,12,28,.18)}

.dstBalanceMeter{display:flex;align-items:center;width:clamp(100px,14vw,188px);max-width:100%;height:20px;margin:0 4px}
.dstBalanceTrack{position:relative;display:block;flex:1 1 auto;min-width:28px;height:4px;box-sizing:border-box;border:1px solid var(--dsw-alias-border-l2);border-radius:999px;background:rgba(35,10,16,.82);box-shadow:inset 0 0 2px rgba(0,0,0,.58)}
.dstBalanceFill{position:absolute;top:-1px;left:-1px;height:4px;box-sizing:border-box;min-width:2px;max-width:calc(100% + 2px);border-radius:999px;background:linear-gradient(90deg,#6d1425 0%,#b92f49 52%,#e66578 100%);box-shadow:0 0 3px rgba(239,74,101,.48),0 0 8px rgba(220,45,77,.22)}
.dstBalanceFill::after{content:'';position:absolute;inset:0 0 0 auto;width:2px;border-radius:inherit;background:rgba(255,188,197,.82);box-shadow:0 0 3px rgba(239,74,101,.38)}
.dstBalanceValue{flex:0 0 42px;margin-left:5px;color:var(--deepseek-theme-progress-color,#df929a);font-family:var(--deepseek-theme-progress-font,var(--dsw-font-family));font-size:11px;font-variant-numeric:tabular-nums;line-height:14px;text-align:left;text-shadow:0 0 5px rgba(224,66,91,.38);white-space:nowrap}
.dstBalanceMeter[data-status='loading'],.dstBalanceMeter[data-status='error']{opacity:.48}.dstBalanceMeter[data-status='loading'] .dstBalanceValue,.dstBalanceMeter[data-status='error'] .dstBalanceValue{color:var(--dsw-alias-label-dimmed);text-shadow:none}

.dstSettings{display:grid;gap:14px;padding:14px 0;border-top:1px solid var(--dsw-alias-border-l2)}
.dstSettingsTitle{display:flex;align-items:center;justify-content:space-between;gap:14px;color:var(--dsw-alias-label-primary);font-size:14px}
.dstThemeToggle{display:flex;align-items:center;gap:7px;font-size:13px;cursor:pointer}.dstThemeToggle input{accent-color:var(--dsw-alias-brand-primary)}
.dstSettingRow{display:grid;gap:8px}.dstSettingHeading{display:grid;gap:2px;color:var(--dsw-alias-label-primary);font-size:13px;line-height:20px}.dstSettingHeading strong{font-weight:500}.dstSettingHeading span{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}
.dstSettingControls{display:grid;grid-template-columns:minmax(180px,1fr) minmax(156px,auto) auto;gap:8px;align-items:center}
.dstSelect,.dstHex,.dstReset{height:32px;box-sizing:border-box;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font:inherit;font-size:13px}.dstSelect{min-width:0;padding:0 28px 0 9px}.dstColorEditor{display:grid;grid-template-columns:34px 92px;gap:6px}.dstColorPicker{width:34px;height:32px;box-sizing:border-box;padding:3px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-1);cursor:pointer}.dstHex{width:92px;padding:0 8px;font-family:var(--ds-font-family-code);text-transform:lowercase}.dstHex[aria-invalid='true']{border-color:var(--dsw-alias-state-error-primary)}.dstReset{padding:0 10px;cursor:pointer}.dstReset:hover{background:var(--dsw-alias-interactive-bg-hover)}
.dstSelect:focus,.dstHex:focus,.dstColorPicker:focus,.dstReset:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}
@media(max-width:760px){.dstBalanceMeter{width:82px;margin:0 2px}.dstBalanceValue{flex-basis:36px;margin-left:4px;font-size:10px}.dstSettingControls{grid-template-columns:1fr auto}.dstSelect{grid-column:1/-1}}
`

export function installStyles(): () => void {
  const existing = document.querySelector('style[data-plugin="dsh-deepseek-theme"]')
  if (existing !== null) return () => {}
  const style = document.createElement('style')
  style.dataset.plugin = 'dsh-deepseek-theme'
  style.textContent = STYLES
  document.head.append(style)
  return () => { style.remove() }
}
