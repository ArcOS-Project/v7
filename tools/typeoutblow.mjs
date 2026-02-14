import fs from "fs";
import { glob } from "glob";

const WHITELIST = ["$types/", "$interfaces/", "./", "svelte", "../interfaces", "../types", "xterm", "fuse.js"];
const ITEM_WHITELIST = ["PermissionString", "PermissionError", "Readline"];
const FILE_WHITELIST = ["src/types/thirdparty.ts"];

async function main() {
  const blown = [];
  const files = await glob("src/{types,interfaces}/**/*.{ts,svelte}");

  for (const file of files) {
    const regex = new RegExp(/import(?<isType> type|) \{(?<items>[A-Za-z,_ \n]+)\} from "(?<path>[a-zA-Z\/\.\$]+)";/gm);
    let code = fs.readFileSync(file, "utf8");

    if (file.endsWith(".svelte")) {
      const match = code.match(/<script[^>]*>([\s\S]*?)<\/script>/);
      code = match ? match[1] : "";
    }

    if (!code.trim()) continue;

    const results = [];
    let result;

    while ((result = regex.exec(code)) !== null) {
      if (result.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      const obj = {};
      result.forEach((r, i) => {
        switch (i) {
          case 1:
            obj.isType = !!r;
            break;
          case 2:
            obj.items = r.trim();
            break;
          case 3:
            obj.path = r;
            break;
          case 0:
          default:
            break;
        }
      });
      results.push(obj);
    }

    for (const result of results) {
      const { isType, items, path } = result;

      let isValid = false;

      if (FILE_WHITELIST.includes(file)) isValid = true;

      for (const allowedItem of ITEM_WHITELIST) {
        if (items.includes(allowedItem)) isValid = true;
      }

      for (const allowed of WHITELIST) {
        if (path.startsWith(allowed)) {
          isValid = true;
          break;
        }
      }

      if (!isValid && !path.endsWith("/types")) {
        console.error(`\nDetected blown reference: \n  File: ${file}\n  Imports module: ${path}\n  Items imported: ${items}`);
        blown.push(result);
      }
    }
  }

  if (blown.length > 0) {
    console.error(
      `\nDetected ${blown.length} blown references. The listed type definitions reference non-type code (like classes).\nTo prevent circular imports, this isn't allowed. Please use class interfaces and such to fix this problem.`
    );

    process.exit(1);
  } else {
    console.log("✅ No blown references detected!");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
