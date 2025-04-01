export function arrayToAsciiTable(arr: string[][] | number[][]): string {
  if (!arr || arr.length === 0) {
    return "";
  }

  const numCols: number = arr[0].length;
  const colWidths: number[] = Array(numCols).fill(0);

  // Function to strip ANSI escape codes from a string
  function stripAnsi(str: string): string {
    return str.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><~]/g, "");
  }

  // Calculate maximum width for each column, ignoring escape codes
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== numCols) {
      return "Invalid table: inconsistent column counts";
    }
    for (let j = 0; j < numCols; j++) {
      const cellValue: string = String(arr[i][j]);
      const strippedValue: string = stripAnsi(cellValue); // Strip escape codes
      colWidths[j] = Math.max(colWidths[j], strippedValue.length);
    }
  }

  let tableString: string = "";

  // Helper function to create a table row string
  function createRowString(row: string[] | number[]): string {
    let rowString: string = "│"; // Left border
    for (let i = 0; i < numCols; i++) {
      const cellValue: string = String(row[i]);
      const strippedValue: string = stripAnsi(cellValue); // Strip escape codes before calculating padding
      const padding: string = " ".repeat(colWidths[i] - strippedValue.length);
      rowString += ` ${cellValue}${padding} │`;
    }
    return rowString + "\n";
  }

  // Create header separator
  function createSeparator(left: string, horizontal: string, mid: string, right: string): string {
    let separator: string = left;
    for (let i = 0; i < numCols; i++) {
      separator += horizontal.repeat(colWidths[i] + 2) + mid;
    }
    separator = separator.slice(0, -1) + right + "\n";
    return separator;
  }

  // Add top border
  tableString += createSeparator("┌", "─", "┬", "┐");

  // Add rows to the table string
  tableString += createRowString(arr[0]); // Header row
  tableString += createSeparator("├", "─", "┼", "┤"); // Separator after header

  for (let i = 1; i < arr.length; i++) {
    tableString += createRowString(arr[i]);
    tableString += createSeparator("├", "─", "┼", "┤"); // Separator after each row
  }

  // Replace the last separator with the bottom border
  tableString = tableString.slice(0, -createSeparator("├", "─", "┼", "┤").length) + createSeparator("└", "─", "┴", "┘");

  return tableString;
}
