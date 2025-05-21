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

const INPUT_PATH = path.resolve("dist/globals.d.ts");
const OUTPUT_PATH = path.resolve("dist/arcos.d.ts");

function extractAndConvertDeclarations() {
  const program = ts.createProgram([INPUT_PATH], {
    target: ts.ScriptTarget.ESNext,
    module: ts.ModuleKind.ESNext,
  });

  const sourceFile = program.getSourceFile(INPUT_PATH);
  if (!sourceFile) throw new Error("❌ Could not read globals.d.ts");

  const exports = [];

  ts.forEachChild(sourceFile, (node) => {
    if (
      ts.isImportDeclaration(node) ||
      ts.isImportEqualsDeclaration(node) ||
      ts.isExportDeclaration(node) ||
      ts.isExportAssignment(node)
    ) {
      return;
    }

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

function makeExport(node, sourceFile) {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  const transformer = (context) => {
    const visit = (n) => {
      if (ts.isImportTypeNode(n) && ts.isLiteralTypeNode(n.argument) && ts.isStringLiteral(n.argument.literal) && n.qualifier) {
        return ts.factory.createTypeReferenceNode(n.qualifier.escapedText, n.typeArguments || []);
      }
      return ts.visitEachChild(n, visit, context);
    };
    return (node) => ts.visitNode(node, visit);
  };

  const result = ts.transform(node, [transformer]);
  const transformedNode = result.transformed[0];
  result.dispose();

  let text = printer.printNode(ts.EmitHint.Unspecified, transformedNode, sourceFile).trim();

  if (/^export\s+import\s+/.test(text)) return "";
  if (text.startsWith("declare ")) {
    text = "export " + text.slice(8);
  } else if (!text.startsWith("export ")) {
    text = "export " + text;
  }

  return text;
}

function stripOriginalTypesFile() {
  const program = ts.createProgram([INPUT_PATH], {
    target: ts.ScriptTarget.ESNext,
    module: ts.ModuleKind.ESNext,
  });

  const sourceFile = program.getSourceFile(INPUT_PATH);
  if (!sourceFile) throw new Error("❌ Could not read globals.d.ts");

  const kept = [];

  ts.forEachChild(sourceFile, (node) => {
    if (ts.isImportDeclaration(node) || ts.isImportEqualsDeclaration(node)) {
      kept.push(node.getText(sourceFile));
    }
  });

  return kept.join("\n\n");
}

const exportedDeclarations = extractAndConvertDeclarations().filter(Boolean);
const stripped = stripOriginalTypesFile();
const header =
  "/// ARCOS GLOBAL TYPE DEFINITIONS\n///\n/// This file contains errors. I know. The important thing is that all relevant types\n/// are detected and processed properly. Don't worry about it.\n///\n/// © IzKuipers 2025. Licensed under GPLv3.\n///\n\n";
const globalBlock = `declare global {\n${exportedDeclarations.map((s) => "  " + s.replace(/\n/g, "\n  ")).join("\n\n")}\n}`;
const footer = `\n\nexport {};`;

fs.writeFileSync(OUTPUT_PATH, header + stripped + globalBlock + footer);
console.log("✅ dist/arcos.d.ts written.");
