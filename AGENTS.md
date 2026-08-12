# AGENTS.md

Instructions for Codex and other coding agents working in this repository.

## 1. Read the project memory first

Before any analysis, review, planning, or code change, read `CLAUDE.md` at the repository root in full.

Treat the decisions and rules in `CLAUDE.md` as the authoritative project context. Do not silently override a validated product, editorial, factual, visual, technical, or workflow decision with your own preference.

Also read `README.md` and `docs/design/README.md` when the task touches setup, architecture, design, or assets.

For factual review of the Lot 1 homepage, also read `docs/decisions/2026-08-12-validations-factuelles-lot1.md`, which records explicit LabEvents confirmations made during PR #3 review. This document supplements the factual record without weakening the doctrine in `CLAUDE.md`.

## 2. Preserve the factual doctrine

Never invent or publish LabEvents- or client-specific facts, including clients, testimonials, results, figures, qualifications, guarantees, prices, contact details, services, photos, screenshots, or features.

If a fact is unknown, keep it absent from the public UI or represented explicitly as `null`, `TODO`, or another technical placeholder in source code only.

Never use the design board or generated imagery as factual proof.

## 3. Respect the existing architecture

Use the existing Astro + TypeScript strict + Tailwind CSS 4 architecture unless a real technical issue requires otherwise.

Do not add React, Vue, Svelte, a CMS, a heavy UI library, or another structural dependency without explicit justification and approval.

Preserve centralized data sources and the LabEvents design tokens. Do not replace the existing Tailwind token strategy merely because another approach is more familiar.

## 4. Work in small reviewed lots

Follow the lot structure defined in `CLAUDE.md`.

Use a dedicated branch for implementation work, keep commits focused, and open a PR for review.

Do not push functional changes directly to `main`.

Do not merge a PR on your own initiative.

Do not automatically start the next lot when the current task is complete.

## 5. Review behavior

When asked for a review or audit, default to read-only work unless the user explicitly asks for fixes.

Separate:
- real bugs;
- credible risks;
- personal preferences.

Do not propose work from future lots as a required fix for the current lot unless it is genuinely blocking.

When possible, run the project's relevant checks and builds and report whether they actually succeeded.

## 6. If instructions conflict

If `AGENTS.md` and `CLAUDE.md` appear to conflict, follow `CLAUDE.md` and explicitly flag the conflict instead of resolving it silently.

If a requested change would contradict a validated decision in `CLAUDE.md`, stop and explain the conflict before changing the project.
