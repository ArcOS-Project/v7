import { join } from "$ts/fs/util";
import type { ProcessHandler } from "$ts/process/handler";
import type { AppProcessData } from "$types/app";
import { AppProcess } from "./process";

export class ThirdPartyAppProcess extends AppProcess {
  workingDirectory: string;

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    workingDirectory: string,
    ...args: any[]
  ) {
    super(handler, pid, parentPid, app);

    this.workingDirectory = workingDirectory;
  }

  async __render__(body: HTMLDivElement): Promise<void> {
    this.Log("Rendering window contents");

    const elementsToProcess = {
      a: "href",
      img: "src",
      audio: "src",
      video: "src",
      iframe: "src",
      source: "src",
      track: "src",
      embed: "src",
      object: "data",
      link: "href",
      form: "action",
      input: "src",
      button: "formaction",
    };

    const processElements = async (container: HTMLElement) => {
      for (const [tag, attribute] of Object.entries(elementsToProcess)) {
        const elements = container.querySelectorAll(tag);

        for (const element of elements) {
          const originalValue = element.getAttribute(attribute);
          const keep = element.getAttribute("data-arc-keep");

          if (!originalValue || keep || originalValue.startsWith("http")) continue;

          const filePath = originalValue.includes(":/") ? originalValue : join(this.workingDirectory, originalValue);
          const direct = await this.fs.direct(filePath);

          if (!direct) continue;

          element.setAttribute(attribute, direct);
        }
      }
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList" || mutation.type === "attributes") {
          processElements(body);
        }
      });
    });

    observer.observe(body, { childList: true, subtree: true, attributes: true });
    processElements(body);

    await this.render(this.renderArgs);
  }
}
