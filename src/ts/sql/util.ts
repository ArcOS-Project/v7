import type { QueryExecResult } from "sql.js";

export function sqljsResultToJSON(result: QueryExecResult[]) {
  if (!result || result.length === 0) return [];

  return result.map((set) => {
    const { columns, values } = set;
    return values.map((row) => {
      const obj: Record<string, any> = {};
      columns.forEach((col, i) => {
        obj[col] = row[i];
      });
      return obj;
    });
  });
}
