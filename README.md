# DeepSeek Harness Black Red Theme

An installable theme bundle for DeepSeek Harness. It keeps the custom UI out
of Harness core and provides the black/red appearance, independent typography
controls, a softer balance progress bar, and a server-side balance proxy from
one package.

## Features

- Black/red third-party Harness theme with a restrained pink glow.
- Even 4 px balance track and fill below the conversation input.
- Independent body, conversation, and progress-label font controls.
- Separate Chinese and English conversation font presets.
- Free color pickers with editable hex values for body and progress text.
- DeepSeek balance lookup without exposing `DEEPSEEK_API_KEY` to the browser.
- Packaged web fonts and sidebar artwork; no CDN is required.
- No patches to Harness source code or `node_modules`.

## Compatibility

Version `0.1.4` targets **DeepSeek Harness `0.1.1-rc.2` exactly**. The package
uses official theme, settings, and conversation Slots where Harness exposes
them. A small compatibility stylesheet is isolated and version-pinned because
this Harness release has no public typography/sidebar decoration API.

## Install

Make sure the `web` profile already exists, then install directly from GitHub:

```powershell
dsh plugin --profile web add https://github.com/18250770617/deepseek-theme.git
dsh web
```

For local development, link the checkout instead:

```powershell
dsh plugin --profile web add link:D:/path/to/deepseek-theme
dsh web
```

You can also install a packaged release:

```powershell
npm run build
npm pack
dsh plugin --profile web add ./dsh-deepseek-theme-0.1.4.tgz
```

Open Harness settings and find **DeepSeek Theme** under General. The plugin is
enabled by default. Existing Harness API-key configuration is used for the
balance request; the key is resolved on the Host for every request and never
sent to the Client.

To remove the plugin:

```powershell
dsh plugin --profile web remove dsh-deepseek-theme
```

## Typography

The packaged technology-style presets are Orbitron, Chakra Petch, and
Rajdhani. Conversation presets additionally include common system fonts:

- Chinese: STXingkai, KaiTi, FangSong
- English: Times New Roman, Georgia, Cambria

System-font availability depends on the computer. Each preset includes a safe
fallback stack, so another computer remains usable even when a particular font
is absent.

## Development

```powershell
npm install
npm run typecheck
npm test
npm run build
npm run pack:check
```

The package is intentionally split into a Host half and a Client half:

- Host registers durable settings and serves loopback-fenced asset/balance
  routes.
- Client registers the theme and contributes settings/balance UI through
  Harness services and Slots.

See [docs/architecture.md](docs/architecture.md) and
[ADR 0001](docs/decisions/0001-installable-bundle.md) for the detailed design.

## License

MIT. Bundled font licenses are retained under `assets/`.
