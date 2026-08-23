# Architecture

`dsh-deepseek-theme` is one installable Harness bundle with one public
interface: add or remove the package from a profile. Its implementation has
two cooperating halves.

## Host half

- Registers the `deepseek-theme` settings namespace.
- Serves packaged images and fonts from a loopback-fenced route.
- Resolves `DEEPSEEK_API_KEY` per balance request and proxies only the parsed
  balance summary; the credential never reaches the browser.

## Client half

- Registers a third-party black-red theme through the Harness theme service.
- Contributes one settings row through `settings.general.item`.
- Contributes the balance meter through `conversation.input.left`.
- Owns typography presentation and the compatibility stylesheet.

## Compatibility seam

The settings row and balance meter use official Slots and services. Some
decorative effects and the separate conversation-font rule still need stable
product DOM selectors because Harness 0.1.1-rc.2 exposes no typography or
sidebar-decoration seam. These selectors are isolated in `src/client/styles.ts`
and the package pins its Harness engine version so future upgrades fail visibly
instead of silently claiming compatibility.

## Security

Every custom HTTP route requires a loopback socket, loopback Host authority,
and same-origin browser markers. Balance responses are `no-store`; assets are
immutable. API keys are resolved on every request and are never cached or
serialized by this package.

