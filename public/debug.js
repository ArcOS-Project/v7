export default async function ({ term, rl, Sleep }) {
  term.options.cursorStyle = "block";

  rl.println("\nSEARCHING FOR *");
  await Sleep(2000);

  rl.println("LOADING");
  await Sleep(3000);

  rl.println("READY.\nRUN\n");

  for (let i = 0; i < 1000; i++) {
    rl.print(+Math.random().toFixed(0.1) ? "/" : "\\");
    await Sleep(5);
  }

  rl.println("\n\n?OUT OF MEMORY  ERROR IN 10\nREADY.");
}
