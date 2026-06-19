# Contribution Guidelines

Thank you for helping improve OSCSMC. This project uses VitePress to build a static documentation site, and most contributions are Markdown content updates.

## Local Development

Please [fork](https://github.com/BakaInstitute/OSCSMC/fork) this repository first, then make changes in your own branch.

```bash
npm ci
npm run docs:dev
```

Build check:

```bash
npm run docs:build
```

Preview the built site locally:

```bash
npm run docs:preview
```

## Documentation Layout

| Path | Description |
| ---- | ----------- |
| `docs/` | Simplified Chinese documentation |
| `docs/en/` | English documentation |
| `docs/zht/` | Traditional Chinese documentation |
| `docs/.vitepress/config/` | VitePress navigation, sidebar, and locale config |

After adding a page, check the corresponding sidebar config so users can reach it from navigation.

## Content Rules

 - Prefer official websites, official repositories, official documentation, and official download pages
 - Mark uncertain information with status or verification date instead of presenting guesses as facts
 - Keep official capitalization for product names, project names, and license names, such as `Minecraft`, `OptiFine`, and `GPL-3.0-only`
 - Use spaces around slashes in platform lists, such as `Windows / macOS / Linux`
 - Do not submit a page that only contains `# ::WIP`; if content is still incomplete, use `::: warning` to describe the gap
 - Prefer official screenshots, and confirm that image links are reachable

## Pre-submit Checklist

 - Page title, download links, and project status have been checked
 - New external links point to official sources whenever possible
 - No `# ::WIP` placeholder remains
 - `npm run docs:build` passes
 - For structural or large content updates, open the local site and check rendering

## Pull Request

Please describe:

 - Which pages were changed
 - Sources or verification method
 - Local checks you ran

If you maintain or develop a launcher, you can mention that in the PR and list the exact entries you want corrected. We will prioritize verification against official materials.
