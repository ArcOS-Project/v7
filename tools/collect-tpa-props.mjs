/**
 * ArcOS proprietary type build process
 *
 * This file is part of the other files in the tools/ directory, and is responsible for generating and altering the ArcOS v7
 * type declarations to make them compatible with ArcOS third-party app development using v7cli. The code in this file is not
 * to be compared to any ordinary build systems, because it is far from usual.
 *
 * © IzKuipers 2026. Licensed under GPLv3.
 */
import { readFile, writeFile } from "fs/promises";
import { glob } from "glob";
import { extractTypesFromThirdPartyPropMap } from "./build-globals.mjs";

const paths = ["src/types/**/*.ts", "src/interfaces/**/*.ts", "src/apps/**/*/types.ts"];

/**
 * @param {import("glob").Path} file
 */
async function parseFile(file) {
  const result = [];
  const contents = (await readFile(file.fullpath(), "utf-8"))
    .replaceAll("\r", "")
    .replaceAll("export declare", "export")
    .split("\n")
    .filter((l) => !l.startsWith("import type"));
  const seen = [];

  for (let i = 0; i < contents.length; i++) {
    const line = contents[i];
    const segment = contents.slice(i);

    if (line.startsWith("// !tpa")) {
      result.push(
        contents
          .slice(
            i + 1,
            contents.findIndex((l, idx) => idx > i && l === "// !endtpa")
          )
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

  await writeFile("dist/arcos.d.ts", output, "utf-8");
  console.log("\n✅ dist/arcos.d.ts written.\n");
}
