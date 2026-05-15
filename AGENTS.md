# Agent Instructions

This repository is a starter for a 30-minute Codex App hands-on session.

## Source Of Truth

- Visual design rules: `DESIGN.md`.
- Hands-on flow and presenter prompts: `HANDS_ON.md`.
- Agent handoff and demo ordering notes: `AGENT_HANDOFF.md`.
- Local development commands and dependencies: `package.json`.
- shadcn / UI component configuration: `components.json`.
- App entrypoint and demo screen: `app/page.tsx`.
- Codex MCP server example: `.codex/config.toml`.

## Working Rules

- Read `AGENT_HANDOFF.md`, `DESIGN.md`, and `HANDS_ON.md` before changing the app.
- Keep the demo small and focused on one visible UI screen.
- Follow `DESIGN.md` for UI decisions.
- Do not add unrelated features, docs, or abstractions.
- Prefer existing files and patterns before creating new ones.

## Verification

Run the checks that match the change:

- TypeScript changes: `npm run typecheck`
- Lintable code changes: `npm run lint`
- Build-affecting changes: `npm run build`

## Voice Notification

VOICEVOX is for progress notifications. Keep it separate from voice control.

- Use `speaker=1`, `speedScale=1.3`, and `async=true`.
- Keep each notification under 100 characters.
- Send only concise status or result text.
- Use it at task start, progress points, important errors, and completion.
- Use `.codex/config.toml` as the Codex project-scoped example for the VOICEVOX MCP server.
