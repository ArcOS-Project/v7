/**
 * ArcOS proprietary type build process
 *
 * This file is part of the other files in the tools/ directory, and is responsible for generating and altering the ArcOS v7
 * type declarations to make them compatible with ArcOS third-party app development using v7cli. The code in this file is not
 * to be compared to any ordinary build systems, because it is far from usual.
 *
 * © IzKuipers 2026. Licensed under GPLv3.
 */
import { mkdir, readFile, writeFile } from "fs/promises";
import { glob } from "glob";
import { extractTypesFromThirdPartyPropMap } from "./build-globals.mjs";

const OUTPUT_DIR = `./dist`;
const OUTPUT_FILE = `${OUTPUT_DIR}/arcos.d.ts`;

const paths = ["src/types/**/*.ts", "src/interfaces/**/*.ts", "src/apps/**/*/types.ts"];

/**
 * @param {import("glob").Path} file
 */
async function parseFile(file) {
  const result = [];
  const contents = (await readFile(file.fullpath(), "utf-8"))
    .replaceAll("export declare", "export")
    .split("\n")
    .filter((l) => !l.startsWith("import type"));

  for (let i = 0; i < contents.length; i++) {
    const line = contents[i];
    const segment = contents.slice(i);

    if (line.startsWith("// !tpa")) {
      const end = contents.findIndex((l, idx) => idx > i && l === "// !endtpa");

      console.log(`TYPES: lines ${i + 2} till ${end > 0 ? end : contents.length - 1} in ${file.relative()}`);

      result.push(
        contents
          .slice(i + 1, end)
          .map((l) => `  ${l}`) // padding
          .join("\n")
      );
    }
  }

  return result;
}

export async function getTpaInclusions() {
  const result = [];
  const files = await glob(paths, {
    withFileTypes: true,
  });

  for (const file of files) {
    result.push(...(await parseFile(file)));
  }

  return result.join("\n");
}

export async function generateTypes() {
  try {
    await mkdir(OUTPUT_DIR);
  } catch (e) {
    console.log(`\nTYPES: Failed to create output directory: ${e.message}\n`);
  }
  let output = `// @ts-nocheck
/// ARCOS GLOBAL TYPE DEFINITIONS V2
///
/// This file contains errors. I know. The important thing is that all relevant types
/// are detected and processed properly. Don't worry about it.
///
/// © IzKuipers 2025, 2026. Licensed under GPLv3.
///

declare global {
${extractTypesFromThirdPartyPropMap().join("\n")}
${await getTpaInclusions()}
}

export {};`;

  output = output.replaceAll("\r\n", "\n");

  await writeFile(OUTPUT_FILE, output, "utf-8");
  console.log(`\n✅ ${OUTPUT_FILE} written.\n`);
}
