import type { IThirdPartyAppProcess } from "$interfaces/IThirdPartyAppProcess";
import { Fs, Stack, SysDispatch } from "$ts/env";
import { Sleep } from "$ts/sleep";
import { join } from "$ts/util/fs";
import type { AppProcessData } from "$types/apps/app";
import { isUUID } from "validator";
import { AppProcess } from "./process";

export class ThirdPartyAppProcess extends AppProcess implements IThirdPartyAppProcess {
  public static readonly TPA_REV = 2;
  workingDirectory: string;
  operationId: string;
  mutationLock = false;
  urlCache: Record<string, string> = {};
  elements: Record<string, Element> = {};
  handler = Stack; // TEMP

  //#region LIFECYCLE

  constructor(
    pid: number,
    parentPid: number,
    app: AppProcessData,
    operationId: string,
    workingDirectory: string,
    ...args: any[]
  ) {
    super(pid, parentPid, app, operationId, workingDirectory, ...args);

    this.workingDirectory = workingDirectory;
    this.operationId = operationId;
    this.windowIcon.set(`@app::${this.app.id}`);

    this.setSource(__SOURCE__);

    this.validateConstructorProperties(pid, parentPid, app, operationId, workingDirectory);
  }

  async __render__(body: HTMLDivElement): Promise<void> {
    this.Log("Rendering window contents");

    this.STATE = "rendering";

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
          try {
            const originalValue = element.getAttribute(attribute);
            const keep = element.getAttribute("data-arc-keep");

            if (!originalValue || keep || originalValue.startsWith("http") || element.getAttribute("data-original-path"))
              continue;

            const filePath = originalValue.includes(":/") ? originalValue : join(this.workingDirectory, originalValue);
            const direct = this.urlCache[filePath] ?? (await Fs.direct(filePath));

            if (!direct) {
              this.urlCache[filePath] = originalValue;
              continue;
            }
            if (!originalValue.includes(":/")) this.elements[originalValue] = element;

            if (!this.urlCache[filePath]) this.urlCache[filePath] = direct;

            element.setAttribute(attribute, direct);
            element.setAttribute("data-original-path", filePath);
          } catch {
            continue;
          }
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

    SysDispatch.dispatch("tpa-spawn-done", [this.operationId]);

    await Sleep(1000); // 1s to give invocator's GLI the time it needs

    Stack.renderer?.focusPid(this.pid);
  }

  private validateConstructorProperties(
    pid: number,
    parentPid: number,
    app: AppProcessData,
    operationId: string,
    workingDirectory: string
  ) {
    if (this.STATE !== "constructing")
      throw new Error(`validateConstructorProperties called during incompatible process state '${this.STATE}'`);
    try {
      if (!Number.isInteger(pid) || !Number.isInteger(parentPid)) {
        throw "PID and parent PID must be integers.";
      }

      if (typeof app !== "object") {
        throw "AppProcessData is not an object";
      }

      if (!isUUID(operationId)) {
        throw "operationId is not a UUID";
      }

      try {
        Fs.validatePath(workingDirectory);
      } catch (e) {
        throw "workingDirectory is not a valid path";
      }
    } catch (e: any) {
      throw new Error(`Failed to validate the constructor arguments. ${e?.message ?? e}. Refer to the docs.`);
    }
  }

  //#endregion
}
