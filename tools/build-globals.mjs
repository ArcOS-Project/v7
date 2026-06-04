/**
 * ArcOS proprietary type build process
 *
 * This file is part of the other files in the tools/ directory, and is responsible for generating and altering the ArcOS v7
 * type declarations to make them compatible with ArcOS third-party app development using v7cli. The code in this file is not
 * to be compared to any ordinary build systems, because it is far from usual.
 *
 * © IzKuipers 2025. Licensed under GPLv3.
 */
import path from "path";
import ts from "typescript";

const THIRDPARTY_TYPES_PATH = path.resolve("src/types/tpa/thirdparty.ts");

export function extractTypesFromThirdPartyPropMap() {
  const program = ts.createProgram([THIRDPARTY_TYPES_PATH], {
    target: ts.ScriptTarget.ESNext,
    module: ts.ModuleKind.ESNext,
  });

  const sourceFile = program.getSourceFile(THIRDPARTY_TYPES_PATH);
  if (!sourceFile) throw new Error("\n❌ Could not read types file\n");

  /** @type {ts.InterfaceDeclaration} */
  let propMapInterface;

  ts.forEachChild(sourceFile, (node) => {
    if (ts.isInterfaceDeclaration(node) && node.name.text === "ThirdPartyPropMap") {
      propMapInterface = node;
    }
  });

  if (!propMapInterface) throw new Error("\n❌ Could not locate ThirdPartyPropMap interface\n");

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

        return `  export const ${name}: ${typeText};`;
      }
      return "";
    })
    .filter(Boolean);
}
