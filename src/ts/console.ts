export const __Console__ = console;

const originalConsoleWarn = __Console__.warn;

// I don't like doing this, but some of the svelte warnings are complete bogus.
window.console.warn = (...args) => {
  if (`${args[0]}`.includes("[svelte]")) return;

  originalConsoleWarn(...args);
};
