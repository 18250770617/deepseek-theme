window.__ModuleLoader__.load({
	id: "dsh-deepseek-theme",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region src/contracts.ts
		const SETTINGS_ID = "deepseek-theme";
		const DEFAULT_SETTINGS = Object.freeze({
			enabled: true,
			bodyFont: "noto",
			bodyColor: "auto",
			conversationFont: "inherit",
			progressFont: "orbitron",
			progressColor: "auto"
		});
		//#endregion
		//#region src/client/theme.ts
		const THEME_ID = "deepseek-theme-blackred";
		const BLACK_RED_THEME = Object.freeze({
			id: THEME_ID,
			colorScheme: "dark",
			tokens: Object.freeze({
				"--dsw-alias-bg-base": "rgb(19, 8, 12)",
				"--dsw-alias-bg-layer-1": "rgb(29, 11, 17)",
				"--dsw-alias-bg-layer-2": "rgb(38, 14, 21)",
				"--dsw-alias-bg-layer-3": "rgb(47, 17, 26)",
				"--dsw-alias-bg-module-platform": "rgb(48, 18, 27)",
				"--dsw-alias-bg-multi-select": "rgb(39, 14, 22)",
				"--dsw-alias-bg-overlay": "rgb(65, 24, 34)",
				"--dsw-alias-border-inverted2": "rgba(224, 133, 140, 0.30)",
				"--dsw-alias-border-inverted": "rgba(198, 83, 94, 0.25)",
				"--dsw-alias-border-l1": "rgba(180, 58, 72, 0.30)",
				"--dsw-alias-border-l2-darkmode-thin": "rgba(202, 75, 87, 0.34)",
				"--dsw-alias-border-l2": "rgba(210, 86, 98, 0.46)",
				"--dsw-alias-border-l3": "rgba(226, 118, 127, 0.62)",
				"--dsw-alias-border-l4": "rgba(239, 155, 161, 0.82)",
				"--dsw-alias-brand-primary-invert": "rgb(31, 15, 18)",
				"--dsw-alias-brand-primary-new-colorprimary-new-color": "rgb(188, 73, 83)",
				"--dsw-alias-brand-primary": "rgb(188, 73, 83)",
				"--dsw-alias-brand-text": "rgb(229, 137, 144)",
				"--dsw-alias-button-contrast-fill": "rgb(220, 119, 127)",
				"--dsw-alias-button-elevated-fill": "rgb(56, 28, 34)",
				"--dsw-alias-button-floating-fill": "rgb(45, 24, 30)",
				"--dsw-alias-button-floating-hover": "rgb(54, 29, 36)",
				"--dsw-alias-button-ghost-active-border": "rgb(155, 91, 97)",
				"--dsw-alias-button-ghost-active-fill": "rgb(56, 28, 34)",
				"--dsw-alias-button-ghost-active-hover": "rgb(66, 34, 41)",
				"--dsw-alias-button-info-fill": "rgb(188, 73, 83)",
				"--dsw-alias-button-info-hover": "rgb(215, 101, 110)",
				"--dsw-alias-button-primary-dimmed": "rgb(56, 28, 34)",
				"--dsw-alias-button-primary-hover": "rgb(190, 105, 111)",
				"--dsw-alias-interactive-bg-active": "rgba(211, 71, 86, 0.28)",
				"--dsw-alias-interactive-bg-hover-accent": "rgba(226, 93, 105, 0.38)",
				"--dsw-alias-interactive-bg-hover-solid": "rgb(36, 19, 24)",
				"--dsw-alias-interactive-bg-hover": "rgba(202, 65, 79, 0.20)",
				"--dsw-alias-label-caption": "rgb(160, 110, 120)",
				"--dsw-alias-label-dimmed": "rgb(120, 80, 90)",
				"--dsw-alias-label-primary-bluish": "rgb(255, 241, 241)",
				"--dsw-alias-label-primary-dimmed": "rgb(240, 225, 228)",
				"--dsw-alias-label-primary-foreground": "rgb(28, 12, 16)",
				"--dsw-alias-label-primary-inverted": "rgb(36, 19, 24)",
				"--dsw-alias-label-primary": "rgb(255, 241, 241)",
				"--dsw-alias-label-secondary": "rgb(220, 190, 196)",
				"--dsw-alias-label-tertiary": "rgb(180, 140, 148)",
				"--dsw-alias-markdown-citation": "rgb(36, 19, 24)",
				"--dsw-alias-markdown-code-block-banner": "rgb(30, 16, 20)",
				"--dsw-alias-markdown-code-block": "rgb(22, 11, 14)",
				"--dsw-alias-markdown-code-segment-selected": "rgb(36, 19, 24)",
				"--dsw-alias-markdown-code-segment-unselected": "rgb(22, 11, 14)",
				"--dsw-alias-markdown-inline-code": "rgb(30, 16, 20)",
				"--dsw-alias-markdown-placeholder": "rgb(30, 16, 20)",
				"--dsw-alias-markdown-tag": "rgb(30, 16, 20)",
				"--dsw-alias-scrollbar-bg-l1": "rgb(80, 44, 52)",
				"--dsw-alias-scrollbar-bg-l2": "rgb(100, 58, 68)",
				"--dsw-alias-scrollbar-hover-l1": "rgb(110, 64, 74)",
				"--dsw-alias-scrollbar-hover-l2": "rgb(120, 72, 84)",
				"--dsw-alias-state-business-primary": "rgb(188, 73, 83)",
				"--dsw-alias-state-business-tertiary": "rgb(94, 22, 28)",
				"--dsw-alias-toast-bg": "rgb(56, 28, 34)",
				"--dsw-alias-tooltip-bg": "rgb(56, 28, 34)",
				"--dsw-specific-bubble-highlight": "rgb(56, 28, 34)",
				"--dsw-specific-bubble": "rgb(30, 16, 20)",
				"--dsw-specific-input-major": "rgb(30, 16, 20)",
				"--dsw-specific-login-input": "rgb(22, 11, 14)",
				"--dsw-specific-selector": "rgb(36, 19, 24)",
				"--dsw-specific-sidebar-fill": "rgb(22, 11, 14)",
				"--dsw-specific-sidebar-nav-item-active-accent": "rgb(94, 22, 28)",
				"--dsw-specific-sidebar-nav-item-active": "rgb(56, 28, 34)",
				"--dsw-specific-sidebar-nav-item-hover": "rgb(30, 16, 20)",
				"--dsw-specific-tip": "rgb(36, 19, 24)",
				"--dsw-static-deepseek-50": "rgb(43, 23, 26)",
				"--dsw-static-deepseek-100": "rgb(67, 35, 41)",
				"--dsw-static-deepseek-200": "rgb(116, 64, 71)",
				"--dsw-static-deepseek-400": "rgb(222, 124, 131)",
				"--dsw-static-deepseek-450": "rgb(207, 95, 104)",
				"--dsw-static-deepseek-500": "rgb(188, 73, 83)",
				"--dsw-static-deepseek-600": "rgb(143, 63, 70)",
				"--dsw-static-deepseek-700-delete": "rgb(115, 49, 56)",
				"--dsw-static-deepseek-800": "rgb(89, 39, 45)",
				"--dsw-static-deepseek-900": "rgb(60, 27, 31)",
				"--dsw-static-blue-400": "rgb(203, 126, 130)",
				"--dsw-static-blue-500": "rgb(174, 82, 89)",
				"--dsw-static-blue-600": "rgb(142, 61, 68)",
				"--deepseek-theme-active": "1",
				"--deepseek-theme-sidebar-background": "linear-gradient(135deg, rgba(222, 116, 126, 0.14), transparent 34%, rgba(255, 215, 218, 0.06) 50%, transparent 66%), linear-gradient(rgba(20, 9, 13, 0.52), rgba(20, 9, 13, 0.52)), url('/deepseek-theme/assets/sidebar-bg.png')"
			})
		});
		//#endregion
		//#region src/client/appearance-controller.ts
		const FONT_STACKS = Object.freeze({
			noto: "'Noto Sans SC', 'Microsoft YaHei UI', 'PingFang SC', sans-serif",
			chakra: "'Chakra Petch', 'Noto Sans SC', 'Microsoft YaHei UI', 'PingFang SC', sans-serif",
			rajdhani: "'Rajdhani', 'Noto Sans SC', 'Microsoft YaHei UI', 'PingFang SC', sans-serif",
			orbitron: "'Orbitron', 'Rajdhani', sans-serif",
			inherit: "var(--deepseek-theme-body-font, 'Noto Sans SC', 'Microsoft YaHei UI', 'PingFang SC', sans-serif)",
			xingkai: "'STXingkai', '华文行楷', 'KaiTi', '楷体', serif",
			kaiti: "'KaiTi', '楷体', 'STKaiti', serif",
			fangsong: "'FangSong', '仿宋', 'STFangsong', serif",
			times: "'Times New Roman', Times, serif",
			georgia: "Georgia, 'Times New Roman', serif",
			cambria: "Cambria, Georgia, serif"
		});
		var AppearanceController = class {
			scope;
			theme;
			value = DEFAULT_SETTINGS;
			listeners = /* @__PURE__ */ new Set();
			constructor(scope, theme) {
				this.scope = scope;
				this.theme = theme;
			}
			getSnapshot = () => this.value;
			subscribe = (listener) => {
				this.listeners.add(listener);
				return () => {
					this.listeners.delete(listener);
				};
			};
			start() {
				const sync = () => {
					this.value = {
						...DEFAULT_SETTINGS,
						...this.scope.getSnapshot().value ?? {}
					};
					this.apply();
					for (const listener of this.listeners) listener();
				};
				const unsubscribe = this.scope.subscribe(sync);
				sync();
				return unsubscribe;
			}
			set(field, value) {
				this.scope.set(field, value);
			}
			reset(fields) {
				for (const field of fields) this.scope.set(field, DEFAULT_SETTINGS[field]);
			}
			apply() {
				const bodyFont = FONT_STACKS[this.value.bodyFont];
				const conversationFont = FONT_STACKS[this.value.conversationFont];
				const progressFont = FONT_STACKS[this.value.progressFont];
				document.body.style.setProperty("--deepseek-theme-body-font", bodyFont);
				document.body.style.setProperty("--deepseek-theme-conversation-font", conversationFont);
				document.body.style.setProperty("--deepseek-theme-progress-font", progressFont);
				this.applyColor("body", this.value.bodyColor);
				this.applyColor("progress", this.value.progressColor);
				if (this.value.enabled) this.theme.setTheme(THEME_ID);
				else if (String(this.theme.getTheme().preference) === "deepseek-theme-blackred") this.theme.setTheme("dark");
			}
			applyColor(target, color) {
				const attribute = target === "body" ? "deepseekThemeBodyColor" : "deepseekThemeProgressColor";
				const property = target === "body" ? "--deepseek-theme-body-color" : "--deepseek-theme-progress-color";
				if (/^#[0-9a-f]{6}$/iu.test(color)) {
					document.body.dataset[attribute] = "";
					document.body.style.setProperty(property, color);
				} else {
					delete document.body.dataset[attribute];
					document.body.style.removeProperty(property);
				}
			}
		};
		//#endregion
		//#region src/client/balance-controller.ts
		var BalanceController = class {
			value = {
				total: 0,
				currency: "CNY",
				status: "loading"
			};
			listeners = /* @__PURE__ */ new Set();
			getSnapshot = () => this.value;
			subscribe = (listener) => {
				this.listeners.add(listener);
				return () => {
					this.listeners.delete(listener);
				};
			};
			start() {
				const onVisibility = () => {
					if (document.visibilityState === "visible") this.refresh();
				};
				const interval = window.setInterval(() => {
					this.refresh();
				}, 6e4);
				document.addEventListener("visibilitychange", onVisibility);
				this.refresh();
				return () => {
					window.clearInterval(interval);
					document.removeEventListener("visibilitychange", onVisibility);
				};
			}
			async refresh() {
				try {
					const response = await fetch("/deepseek-theme/balance", { cache: "no-store" });
					if (!response.ok) throw new Error(String(response.status));
					const payload = await response.json();
					const total = Number(payload.total);
					if (!Number.isFinite(total) || total < 0 || typeof payload.currency !== "string") throw new Error("invalid balance");
					this.publish({
						total,
						currency: payload.currency,
						status: "ready"
					});
				} catch {
					this.publish({
						total: 0,
						currency: "CNY",
						status: "error"
					});
				}
			}
			publish(value) {
				this.value = value;
				for (const listener of this.listeners) listener();
			}
		};
		//#endregion
		//#region src/client/BalanceMeter.tsx
		function BalanceMeter({ controller }) {
			const balance = (0, react.useSyncExternalStore)(controller.subscribe, controller.getSnapshot);
			const percent = Math.min(100, Math.max(0, balance.total));
			const reading = `${balance.currency} ${balance.total.toFixed(2)} · ${percent.toFixed(1)}%`;
			const ready = balance.status === "ready";
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dstBalanceMeter",
				"data-status": balance.status,
				role: "meter",
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				"aria-valuenow": ready ? Math.round(percent * 10) / 10 : void 0,
				"aria-label": ready ? `余额能量 ${reading}` : "余额暂不可用",
				title: ready ? `余额能量 ${reading}` : "余额暂不可用；配置 DeepSeek API Key 后会自动恢复",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: "dstBalanceTrack",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "dstBalanceFill",
						style: { width: `${percent}%` }
					})
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: "dstBalanceValue",
					"aria-hidden": "true",
					children: ready ? `${percent.toFixed(2)}%` : "--%"
				})]
			});
		}
		//#endregion
		//#region src/client/SettingsPanel.tsx
		const BODY_OPTIONS = [
			{
				value: "noto",
				label: "Noto Sans SC（清晰现代）"
			},
			{
				value: "chakra",
				label: "Chakra Petch（机械切角）"
			},
			{
				value: "rajdhani",
				label: "Rajdhani（HUD 窄体）"
			}
		];
		const CONVERSATION_OPTIONS = [
			{
				value: "inherit",
				label: "跟随正文文本"
			},
			{
				value: "xingkai",
				label: "华文行楷（书写感）",
				group: "中文字体"
			},
			{
				value: "kaiti",
				label: "楷体（端正古典）",
				group: "中文字体"
			},
			{
				value: "fangsong",
				label: "仿宋（书刊风格）",
				group: "中文字体"
			},
			{
				value: "times",
				label: "Times New Roman（经典衬线）",
				group: "英文字体"
			},
			{
				value: "georgia",
				label: "Georgia（屏幕衬线）",
				group: "英文字体"
			},
			{
				value: "cambria",
				label: "Cambria（现代书刊）",
				group: "英文字体"
			}
		];
		const PROGRESS_OPTIONS = [
			{
				value: "orbitron",
				label: "Orbitron（科幻仪表）"
			},
			{
				value: "chakra",
				label: "Chakra Petch（机械终端）"
			},
			{
				value: "rajdhani",
				label: "Rajdhani（HUD 仪表）"
			}
		];
		function FontSelect({ label, value, options, onChange }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
				className: "dstSelect",
				"aria-label": label,
				value,
				onChange: (event) => {
					onChange(event.currentTarget.value);
				},
				children: [options.filter((option) => option.group === void 0).map((option) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
					value: option.value,
					children: option.label
				}, option.value)), ["中文字体", "英文字体"].map((group) => {
					const children = options.filter((option) => option.group === group);
					return children.length === 0 ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("optgroup", {
						label: group,
						children: children.map((option) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
							value: option.value,
							children: option.label
						}, option.value))
					}, group);
				})]
			});
		}
		function ColorEditor({ label, value, fallback, onChange }) {
			const [draft, setDraft] = (0, react.useState)(value === "auto" ? "" : value);
			const valid = draft === "" || /^#[0-9a-f]{6}$/iu.test(draft);
			(0, react.useEffect)(() => {
				setDraft(value === "auto" ? "" : value);
			}, [value]);
			const commit = () => {
				if (draft === "") onChange("auto");
				else if (valid) onChange(draft.toLowerCase());
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dstColorEditor",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
					className: "dstColorPicker",
					type: "color",
					"aria-label": `${label}自由色盘`,
					value: value === "auto" ? fallback : value,
					onChange: (event) => {
						onChange(event.currentTarget.value.toLowerCase());
					}
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
					className: "dstHex",
					type: "text",
					maxLength: 7,
					"aria-label": `${label}十六进制颜色`,
					"aria-invalid": !valid,
					placeholder: "自动",
					value: draft,
					onChange: (event) => {
						setDraft(event.currentTarget.value);
					},
					onBlur: commit,
					onKeyDown: (event) => {
						if (event.key === "Enter") {
							event.preventDefault();
							commit();
						}
					}
				})]
			});
		}
		function Row({ title, description, children, onReset }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: "dstSettingRow",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "dstSettingHeading",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: title }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: description })]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "dstSettingControls",
					children: [children, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: "dstReset",
						onClick: onReset,
						children: "恢复默认"
					})]
				})]
			});
		}
		function SettingsPanel({ controller }) {
			const value = (0, react.useSyncExternalStore)(controller.subscribe, controller.getSnapshot);
			const set = (field, next) => {
				controller.set(field, next);
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dstSettings",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dstSettingsTitle",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "黑红主题与排版" }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: "dstThemeToggle",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: value.enabled,
								onChange: (event) => {
									set("enabled", event.currentTarget.checked);
								}
							}), "启用黑红主题"]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Row, {
						title: "正文文本",
						description: "侧栏、按钮和普通界面文字",
						onReset: () => {
							controller.reset(["bodyFont", "bodyColor"]);
						},
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(FontSelect, {
							label: "正文文本字体",
							value: value.bodyFont,
							options: BODY_OPTIONS,
							onChange: (next) => {
								set("bodyFont", next);
							}
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ColorEditor, {
							label: "正文文本",
							value: value.bodyColor,
							fallback: "#fff1f1",
							onChange: (next) => {
								set("bodyColor", next);
							}
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Row, {
						title: "对话文本",
						description: "用户消息与 Agent 回复；代码块保持等宽字体",
						onReset: () => {
							controller.reset(["conversationFont"]);
						},
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(FontSelect, {
							label: "对话文本字体",
							value: value.conversationFont,
							options: CONVERSATION_OPTIONS,
							onChange: (next) => {
								set("conversationFont", next);
							}
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Row, {
						title: "进度数字",
						description: "余额进度条右侧的百分比字样",
						onReset: () => {
							controller.reset(["progressFont", "progressColor"]);
						},
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(FontSelect, {
							label: "进度数字字体",
							value: value.progressFont,
							options: PROGRESS_OPTIONS,
							onChange: (next) => {
								set("progressFont", next);
							}
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ColorEditor, {
							label: "进度数字",
							value: value.progressColor,
							fallback: "#e58990",
							onChange: (next) => {
								set("progressColor", next);
							}
						})]
					})
				]
			});
		}
		Object.freeze({
			body: BODY_OPTIONS.map((option) => option.value),
			conversation: CONVERSATION_OPTIONS.map((option) => option.value),
			progress: PROGRESS_OPTIONS.map((option) => option.value)
		});
		//#endregion
		//#region src/client/styles.ts
		const STYLES = String.raw`
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
`;
		function installStyles() {
			if (document.querySelector("style[data-plugin=\"dsh-deepseek-theme\"]") !== null) return () => {};
			const style = document.createElement("style");
			style.dataset.plugin = "dsh-deepseek-theme";
			style.textContent = STYLES;
			document.head.append(style);
			return () => {
				style.remove();
			};
		}
		//#endregion
		//#region src/client/index.tsx
		const inject = [
			"slots",
			"theme",
			"settingsScope"
		];
		/** Mount theme registration, durable controls, and the composer balance meter. */
		function apply(ctx) {
			ctx.effect(() => installStyles(), "deepseek-theme: styles");
			ctx.effect(() => ctx.theme.register(BLACK_RED_THEME), "deepseek-theme: theme");
			const appearance = new AppearanceController(ctx.settingsScope.bind({ namespace: SETTINGS_ID }), ctx.theme);
			const balance = new BalanceController();
			ctx.effect(() => appearance.start(), "deepseek-theme: appearance state");
			ctx.effect(() => balance.start(), "deepseek-theme: balance polling");
			ctx.slots.inject("settings.general.item", () => ctx.slots.register({
				name: "settings.general.item",
				id: "deepseek-theme",
				order: 11,
				inject: () => ({ controller: appearance })
			}, SettingsPanel));
			ctx.slots.inject("conversation.input.left", () => ctx.slots.register({
				name: "conversation.input.left",
				id: "deepseek-theme-balance",
				order: 80,
				inject: () => ({ controller: balance })
			}, BalanceMeter));
			ctx.effect(() => () => {
				document.body.style.removeProperty("--deepseek-theme-body-font");
				document.body.style.removeProperty("--deepseek-theme-conversation-font");
				document.body.style.removeProperty("--deepseek-theme-progress-font");
				document.body.style.removeProperty("--deepseek-theme-body-color");
				document.body.style.removeProperty("--deepseek-theme-progress-color");
				delete document.body.dataset.deepseekThemeBodyColor;
				delete document.body.dataset.deepseekThemeProgressColor;
			}, "deepseek-theme: presentation cleanup");
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map