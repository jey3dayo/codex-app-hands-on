# Agent Handoff Prompt

You are working in this repository.

This repository is for a 30-minute Codex app hands-on session.

GitHub repository:

- https://github.com/jey3dayo/codex-app-hands-on

## Goal

Build a small hands-on project that shows Codex app as a development workspace, not just a chat UI.

The session should demonstrate a real UI development flow:

1. Define design direction in `DESIGN.md`
2. Install or reference project skills
3. Set up shadcn / Base UI
4. Implement a small UI
5. Verify it in the in-app browser
6. Review diffs with built-in Git tools
7. Use MCP voice / VOICEVOX for progress notifications
8. Introduce voice control as a separate topic from voice notifications
9. Introduce Automations / Thread automations before Computer use

## Main Story

The core message is:

> Codex app can carry the whole development flow: project context, design rules, skills, terminal, browser, Git review, MCP, voice feedback, voice control, and automations.

Use `DESIGN.md` as the design policy anchor.
Use skills as the work-style and review anchor.

Recommended skills to mention or install:

- `superpowers:using-superpowers`
- `ui-ux-pro-max`
- `frontend-design`
- `baseline-ui`
- `make-interfaces-feel-better`

## Demo Shape

Keep the implementation small. A compact admin-style UI is enough.

Good candidates:

- task list
- settings screen
- dashboard

Prefer something where visual changes are obvious in a browser within a few minutes.

## Constraints

- Keep the repo simple.
- Do not overbuild.
- Prefer existing tooling conventions once chosen.
- Do not add unrelated docs or abstractions.
- If using React / Next.js, make the local dev server easy to start.
- Add a short `README.md` only if it helps the hands-on audience run the project.

## Suggested First Tasks

1. Choose the stack for a small frontend demo.
2. Add `DESIGN.md` with concrete UI rules for this project.
3. Add the minimum app scaffold.
4. Add a small UI screen that can be shown in the in-app browser.
5. Verify the dev server locally.
6. Commit the initial scaffold.

## Voice Demo Notes

VOICEVOX should be used as a showpiece, not a deep technical section.

This section is about making Codex speak progress updates. Keep it separate from voice control.

Good short phrases:

- 実装を開始します
- 確認中です
- 修正完了です
- レビュー完了です

Use:

- `speaker=1`
- `speedScale=1.3`
- `async=true`

Use `.codex/config.toml` as the Codex project-scoped example for the VOICEVOX MCP server.

## Voice Control Notes

Voice control should be introduced as a separate topic from VOICEVOX notifications.

Keep this section short:

- Explain it as operating Codex app by speaking, not making Codex speak.
- Use it to show the workspace can be driven without typing every instruction.
- Avoid mixing it with the MCP voice notification demo.

## Automations Demo Notes

Automations / Thread automations should be introduced after voice notifications and voice control, and before Computer use.

Keep this section short:

- Show it as a way to continue from the same thread context later.
- Use examples like "review this thread again tomorrow" rather than internal task management.
- Do not spend too much of the 30-minute session on setup details.

## Session Flow Notes

The feature order should be:

1. DESIGN.md and UI direction
2. Project skills and Superpowers
3. shadcn / Base UI setup
4. UI implementation
5. In-app browser verification
6. Git diff review
7. MCP voice / VOICEVOX
8. Voice control
9. Automations / Thread automations
10. Computer use and surrounding features
11. Wrap-up

## Completion Criteria

At the end of setup, the repo should have:

- a runnable frontend demo
- a `DESIGN.md`
- a clear local start command
- a small UI screen suitable for the 30-minute session
- verification that the app opens locally
- a commit pushed to `main`
