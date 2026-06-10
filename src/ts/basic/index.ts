import { CliBasicConfig } from "./config/cli";
import { ArcBasicEngine } from "./engine";

async function Main() {
  const interpreter = await ArcBasicEngine.FromSource(
    "samples/c.txt",
    CliBasicConfig,
  );
  interpreter.execute();
}

Main();
