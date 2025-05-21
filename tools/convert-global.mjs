import ts from "typescript";
import path from "path";
import fs from "fs";

// File paths
const INPUT_PATH = path.resolve("dist/globals.d.ts");
const OUTPUT_PATH = path.resolve("dist/arcos.d.ts");

// Extract and convert declarations
function extractAndConvertDeclarations() {
  const program = ts.createProgram([INPUT_PATH], {
    target: ts.ScriptTarget.ESNext,
    module: ts.ModuleKind.ESNext,
  });

  const sourceFile = program.getSourceFile(INPUT_PATH);
  if (!sourceFile) throw new Error("❌ Could not read globals.d.ts");

  const exports = [];

  ts.forEachChild(sourceFile, (node) => {
    // Skip imports, exports, and "export import" nonsense
    if (
      ts.isImportDeclaration(node) ||
      ts.isImportEqualsDeclaration(node) ||
      ts.isExportDeclaration(node) ||
      ts.isExportAssignment(node)
    ) {
      return;
    }

    // Top-level declarations
    if (
      ts.isFunctionDeclaration(node) ||
      ts.isInterfaceDeclaration(node) ||
      ts.isTypeAliasDeclaration(node) ||
      ts.isClassDeclaration(node) ||
      ts.isEnumDeclaration(node) ||
      ts.isVariableStatement(node)
    ) {
      exports.push(makeExport(node, sourceFile));
    }

    // `declare global { ... }`
    if (
      ts.isModuleDeclaration(node) &&
      node.name.kind === ts.SyntaxKind.Identifier &&
      node.name.text === "global" &&
      node.body &&
      ts.isModuleBlock(node.body)
    ) {
      for (const stmt of node.body.statements) {
        if (
          ts.isImportDeclaration(stmt) ||
          ts.isImportEqualsDeclaration(stmt) ||
          ts.isExportDeclaration(stmt) ||
          ts.isExportAssignment(stmt)
        ) {
          continue;
        }
        exports.push(makeExport(stmt, sourceFile));
      }
    }

    // `declare module "..." { ... }`
    if (
      ts.isModuleDeclaration(node) &&
      node.name.kind === ts.SyntaxKind.StringLiteral &&
      node.body &&
      ts.isModuleBlock(node.body)
    ) {
      for (const stmt of node.body.statements) {
        if (
          ts.isImportDeclaration(stmt) ||
          ts.isImportEqualsDeclaration(stmt) ||
          ts.isExportDeclaration(stmt) ||
          ts.isExportAssignment(stmt)
        ) {
          continue;
        }
        exports.push(makeExport(stmt, sourceFile));
      }
    }
  });

  return exports;
}

// Convert `declare` to `export`, skip `export import`
function makeExport(node, sourceFile) {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  const transformer = (context) => {
    const visit = (n) => {
      if (ts.isImportTypeNode(n) && ts.isLiteralTypeNode(n.argument) && ts.isStringLiteral(n.argument.literal) && n.qualifier) {
        // Replace import("...").X with just X
        return ts.factory.createTypeReferenceNode(n.qualifier.escapedText, n.typeArguments || []);
      }
      return ts.visitEachChild(n, visit, context);
    };
    return (node) => ts.visitNode(node, visit);
  };

  // Transform the node
  const result = ts.transform(node, [transformer]);
  const transformedNode = result.transformed[0];
  result.dispose();

  let text = printer.printNode(ts.EmitHint.Unspecified, transformedNode, sourceFile).trim();

  // Remove invalid 'export import' lines
  if (/^export\s+import\s+/.test(text)) return "";

  // Convert declare to export
  if (text.startsWith("declare ")) {
    text = "export " + text.slice(8);
  } else if (!text.startsWith("export ")) {
    text = "export " + text;
  }

  return text;
}

// Strip all types we're removing, only keep real import statements if desired
function stripOriginalTypesFile() {
  const program = ts.createProgram([INPUT_PATH], {
    target: ts.ScriptTarget.ESNext,
    module: ts.ModuleKind.ESNext,
  });

  const sourceFile = program.getSourceFile(INPUT_PATH);
  if (!sourceFile) throw new Error("❌ Could not read globals.d.ts");

  const kept = [];

  ts.forEachChild(sourceFile, (node) => {
    // Keep only actual imports if you still want them at top-level
    if (ts.isImportDeclaration(node) || ts.isImportEqualsDeclaration(node)) {
      kept.push(node.getText(sourceFile));
    }
  });

  return kept.join("\n\n");
}

// Step 1: Extract + convert all valid declarations
const exportedDeclarations = extractAndConvertDeclarations().filter(Boolean);

// Step 2: Strip any old declarations or modules
const stripped = stripOriginalTypesFile();

// Step 3: Write final file
const header = `// Auto-generated arcos.d.ts\n\n`;
const globalBlock = `// ========== CONVERTED GLOBAL EXPORTS ==========\ndeclare global {\n${exportedDeclarations
  .map((s) => "  " + s.replace(/\n/g, "\n  "))
  .join("\n\n")}\n}`;
const footer = `\n\nexport {};`;

fs.writeFileSync(OUTPUT_PATH, header + stripped + "\n\n" + globalBlock + footer);
console.log("✅ dist/arcos.d.ts written.");
