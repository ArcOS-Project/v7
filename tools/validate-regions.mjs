import fs from "fs";
import path from "path";

const SRC_DIR = "./src"; // adjust if your code lives elsewhere
const PROCESS_CLASS_REGEX = /class\s+(\w*)\s+extends\s+(\w*Process\w*|KernelModule|BaseService)\s*{/g;

/**
 * Recursively collect .ts and .svelte files
 */
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

  // Look for process classes
  let match;
  while ((match = PROCESS_CLASS_REGEX.exec(code)) !== null) {
    if (!code.includes(`//#region LIFECYCLE`)) {
      violations.push(`LIFECYCLE: not defined in ${match[1]} (${file})`);
    }
  }
}

if (violations.length > 0) {
  console.error("\nCode convention violations:");
  for (const v of violations) console.error("  " + v);
  console.error(`\nvalidate-regions failed with ${violations.length} violations.`);
  process.exit(1);
} else {
  console.log("\nAll Process classes contain LIFECYCLE region.");
}
