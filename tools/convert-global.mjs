import fs from "fs";
import path from "path";

// Configuration
const inputFilePath = "dist/globals.d.ts";
const outputFilePath = "dist/arcos.d.ts";

if (!inputFilePath) {
  console.error("Usage: node convert-typedefs.js <input-file> [output-file]");
  process.exit(1);
}

// Read the input file
try {
  console.log(`Reading type definitions from ${inputFilePath}...`);
  const content = fs.readFileSync(inputFilePath, "utf8");

  // Process the content
  console.log("Converting module declarations to global declarations...");
  const convertedContent = convertToGlobalDeclarations(content);

  // Write the output file
  console.log(`Writing global declarations to ${outputFilePath}...`);
  fs.writeFileSync(outputFilePath, convertedContent, "utf8");

  console.log("Conversion completed successfully!");
} catch (error) {
  console.error("Error:", error.message);
  process.exit(1);
}

/**
 * Converts module declarations to global declarations
 * @param {string} content - The original type definition file content
 * @returns {string} - The converted content with global declarations
 */
function convertToGlobalDeclarations(content) {
  // Regular expression to match declare module blocks
  const moduleRegex = /declare\s+module\s+(['"].*?['"])\s*{([^{}]*(?:{[^{}]*(?:{[^{}]*}[^{}]*)*}[^{}]*)*)}/gs;

  // Extract all module declarations
  const modules = [];
  let match;
  while ((match = moduleRegex.exec(content)) !== null) {
    const moduleName = match[1].replace(/['"]/g, "");
    const moduleContent = match[2];
    modules.push({ name: moduleName, content: moduleContent });
  }

  // Generate the new content
  let result = "";

  // Add any content that appears before the first declare module
  const firstModuleIndex = content.search(/declare\s+module/);
  if (firstModuleIndex > 0) {
    const preamble = content.substring(0, firstModuleIndex).trim();
    if (preamble) {
      result += preamble + "\n\n";
    }
  }

  // Create the global declaration block
  result += "declare global {\n";

  // Process each module
  modules.forEach((module) => {
    result += `  // From module ${module.name}\n`;
    result += `  namespace ${moduleNameToNamespace(module.name)} {\n`;

    // Process the module content
    const processedContent = processModuleContent(module.content);

    // Add the processed content with indentation
    result += processedContent
      .split("\n")
      .map((line) => (line.trim() ? "    " + line : ""))
      .join("\n");

    result += "\n  }\n\n";
  });

  result += "}\n\n";
  result += "// This empty export makes the file a module\nexport {};\n";

  return result;
}

/**
 * Processes the content inside a module declaration
 * @param {string} content - The content inside a module declaration
 * @returns {string} - The processed content
 */
function processModuleContent(content) {
  // Remove export keywords
  return content.replace(/export\s+/g, "");
}

/**
 * Converts a module name to a valid namespace name
 * @param {string} moduleName - The original module name
 * @returns {string} - A valid namespace name
 */
function moduleNameToNamespace(moduleName) {
  // Replace invalid characters and make it PascalCase
  return moduleName
    .replace(/[^\w.]/g, "_")
    .replace(/\./g, "_")
    .replace(/(^|_)([a-z])/g, (_, p1, p2) => p2.toUpperCase());
}
