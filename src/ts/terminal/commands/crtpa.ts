import { textToBlob } from "$ts/fs/convert";
import { join } from "$ts/fs/util";
import { tryJsonParse } from "$ts/json";
import { DefaultThirdPartyAppData } from "$ts/server/user/store";
import type { ScriptedApp } from "$types/app";
import type { TerminalCommand } from "$types/terminal";
import { BRGREEN, BRPURPLE, BRYELLOW, RESET } from "../store";

export const CrTpaCommand: TerminalCommand = {
  keyword: "crtpa",
  async exec(term, flags, argv) {
    try {
      const tpaData: ScriptedApp = DefaultThirdPartyAppData;
      const sectionMax = 6;
      let location = "";
      let inputIndex = 1;
      let inputMax = 0;
      let sectionIndex = 0;

      const input = async (prompt: string, expectedType: string, test?: RegExp) => {
        const result = await term.rl?.read(`${BRYELLOW}[${inputIndex}/${inputMax}] ${BRGREEN}${prompt}${RESET} `);

        if (!result) {
          term.Error("Expected a valid input.");

          return await input(prompt, expectedType, test);
        }

        if (test && !test.test(result)) {
          term.Error("Input doesn't match expected format");

          return await input(prompt, expectedType, test);
        }

        const parsed = tryJsonParse(result);

        if (typeof parsed !== expectedType) {
          term.Error(`Expected input of type ${expectedType}, but got ${typeof parsed}.`);

          return await input(prompt, expectedType, test);
        }

        inputIndex++;
        return parsed;
      };

      const header = (caption: string) => {
        term.rl?.println(`\r\n${BRYELLOW}(${sectionIndex}/${sectionMax}) ${BRPURPLE}-> ${RESET}${caption.toUpperCase()}`);
      };

      const section = (headerText: string, max: number) => {
        sectionIndex++;
        inputIndex = 1;
        inputMax = max;
        header(headerText);
      };

      const size = ([w, h]: [number, number]) => ({ w, h });

      section("Establishing Project", 3);

      location = await input("Where do you want to save your application?", "string");
      tpaData.entrypoint = await input("What do you want to call the main JS file?", "string", /[a-zA-Z0-9_\-\ ]+\.js/g);
      tpaData.id = await input("Enter a unique ID for your application:", "string", /[a-zA-Z]+/g);

      section("Basic metadata", 4);

      tpaData.metadata.name = await input("Name of your app:", "string");
      tpaData.metadata.author = await input("Author of you app:", "string");
      tpaData.metadata.version = await input("version of your app:", "string", /[0-9]+\.[0-9]+\.[0-9]/g);
      tpaData.metadata.icon = await input("icon ID of your app:", "string");

      section("Size and Position", 4);

      tpaData.size = size((await input("default size (WxH):", "string", /[0-9]+x[0-9]+/g)).split("x").map(Number));
      tpaData.minSize = size((await input("minimal window size (WxH):", "string", /[0-9]+x[0-9]+/g)).split("x").map(Number));
      tpaData.maxSize = size((await input("maximal window size (WxH):", "string", /[0-9]+x[0-9]+/g)).split("x").map(Number));

      section("Window State", 5);

      tpaData.state.maximized = (await input("Maximized by default (y/n):", "string", /y|n/g)) === "y";
      tpaData.state.minimized = (await input("Minimized by default (y/n):", "string", /y|n/g)) === "y";
      tpaData.state.fullscreen = (await input("Fullscreen by default (y/n):", "string", /y|n/g)) === "y";
      tpaData.state.resizable = (await input("Resizable (y/n):", "string", /y|n/g)) === "y";
      tpaData.state.headless = (await input("Headless (y/n):", "string", /y|n/g)) === "y";

      section("Window Controls", 3);

      tpaData.controls.minimize = (await input("Show minimize button (y/n):", "string", /y|n/g)) === "y";
      tpaData.controls.maximize = (await input("Show maximize button (y/n):", "string", /y|n/g)) === "y";
      tpaData.controls.close = (await input("Show close button (y/n):", "string", /y|n/g)) === "y";

      section("Additional options", 3);

      tpaData.glass = (await input("Enable glass effects (y/n):", "string", /y|n/g)) === "y";
      tpaData.hidden = (await input("Is this a hidden app (y/n):", "string", /y|n/g)) === "y";
      tpaData.core = (await input("Is this a core app (y/n):", "string", /y|n/g)) === "y";

      term.rl?.println("");

      term.Info(`Scaffolding directory ${BRPURPLE}${location}${RESET}...`);
      await term.createDirectory(location);

      const tpaPath = join(location, `${tpaData.metadata.name}.tpa`);
      const entryPath = join(location, tpaData.entrypoint!);
      const processPath = join(location, "process.js");
      const bodyPath = join(location, "body.html");
      const stylePath = join(location, "style.css");

      term.Info(`Writing ${BRPURPLE}${tpaPath}${RESET}`);
      await term.writeFile(tpaPath, textToBlob(JSON.stringify(tpaData, null, 2)));

      term.Info(`Writing ${BRPURPLE}${entryPath}${RESET}`);
      await term.writeFile(entryPath, textToBlob(ENTRYPOINT_JS));

      term.Info(`Writing ${BRPURPLE}${processPath}${RESET}`);
      await term.writeFile(processPath, textToBlob(PROCESS_JS));

      term.Info(`Writing ${BRPURPLE}${bodyPath}${RESET}`);
      await term.writeFile(bodyPath, textToBlob(PROJECT_HTML));

      term.Info(`Writing ${BRPURPLE}${stylePath}${RESET}`);
      await term.writeFile(stylePath, textToBlob(PROJECT_CSS(tpaData.id)));
      term.rl?.println(`${BRGREEN}Done.${RESET}`);

      term.rl?.println("");
      term.Info(`Opening ${BRPURPLE}${tpaData.id}${RESET}...`);
      await term.daemon?.openFile(term.join(tpaPath));

      term.rl?.println("");

      return 0;
    } catch (e) {
      term.Error(`Something went wrong: ${e}`);
      return 1;
    }
  },
  description: "Create an ArcOS Third Party Application (TPA) project",
};

const ENTRYPOINT_JS = `const shellPid = +env.get("shell_pid");
const { proc } = await load("process.js");

runApp(proc, $METADATA, shellPid);`;

const PROCESS_JS = `const html = await loadHtml("body.html");

class proc extends ThirdPartyAppProcess {
	constructor(handler, pid, parentPid, app, workingDirectory, ...args) {
		super(handler, pid, parentPid, app, workingDirectory);
	}

	async render() {
    const body = this.getBody();
    body.innerHTML = html;

    /* Do some interesting stuff here */
    this.myAmazingFunction();
  }

  myAmazingFunction() {
    // Check if the process is disposed at the top of every method. This makes sure the process has the least amount of lasting effects.
    if (this._disposed) return;

    Debug("Working!");
  }
}

return { proc };`;

const PROJECT_HTML = `<!-- CSS is imported here -->
<link rel="stylesheet" href="style.css">

<!-- The rest of your app goes here, no body tag or anything needed. -->
<h1>Working!</h1>`;

const PROJECT_CSS = (id: string) => `/* Scope CSS of your app by prefixing selectors with the app ID: */
#${id} > div.body {
  padding: 15px;
}`;
