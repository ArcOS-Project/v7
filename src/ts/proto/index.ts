import { ApplicationStorage } from "$ts/apps/storage";
import { tryJsonParse } from "$ts/json";
import type { ProcessHandler } from "$ts/process/handler";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import type { ArcProtocol, ProtocolHandler } from "$types/proto";
import type { Service } from "$types/service";
import { navigate } from "svelte-navigator";
import { SpawnAppHandler } from "./handlers/spawn";

export class ProtocolServiceProcess extends BaseService {
  lockObserver = false;
  observer?: MutationObserver;
  store: Record<string, ProtocolHandler> = {
    spawn_app: SpawnAppHandler,
  };

  constructor(handler: ProcessHandler, pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(handler, pid, parentPid, name, host);
  }

  async start() {
    this.observer = new MutationObserver((mutations) => this.processMutations(mutations));

    this.observer.observe(document.body, { childList: true, subtree: true, attributes: true, characterData: true });
  }

  parseProtoParam() {
    const param = this.kernel.params.get("proto");

    if (param) {
      this.executeUrl(decodeURIComponent(param));
      navigate("./");
      this.kernel.params.delete("proto");
    }
  }

  processMutations(mutations: MutationRecord[]) {
    if (this._disposed) return;

    for (const element of document.getElementsByTagName("a")) {
      if (!element.getAttribute("data-no-proto")) this.parseAnchor(element);
    }
  }

  parseAnchor(anchor: HTMLAnchorElement) {
    console.warn("PARSING ->", anchor);
    if (anchor.hasAttribute("data-no-proto")) return;

    const parsed = this.parseUrl(anchor.href);

    if (!parsed) {
      anchor.setAttribute("data-no-proto", "true");
      return;
    }

    const handler = this.store[parsed.command]!;
    const info = handler.info(parsed.payload, this.host.daemon);

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
    button.addEventListener("click", () => handler.action(parsed.payload, this.host.daemon, parsed));

    anchor.insertAdjacentElement("afterend", button);
    anchor.remove();
  }

  parseUrl(str: string): ArcProtocol | undefined {
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
  }

  async executeUrl(url: string) {
    const parsed = this.parseUrl(url);
    const handler = this.store[parsed?.command || ""];

    if (!parsed || !handler) return;

    return await handler.action(parsed.payload, this.host.daemon, parsed);
  }

  registerHandler(command: string, handler: ProtocolHandler) {
    if (this.store[command]) return false;
    this.store[command] = handler;
    return true;
  }

  unregisterHandler(command: string) {
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
