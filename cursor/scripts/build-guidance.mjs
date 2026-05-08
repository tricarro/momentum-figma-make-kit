#!/usr/bin/env node
/**
 * Generates translated Cursor rule files (.mdc) under guidance/ from
 * figma-make-files/guidelines/*.md — run from repo root:
 *   node guidance/scripts/build-guidance.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..", "..");
const SOURCE_DIR = path.join(REPO_ROOT, "figma-make-files", "guidelines");
const DEST_DIR = path.join(REPO_ROOT, "guidance");

/** @param {string} body */
function translateBody(body) {
  let out = body;

  const phraseReplacements = [
    [/Momentum Design System — Figma Make Guidelines/g, "Momentum Design System — IDE guidelines (Cursor)"],
    [/\(Momentum \+ Figma Make\)/g, "(Momentum + IDE)"],
    [/ — Figma Make guidance/g, " — Momentum guidance (IDE)"],
    [/Figma Make notes/g, "Implementation notes"],
    [/In Figma Make,/g, "In the IDE,"],
    [
      /Guidelines for using the Momentum Design System \(components, tokens, and assets\) within Figma Make\./g,
      "Guidelines for using the Momentum Design System (components, tokens, and assets) when prototyping in the IDE with AI assistance.",
    ],
    [
      /who use Figma Make to create interactive prototypes/g,
      "who use AI-assisted coding in the IDE to create interactive prototypes",
    ],
  ];

  for (const [re, rep] of phraseReplacements) {
    out = out.replace(re, rep);
  }

  // Title lines: "# Foo (Momentum) — Figma Make guidance"
  out = out.replace(
    /^#\s+(.+?)\s+—\s+Figma Make guidance\s*$/gm,
    "# $1 — Momentum guidance (IDE)",
  );

  out = out.replace(/^#\s+Design tokens \(Momentum \+ Figma Make\)/gm, "# Design tokens (Momentum + IDE)");
  out = out.replace(/^#\s+Layout and typography \(Momentum \+ Figma Make\)/gm, "# Layout and typography (Momentum + IDE)");
  out = out.replace(/^#\s+Components \(Momentum \+ Figma Make\)/gm, "# Components (Momentum + IDE)");
  out = out.replace(/^#\s+Package setup \(Momentum \+ Figma Make\)/gm, "# Package setup (Momentum + IDE)");

  out = out.replace(
    /^Begin by installing the `@momentum-design\/components` package:\s*\n\s*`yarn add @momentum-design\/components`/gm,
    `Begin by installing \`@momentum-design/components\` with your package manager (\`npm\`, \`yarn\`, or \`pnpm\`). When working in this repo, pin versions to match [\`figma-make-files/package.json\`](../figma-make-files/package.json).\n\n\`\`\`bash\nnpm install @momentum-design/components\n\`\`\``,
  );

  out = out.replace(/\]\(\.\/([^)]+)\)/g, (full, inner) => {
    if (/^[a-z]+:/i.test(inner)) return full;
    const hashIdx = inner.indexOf("#");
    const pathPart = hashIdx >= 0 ? inner.slice(0, hashIdx) : inner;
    const hash = hashIdx >= 0 ? inner.slice(hashIdx) : "";
    if (!pathPart.endsWith(".md")) return full;
    let base = pathPart.slice(0, -3);
    if (base === "Guidelines") base = "guidelines";
    const newPath = `${base}.mdc${hash}`;
    return `](./${newPath})`;
  });

  // Parent-relative links: ../styles.md#layout → ../styles.mdc#layout
  out = out.replace(/\]\(\.\.\/([^#)]+\.md)(#[^)]*)?\)/g, (full, pathPart, hash = "") => {
    const base = pathPart.replace(/\.md$/, "");
    return `](../${base}.mdc${hash})`;
  });

  // Same-directory links written without ./ (e.g. [ThemeProvider](themeprovider.md))
  out = out.replace(/\]\(([a-z][a-z0-9]*\.md)\)/gi, (full, name) => {
    const base = name.replace(/\.md$/i, "").toLowerCase();
    return `](./${base}.mdc)`;
  });

  out = out.replace(/\bsetup\.md\b/g, "setup.mdc");
  out = out.replace(/\bGuidelines\.md\b/g, "guidelines.mdc");
  out = out.replace(/\bcomponents\.md\b/g, "components.mdc");

  // Normalize link labels after path rewrites
  out = out.replace(/\[tokens\.md\]\(/g, "[tokens.mdc](");
  out = out.replace(/\[styles\.md\]\(/g, "[styles.mdc](");

  // Examples like ./components/button.md (not always markdown links)
  out = out.replace(/\.\/components\/([a-z0-9]+)\.md\b/gi, "./components/$1.mdc");

  // Remaining "Figma Make" phrases in body copy
  out = out.replace(/## Checklist for Figma Make/g, "## Checklist for IDE prototypes");
  out = out.replace(/\bFigma Make prototypes\b/g, "IDE prototypes");
  out = out.replace(/\bfor Figma Make\b/gi, "for IDE work");
  out = out.replace(/\bIn Figma Make\b/g, "In the IDE");
  out = out.replace(/Figma Make should prefer/g, "Prefer");
  out = out.replace(/Figma Make should/g, "You should");
  out = out.replace(
    /written for \*\*Figma Make\*\*/g,
    "written for **IDE prototypes**",
  );
  out = out.replace(/\bmost Figma Make code\b/g, "most IDE / vibe-coded UI");
  out = out.replace(
    /\*\*Figma Make \+ this kit:\*\*/g,
    "**This repo / Cursor:**",
  );
  out = out.replace(/\bFigma Make kit work:/g, "Kit work:");
  out = out.replace(/^### Figma Make:/gm, "### momentum-icons (this repo):");
  out = out.replace(/\bFor Figma Make,/g, "For Cursor work,");
  out = out.replace(
    /Momentum \*\*copy\*\* in Figma Make/g,
    "Momentum **copy** in the IDE",
  );
  out = out.replace(/\bas the Figma Make default\b/g, "as the default for IDE prototypes");
  out = out.replace(/\bin Figma Make prototypes\b/g, "in IDE prototypes");
  out = out.replace(/\bPrefer \*\*`Button`\*\* for Figma Make\b/g, "Prefer **`Button`** for IDE work");
  return out;
}

/** @param {string} sourceBasename e.g. Guidelines.md */
function destBasename(sourceBasename) {
  if (sourceBasename === "Guidelines.md") return "guidelines.mdc";
  return `${path.basename(sourceBasename, ".md")}.mdc`;
}

/** @param {string} outRel POSIX-style path like "components/button.mdc" */
function frontmatterFor(outRel) {
  const normalized = outRel.replace(/\\/g, "/");
  const parts = normalized.split("/");
  const base = parts[parts.length - 1];
  const dir = parts.length > 1 ? parts.slice(0, -1).join("/") : ".";

  if (base === "guidelines.mdc") {
    return `---
description: Momentum Design System — core guardrails for vibe coding (Cursor)
alwaysApply: true
---

`;
  }

  if (dir === "." && base === "setup.mdc") {
    return `---
description: Momentum package setup — CSS bundles, providers, theme classes
globs: "**/*.{css,tsx,jsx}"
alwaysApply: false
---

`;
  }

  if (dir === "." && (base === "tokens.mdc" || base === "styles.mdc")) {
    const label = base === "tokens.mdc" ? "design tokens" : "layout and typography";
    return `---
description: Momentum ${label}
globs: "**/*.{css,tsx,jsx}"
alwaysApply: false
---

`;
  }

  if (dir === "." && base === "components.mdc") {
    return `---
description: Momentum React components — imports, export list, icon names
globs: "**/*.{tsx,jsx}"
alwaysApply: false
---

`;
  }

  if (dir.startsWith("components")) {
    const stem = path.basename(base, ".mdc");
    const pretty = stem.replace(/([a-z])([A-Z])/g, "$1 $2");
    return `---
description: Momentum ${pretty} component — usage and guidance
globs: "**/*.{tsx,jsx}"
alwaysApply: false
---

`;
  }

  return `---
description: Momentum guidance
globs: "**/*.{tsx,jsx}"
alwaysApply: false
---

`;
}

function walkMarkdownFiles(dir, baseDir = dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      walkMarkdownFiles(full, baseDir, acc);
    } else if (ent.name.endsWith(".md")) {
      acc.push(path.relative(baseDir, full));
    }
  }
  return acc;
}

function main() {
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error("Missing source:", SOURCE_DIR);
    process.exit(1);
  }

  const files = walkMarkdownFiles(SOURCE_DIR);
  fs.mkdirSync(path.join(DEST_DIR, "components"), { recursive: true });

  for (const rel of files.sort()) {
    const srcPath = path.join(SOURCE_DIR, rel);
    const raw = fs.readFileSync(srcPath, "utf8");
    const body = translateBody(raw);
    const outName = destBasename(path.basename(rel));
    const outRel = path.join(path.dirname(rel), outName);
    const outPath = path.join(DEST_DIR, outRel);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    const fm = frontmatterFor(outRel.split(path.sep).join("/"));
    fs.writeFileSync(outPath, fm + body, "utf8");
    console.log("wrote", path.relative(REPO_ROOT, outPath));
  }

  console.log("Done:", files.length, "files");
}

main();
