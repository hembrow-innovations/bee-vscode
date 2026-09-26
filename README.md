# bee-vscode

VS Code extension that shells bee. Bee stays the project management tool. This repo is not hive-queen and not a desktop shell inside bee.

Behaviour beyond the development host and `bee --version` is not decided. Do not invent it here.

## Develop

- **Install**: `pnpm install`
- **Test**: `pnpm test`
- **Typecheck**: `pnpm typecheck`
- **Launch**: open this folder in VS Code and run the `Run Extension` configuration. It compiles, then opens an Extension Development Host. Command Palette: `Bee: Show Version`.

`bee` must be on PATH in that host. A missing binary shows `bee is not on PATH`.
