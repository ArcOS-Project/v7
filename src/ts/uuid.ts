export function UUID() {
  if (window.crypto?.randomUUID!) return crypto.randomUUID();

  return fallbackRandomUUID();
}

function fallbackRandomUUID() {
  let timestamp = new Date().getTime();
  let performanceTime =
    (performance && performance.now && performance.now() * 1000) || 0;

  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (char) {
      let random = (timestamp + performanceTime) % 16 | 0;
      timestamp = Math.floor(timestamp / 16);
      performanceTime = Math.floor(performanceTime / 16);
      return (char === "x" ? random : (random & 0x3) | 0x8).toString(16);
    }
  );
}
