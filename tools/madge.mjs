import madge from "madge";
import fg from "fast-glob";

(async () => {
  const files = await fg(["src/**/*.ts"]);
  const res = await madge(files, { tsConfig: "./tsconfig.app.json" });
  await res.image("graph.svg");
})();
