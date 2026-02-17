## Cake API (Static JSON)

The Cake app has a static JSON API served from `cake.bysnapps.com/api`.
The source of truth is `src/data/privacy-cake.ts` in this repo.

### How it works

1. Privacy policy data lives in `src/data/privacy-cake.ts`
2. `scripts/build-api.ts` reads that data and generates JSON files
3. Output goes to `../Cake-Website/api/v1/` (the Cake-Website GitHub Pages repo)
4. Cake-Website deploys to `cake.bysnapps.com` — JSON is served from CDN

### Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/v1/index.json` | API discovery — lists all available endpoints |
| `GET /api/v1/privacy/effective-date.json` | Privacy policy effective date and last updated |
| `GET /api/v1/privacy/meta.json` | Full privacy metadata: dates, description, section index |

### When to rebuild

Run `npm run build:api` after any change to `src/data/privacy-cake.ts`.
Then commit the updated JSON files in the Cake-Website repo.

### Adding new endpoints

Add new `writeJSON()` calls in `scripts/build-api.ts`. The script is designed
to scale — just add more data sources and output paths. Keep everything versioned
under `/api/v1/` so breaking changes can go to `/api/v2/`.

---

## Skills
A skill is a set of local instructions to follow that is stored in a `SKILL.md` file. Below is the list of skills that can be used. Each entry includes a name, description, and file path so you can open the source for full instructions when using a specific skill.
### Available skills
- find-skills: Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill. (file: /Users/alecfradkin/.agents/skills/find-skills/SKILL.md)
- swiftui-expert-skill: Write, review, or improve SwiftUI code following best practices for state management, view composition, performance, modern APIs, Swift concurrency, and iOS 26+ Liquid Glass adoption. Use when building new SwiftUI features, refactoring existing views, reviewing code quality, or adopting modern SwiftUI patterns. (file: /Users/alecfradkin/.agents/skills/swiftui-expert-skill/SKILL.md)
- frontend-design: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications, or when styling/beautifying any web UI. (file: /Users/alecfradkin/.codex/skills/frontend-design/SKILL.md)
- skill-creator: Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Codex's capabilities with specialized knowledge, workflows, or tool integrations. (file: /Users/alecfradkin/.codex/skills/.system/skill-creator/SKILL.md)
- skill-installer: Install Codex skills into $CODEX_HOME/skills from a curated list or a GitHub repo path. Use when a user asks to list installable skills, install a curated skill, or install a skill from another repo (including private repos). (file: /Users/alecfradkin/.codex/skills/.system/skill-installer/SKILL.md)
### How to use skills
- Discovery: The list above is the skills available in this session (name + description + file path). Skill bodies live on disk at the listed paths.
- Trigger rules: If the user names a skill (with `$SkillName` or plain text) OR the task clearly matches a skill's description shown above, you must use that skill for that turn. Multiple mentions mean use them all. Do not carry skills across turns unless re-mentioned.
- Repo default: In this BYSN Apps repository, always treat `frontend-design` as enabled by default for frontend/UI/design tasks, even when it is not explicitly named.
- Missing/blocked: If a named skill isn't in the list or the path can't be read, say so briefly and continue with the best fallback.
- How to use a skill (progressive disclosure):
  1) After deciding to use a skill, open its `SKILL.md`. Read only enough to follow the workflow.
  2) When `SKILL.md` references relative paths (e.g., `scripts/foo.py`), resolve them relative to the skill directory listed above first, and only consider other paths if needed.
  3) If `SKILL.md` points to extra folders such as `references/`, load only the specific files needed for the request; don't bulk-load everything.
  4) If `scripts/` exist, prefer running or patching them instead of retyping large code blocks.
  5) If `assets/` or templates exist, reuse them instead of recreating from scratch.
- Coordination and sequencing:
  - If multiple skills apply, choose the minimal set that covers the request and state the order you'll use them.
  - Announce which skill(s) you're using and why (one short line). If you skip an obvious skill, say why.
- Context hygiene:
  - Keep context small: summarize long sections instead of pasting them; only load extra files when needed.
  - Avoid deep reference-chasing: prefer opening only files directly linked from `SKILL.md` unless you're blocked.
  - When variants exist (frameworks, providers, domains), pick only the relevant reference file(s) and note that choice.
- Safety and fallback: If a skill can't be applied cleanly (missing files, unclear instructions), state the issue, pick the next-best approach, and continue.
