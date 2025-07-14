import { join } from "$ts/fs/util";
import { ComponentIcon } from "$ts/images/general";
import type { ProcessHandler } from "$ts/process/handler";
import type { AppProcessData } from "$types/app";
import { AppProcess } from "./process";

export class ThirdPartyAppProcess extends AppProcess {
  public static readonly TPA_REV = 1;
  workingDirectory: string;
  mutationLock = false;
  urlCache: Record<string, string> = {};
  elements: Record<string, Element> = {};

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
    this.windowIcon.set(this.userDaemon?.getAppIconByProcess(this) || ComponentIcon);
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
      if (this.mutationLock) return;

      this.mutationLock = true;

      for (const [tag, attribute] of Object.entries(elementsToProcess)) {
        const elements = container.querySelectorAll(tag);

        for (const element of elements) {
          const originalValue = element.getAttribute(attribute);
          const keep = element.getAttribute("data-arc-keep");

          if (!originalValue || keep || originalValue.startsWith("http") || element.getAttribute("data-original-path")) continue;

          const filePath = originalValue.includes(":/") ? originalValue : join(this.workingDirectory, originalValue);
          const direct = this.urlCache[filePath] ?? (await this.fs.direct(filePath));

          if (!direct) continue;
          if (!originalValue.includes(":/")) this.elements[originalValue] = element;

          // if (!this.urlCache[filePath]) this.urlCache[filePath] = direct;

          element.setAttribute(attribute, direct);
          element.setAttribute("data-original-path", filePath);
        }
      }

      this.mutationLock = false;
    };

    const observer = new MutationObserver(async (mutations) => {
      for (const mutation of mutations) {
        if (mutation.type !== "childList" && mutation.type !== "attributes") continue;

        await processElements(body);
      }
    });

    observer.observe(body, { childList: true, subtree: true, attributes: true });
    await this.render(this.renderArgs);
    await processElements(body);
  }
}
