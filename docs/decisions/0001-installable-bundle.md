# 0001 — Ship one Host/Client bundle

Status: accepted

The package is a Harness bundle rather than a postinstall patcher. The bundle
row is the external seam; Host settings/routes and Client theme/Slots remain
implementation details. This keeps installation, rollback, and testing local:
removing the bundle removes every capability without restoring modified files.

We deliberately avoid modifying `node_modules` or replacing built-in plugin
rows. A version-pinned compatibility stylesheet is accepted for the few visual
surfaces that Harness 0.1.1-rc.2 does not expose through Slots or theme tokens.
