import fs from "fs";
import path from "path";

const SRC_DIR = "./src";

function collectFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files = files.concat(collectFiles(full));
    } else if (/\.ts$/.test(e.name)) {
      files.push(full);
    }
  }
  return files;
}

const files = collectFiles(SRC_DIR);
let violations = [];

for (const file of files) {
  const code = fs.readFileSync(file, "utf-8");

  if (/console\.(log|debug|warn|error|dir|table|clear)/gm.test(code)) {
    if (!`${file}`.endsWith(`console.ts`)) violations.push(`CONSOLE: usage of \`console\` (${file})`);
  }
}

if (violations.length > 0) {
  console.error("\nCode convention violations:");
  for (const v of violations) console.error("  " + v);
  console.error(
    `\nconsole-usage failed with ${violations.length} violations. If any of these are supposed to be permanent, please replace them with the __Console__ global.`
  );
  process.exit(1);
} else {
  console.log("\n✅ No files contain console calls.");
}
