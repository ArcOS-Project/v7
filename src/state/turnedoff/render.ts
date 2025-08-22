import safeToTurnOff from "$assets/bg/safetoturnoff.png";

export default async function TurnedOff() {
  const img = document.querySelector("#safeToTurnOff") as HTMLImageElement;

  if (img) img.src = safeToTurnOff;

  try {
    window.close();
  } catch {
    // Silently error
  }
}
