export async function playDataAsAudio(data: string | Uint8Array) {
  if (typeof data === "string") data = new TextEncoder().encode(data);
  else data = new Uint8Array(data);

  const ctx = new AudioContext();
  await ctx.resume();

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";
  osc.connect(gain).connect(ctx.destination);
  osc.start();

  let t = ctx.currentTime;
  for (const b of data) {
    const freq = 100 + (b / 255) * 2000;
    osc.frequency.setValueAtTime(freq, t);
    t += 20 / 1000;
  }

  osc.stop(t);
  osc.onended = () => ctx.close();
}
