---
name: momentum-project-setup
description: >-
  Clones the Momentum Design starter-react repository into a folder the user
  chooses, installs dependencies, runs npm run build, and starts local dev (or
  documents the exact commands). Use when the user wants a new React + Momentum app from
  starter-react, clones momentum-design/starter-react, or asks to set up the
  starter in a path they specify.
disable-model-invocation: false
---

# Project setup — `starter-react`

Clone **[momentum-design/starter-react](https://github.com/momentum-design/starter-react)** into a **user-selected** directory and finish setup: install packages, run **`npm run build`**, then **`npm run dev`**.

Upstream references: [starter-react on GitHub](https://github.com/momentum-design/starter-react), [`@momentum-design/components` on npm](https://www.npmjs.com/package/@momentum-design/components), design system repo [momentum-design/momentum-design](https://github.com/momentum-design/momentum-design).

## Prerequisites

- **Git** (for cloning).
- **Node.js ≥ 24.6.0** — declared in upstream `package.json` **engines** and **`.nvmrc`** (currently `24.6.0`). Common LTS releases (18.x, 20.x, 22.x) are **below** this floor and often break install or dev; switch Node **before** installing dependencies.
- **npm** (bundled with Node) and network access to the public npm registry.

## Before cloning

1. **Resolve the destination** with the user if they did not give a path:
   - Absolute path is preferred (fewer mistakes).
   - Decide **clone layout**:
     - **Empty folder:** clone *into* it (`git clone <url> .`).
     - **Parent folder:** clone *into a new child* (`git clone <url> <project-name>`).

2. **Fail safely:** If the target already exists and is not empty, **stop** and ask whether to use a different path, remove contents (only if they explicitly confirm), or clone into a subfolder.

3. **Do not** paste or generate GitHub credentials; use **public HTTPS** clone URL only:

   ```text
   https://github.com/momentum-design/starter-react.git
   ```

## Clone

From a shell, using the layout the user chose:

**Into an empty directory:**

```bash
cd "/path/to/empty/project-folder"
git clone https://github.com/momentum-design/starter-react.git .
```

**Into a new subdirectory under a parent:**

```bash
cd "/path/to/parent"
git clone https://github.com/momentum-design/starter-react.git my-momentum-app
cd my-momentum-app
```

Optional shallow clone for speed:

```bash
git clone --depth 1 https://github.com/momentum-design/starter-react.git .
```

## Install and run

1. **Node version:** Align with **`.nvmrc`** and **`engines`** (≥ **24.6.0**) before install — e.g. `nvm install` / `nvm use` in the project directory. If `nvm` (or another version manager) is unavailable, ask the user to install or switch to a matching Node explicitly.

2. **Install npm packages:** From the project root (where `package.json` lives), install dependencies into **`node_modules`**:

   ```bash
   npm ci
   ```

   Prefer **`npm ci`** when **`package-lock.json`** is present — it installs exactly what the lockfile specifies. If there is no lockfile or **`npm ci`** fails for that reason, run **`npm install`** once and mention that this created or updated the lockfile.

   Upstream may list **`resolutions`** in `package.json` (a Yarn-style field). **`npm ci`** + the lockfile usually pins versions correctly; if duplicate or unexpected package versions appear, see npm **`overrides`** vs Yarn **`resolutions`** in upstream docs — only troubleshoot if something breaks.

3. **Production build (after install):** Immediately after **`npm ci`** / **`npm install`** succeeds, run:

   ```bash
   npm run build
   ```

   This runs TypeScript (`tsc`) and the Vite production build and surfaces setup or type errors before local dev. Fix failures before starting the dev server.

4. **Dev server:** Start per `package.json` scripts (typically):

   ```bash
   npm run dev
   ```

5. **Optional:** **`npm run preview`** serves the production build locally if they want to spot-check output after **`npm run build`**.

   After **`npm run preview`** starts, read the **`http://localhost:…`** URL from the terminal (Vite’s preview server defaults to port **4173** unless the log shows another port). **Open that URL in Cursor’s browser** — e.g. Command Palette → **Simple Browser: Show**, paste the URL, or use Cursor’s Browser / embedded preview if your build exposes it — so the app opens in-editor instead of only an external browser.

Execute these commands **yourself** when the environment allows (real terminal), not only as instructions—unless the user is on a restricted host; then give the exact sequence.

## After setup (tell the user briefly)

- **Imports:** The starter may use `@momentum-design/components/react`; older TypeScript setups sometimes need `@momentum-design/components/dist/react` — match what is already in the cloned repo.
- **Production:** Upstream README states the kit is **not production-ready** without build/analysis adjustments (e.g. asset bundling). Treat as prototype/starter unless they harden tooling.
- **Lottie / Animation:** Starter README notes **Animation / Lottie** may be unavailable until Vite is configured for Lottie JSON.

## Relationship to this repo (`momentum-figma-make-kit`)

This skill **does not** copy the **Momentum Figma Make Kit** repo; it only bootstraps **`starter-react`** in the user’s folder. If they also need Cursor rules from **this** kit, that is a separate step (copy `cursor/rules/` from this repository or run its build scripts)—only add that if they ask.
