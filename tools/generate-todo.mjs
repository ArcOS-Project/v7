// generate-todo.mjs
import { promises as fs } from "fs";
import path from "path";

const ROOT = "src";

// format YYYY-MM-DD
function getDateStamp() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

const OUTPUT = `COMMENTING_TODO_${getDateStamp()}.md`;

const HEADER = `# COMMENTING TODO

This file illustrates the source code that still has to be commented. When commenting code for ArcOS v7, follow these simple guidelines:

- If the code can be understood by anybody, don't comment it
- If there's already a comment in place that isn't correct anymore, change it
- If a comment is unnecessary or can otherwise be omitted, remove it
- When encountering code with critical bugs or broken imports (despite the workflows not picking them up), report to Izaak or fix it yourself with a pull request.
- Do not change comments that are marked 'frozen' or that say they should not be changed. These comments contain critical information that could cause problems if left out.
- If a piece of code is hard to understand just by reading it, write a comment explaining the unclear parts of the code so that we _do_ understand it.

`;

async function collectFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "types") continue; // skip `types/` dirs
      files.push(...(await collectFiles(fullPath)));
    } else if (entry.isFile()) {
      if (entry.name.endsWith(".ts") && entry.name !== "types.ts") {
        files.push(fullPath);
      }
    }
  }

  return files;
}

function toMarkdown(files) {
  let md = HEADER;
  md += `| ✓ | File path | Commenting history |\n`;
  md += `|---|-----------|--------------------|\n`;
  for (const f of files) {
    md += `| [ ] | ${f} | |\n`;
  }
  return md;
}

async function main() {
  const files = await collectFiles(ROOT);
  const md = toMarkdown(files.sort());
  await fs.writeFile(OUTPUT, md, "utf8");
  console.log(`Generated ${OUTPUT} with ${files.length} entries.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
