export const IsElectron = () => !!(window as any)["electron"] && navigator.userAgent.includes("Electron");
