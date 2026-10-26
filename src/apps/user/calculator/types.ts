// !tpa
/**
 * A calculator key in the Calculator app
 * - First argument is the textual override for a key or the key itself
 * - Second argument is the key itself
 */
export type CalculatorKey = [string | null, string | null]; // key,mod
/**
 * A list of calculator keys
 */
export type CalculatorKeys = [string | null, string | null][];
/**
 * Textual overrides for the calculator keys.
 * - Left hand is the original key
 * - Right hand is what to display instead
 */
export type CalculatorOverrides = { [key: string]: string };
// !endtpa
