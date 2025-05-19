import ts from "typescript";
import path from "path";
import fs from "fs";

// Input files
const TYPES_PATH = path.resolve("dist/types.d.ts");
const THIRDPARTY_TYPES_PATH = path.resolve("src/types/thirdparty.ts");
const OUTPUT_PATH = path.resolve("dist/globals.d.ts");

// Read the ThirdPartyPropMap interface from the types file
function extractTypesFromThirdPartyPropMap() {
  const program = ts.createProgram([THIRDPARTY_TYPES_PATH], {
    target: ts.ScriptTarget.ESNext,
    module: ts.ModuleKind.ESNext,
  });

  const checker = program.getTypeChecker();
  const sourceFile = program.getSourceFile(THIRDPARTY_TYPES_PATH);
  if (!sourceFile) throw new Error("❌ Could not read types file");

  let propMapInterface;

  // Find the ThirdPartyPropMap interface
  ts.forEachChild(sourceFile, (node) => {
    if (ts.isInterfaceDeclaration(node) && node.name.text === "ThirdPartyPropMap") {
      propMapInterface = node;
    }
  });

  if (!propMapInterface) throw new Error("❌ Could not locate ThirdPartyPropMap interface");

  // Convert interface properties to global declarations
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

// Step 1: Read original type dump
const originalTypes = fs.readFileSync(TYPES_PATH, "utf8");

// Step 2: Get types from ThirdPartyPropMap interface
const globalDecls = extractTypesFromThirdPartyPropMap();

// Step 3: Merge and write final file
const header = `// Auto-generated globals.d.ts\n\n`;
const globalBlock = `// ========== GLOBAL BINDINGS FROM ThirdPartyProps ==========\n${globalDecls.join("\n")}`;
const footer = `\n\nexport {};`;

fs.writeFileSync(OUTPUT_PATH, header + originalTypes + "\n\n" + globalBlock + footer);
console.log("✅ dist/globals.d.ts written.");
