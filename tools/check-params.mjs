import ts from "typescript";
import { glob } from "glob";
import fs from "fs";
import path from "path";

const items = [];

async function main() {
  const files = await glob("src/**/*.{ts,svelte}");

  for (const file of files) {
    let code = fs.readFileSync(file, "utf8");

    if (file.endsWith(".svelte")) {
      const match = code.match(/<script[^>]*>([\s\S]*?)<\/script>/);
      code = match ? match[1] : "";
    }

    if (!code.trim()) continue;

    const source = ts.createSourceFile(file, code, ts.ScriptTarget.ESNext, true, ts.ScriptKind.TS);

    ts.forEachChild(source, (node) => checkNode(node, file));
  }

  if (items.length > 0) {
    console.error(`Detected ${items.length} methods with more than 8 parameters. This is not allowed.`);

    process.exit(1);
  } else {
    console.log("No methods contain more than 8 parameters!");
  }
}

/**
 * @param {ts.Node} node
 * @param {string} file
 */
function checkNode(node, file) {
  let params = null;

  if (ts.isFunctionDeclaration(node) || ts.isFunctionExpression(node) || ts.isArrowFunction(node)) {
    params = node.parameters;
  } else if (ts.isMethodDeclaration(node) || ts.isConstructorDeclaration(node)) {
    params = node.parameters;
  }

  if (params && params.length > 7) {
    const { line, character } = node.getSourceFile().getLineAndCharacterOfPosition(node.getStart());

    items.push({ line, character, path: file, params, name: node.getFullText() });

    console.log(`${path.relative(process.cwd(), file)}:${line + 1}:${character + 1} – ${params.length} params`);
  }

  ts.forEachChild(node, (child) => checkNode(child, file));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
