import type { IProtocolServiceProcess } from "$interfaces/services/ProtoService";
import { Daemon } from "$ts/daemon";
import { KernelParams } from "$ts/kernel/getters";
import type { ServiceHost } from "$ts/servicehost";
import { BaseService } from "$ts/servicehost/base";
import { tryJsonParse } from "$ts/util/json";
import type { ArcProtocol, ProtocolHandler } from "$types/proto";
import type { Service } from "$types/service";
import { SpawnAppHandler } from "./handlers/spawn";

export class ProtocolServiceProcess extends BaseService implements IProtocolServiceProcess {
  lockObserver = false;
  observer?: MutationObserver;
  store: Record<string, ProtocolHandler> = {
    spawn_app: SpawnAppHandler,
  };

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost, initBroadcast?: (msg: string) => void) {
    super(pid, parentPid, name, host, initBroadcast);

    this.setSource(__SOURCE__);
  }

  async start() {
    this.initBroadcast?.("Starting protocol service");
    this.observer = new MutationObserver((mutations) => this.processMutations(mutations));
    this.observer.observe(document.body, { childList: true, subtree: true, attributes: true, characterData: true });
    this.parseProtoParam();
  }

  //#endregion

  parseProtoParam() {
    this.Log("Attempting to execute proto param");
    const param = KernelParams().get("proto");

    if (param) {
      this.executeUrl(decodeURIComponent(param));
      history.replaceState(null, "", "./");
      KernelParams().delete("proto");
    }
  }

  processMutations(mutations: MutationRecord[]) {
    if (this._disposed) return;

    for (const element of document.getElementsByTagName("a")) {
      if (!element.getAttribute("data-no-proto")) this.parseAnchor(element);
    }
  }

  parseAnchor(anchor: HTMLAnchorElement) {
    if (anchor.hasAttribute("data-no-proto")) return;

    const parsed = this.parseUrl(anchor.href);

    if (!parsed) {
      anchor.setAttribute("data-no-proto", "true");
      return;
    }

    this.Log(`Parsing a fresh anchor element`);

    const handler = this.store[parsed.command]!;
    const info = handler.info(parsed.payload, Daemon!);

    if (!info) {
      anchor.setAttribute("data-no-proto", "true");
      return;
    }

    const button = document.createElement("button");
    const icon = document.createElement("img");
    const caption = document.createElement("span");

    button.className = "arcos-protocol-link";

    icon.src = info.icon;
    caption.innerText = info.caption;

    if (info.title) button.title = info.title;

    button.append(icon, caption);
    button.addEventListener("click", () => handler.action(parsed.payload, Daemon!, parsed));

    anchor.insertAdjacentElement("afterend", button);
    anchor.remove();
  }

  parseUrl(str: string): ArcProtocol | undefined {
    // BUG 68a344836c65fe520ebfba59
    try {
      const url = new URL(str);

      if (url.protocol !== "arc:") return;

      const parsed = {
        subCommand: url.username || "",
        command: url.hostname,
        payload: Object.fromEntries(url.searchParams.entries().map(([k, v]) => [k, tryJsonParse(v)])),
        path: url.pathname,
      };

      if (!this.store[parsed.command]) return;

      return parsed;
    } catch {
      return;
    }
  }

  async executeUrl(url: string) {
    this.Log(`Working to execute ${url}`);

    const parsed = this.parseUrl(url);
    const handler = this.store[parsed?.command || ""];

    if (!parsed || !handler) return;

    return await handler.action(parsed.payload, Daemon!, parsed);
  }

  registerHandler(command: string, handler: ProtocolHandler) {
    this.Log(`Registering handler: ${command} (${handler.name})`);

    if (this.store[command]) return false;
    this.store[command] = handler;
    return true;
  }

  unregisterHandler(command: string) {
    this.Log(`Unregistering handler: ${command}`);

    if (!this.store[command]) return false;
    delete this.store[command];

    return true;
  }
}

export const protoService: Service = {
  name: "Protocol Handler",
  description: "Handles parsing and rendering of ArcOS Protocol Links",
  process: ProtocolServiceProcess,
  initialState: "started",
};
