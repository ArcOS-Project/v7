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

export function checkRuntimeInterfaces() {
  console.log("Checking runtime interfaces...");
  const files = collectFiles(SRC_DIR);
  let violations = [];

  for (const file of files) {
    const code = fs.readFileSync(file, "utf-8");

    if (code.includes("extends AppProcess {")) {
      if (!`${file}`.endsWith(`console.ts`)) violations.push(`INTERFACES: App process lacks interface (${file})`);
    }
  }

  if (violations.length > 0) {
    console.error("\nCode convention violations:");
    for (const v of violations) console.error("  " + v);

    console.error(
      `\nruntime-interfaces failed with ${violations.length} violations. If an interface for the runtime is unnecessary, use IAppProcess as an interface.`
    );
    process.exit(1);
  } else {
    console.log("\n✅ All app process implement interfaces.\n");
  }
}
