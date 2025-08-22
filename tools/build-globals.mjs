/**
 * ArcOS proprietary type build process
 *
 * The files in the tools/ directory are responsible for generating and altering the ArcOS v7 type declarations to make
 * them compatible with ArcOS third-party app development using v7cli. The code in this file is not to be compared to any
 * ordinary build systems, because it is far from usual.
 *
 * © IzKuipers 2025. Licensed under GPLv3.
 */
import ts from "typescript";
import path from "path";
import fs from "fs";

const TYPES_PATH = path.resolve("dist/types.d.ts");
const THIRDPARTY_TYPES_PATH = path.resolve("src/types/thirdparty.ts");
const OUTPUT_PATH = path.resolve("dist/globals.d.ts");

function extractTypesFromThirdPartyPropMap() {
  const program = ts.createProgram([THIRDPARTY_TYPES_PATH], {
    target: ts.ScriptTarget.ESNext,
    module: ts.ModuleKind.ESNext,
  });

  const sourceFile = program.getSourceFile(THIRDPARTY_TYPES_PATH);
  if (!sourceFile) throw new Error("❌ Could not read types file");

  let propMapInterface;

  ts.forEachChild(sourceFile, (node) => {
    if (ts.isInterfaceDeclaration(node) && node.name.text === "ThirdPartyPropMap") {
      propMapInterface = node;
    }
  });

  if (!propMapInterface) throw new Error("❌ Could not locate ThirdPartyPropMap interface");

  return propMapInterface.members
    .map((member) => {
      if (ts.isPropertySignature(member) && member.name) {
        const name = member.name.getText(sourceFile);
        let typeText = "";

        if (member.type) {
          typeText = member.type.getText(sourceFile);
        } else {
          typeText = "any";
        }

        return `declare const ${name}: ${typeText};`;
      }
      return "";
    })
    .filter(Boolean);
}

const originalTypes = fs.readFileSync(TYPES_PATH, "utf8");
const globalDecls = extractTypesFromThirdPartyPropMap();
const globalBlock = globalDecls.join("\n");
const footer = `\n\nexport {};`;

fs.writeFileSync(OUTPUT_PATH, originalTypes + "\n\n" + globalBlock + footer);
console.log("✅ dist/globals.d.ts written.");
