import EnglishLanguage from "$lang/en.json";
import DutchLanguage from "$lang/nl.json";
import { getKMod } from "$ts/env";
import { getJsonHierarchy } from "$ts/hierarchy";
import { KernelModule } from "$ts/kernel/module";
import type { ConstructedWaveKernel, SystemDispatchType } from "$types/kernel";

export class I18n extends KernelModule {
  REGEX = /%(?<id>[\w.=\-]+)(?:\((?<inlays>(.*?))\)|)%/gm;
  language: string = "nl";
  dispatch: SystemDispatchType;
  observer: MutationObserver | null = null;
  TARGET?: HTMLDivElement;

  // Attributes to translate
  TRANSLATABLE_ATTRIBUTES = ["placeholder", "title", "alt", "aria-label", "data-tooltip"];

  LANGUAGES: Record<string, any> = {
    en: EnglishLanguage,
    nl: DutchLanguage,
  };

  constructor(kernel: ConstructedWaveKernel, id: string) {
    super(kernel, id);
    this.dispatch = getKMod<SystemDispatchType>("dispatch");
  }

  async _init(): Promise<void> {
    this.startObserver(document.querySelector("#appRenderer")!);
  }

  translateString(str: string, prefix?: string): string | undefined {
    const results = [...str.matchAll(this.REGEX)].map(({ groups, [0]: key }) => ({
      id: groups?.id,
      inlays: groups?.inlays ? groups.inlays.split("::") : [],
      key,
    }));

    if (!results.length) return undefined;

    let resultString = str;

    for (const result of results) {
      const fullId = prefix ? `${prefix}.${result.id}` : result.id;

      const value =
        getJsonHierarchy<string>(this.LANGUAGES[this.language], fullId ?? "") ||
        getJsonHierarchy<string>(this.LANGUAGES[this.language], result.id ?? "");

      if (!result.id || !value) {
        resultString = resultString.replace(result.key, "??");
        continue;
      }

      let partialResultString = value as string;

      if (result.inlays) {
        for (let i = 0; i < result.inlays.length; i++) {
          partialResultString = partialResultString.replace(
            `{{${i}}}`,
            this.translateString(result.inlays[i]) || result.inlays[i]
          );
        }
      }

      resultString = resultString.replace(result.key, partialResultString);
    }

    return resultString;
  }

  replaceInNode(node: Node): void {
    if (node.nodeType === node.TEXT_NODE) {
      const str = node.textContent ?? "";
      const prefix = node.parentElement?.closest("[data-prefix]")?.getAttribute("data-prefix") ?? undefined;
      const resultString = this.translateString(str, prefix);

      if (!resultString) return;

      if (node.parentElement) {
        node.parentElement.setAttribute("data-i18n-original", str);
        node.parentElement.innerHTML = resultString;
      }
    } else if (node.nodeType === node.ELEMENT_NODE) {
      const el = node as HTMLElement;
      const prefix = el.closest("[data-prefix]")?.getAttribute("data-prefix") ?? undefined;

      for (const attr of this.TRANSLATABLE_ATTRIBUTES) {
        const raw = el.getAttribute(attr);
        if (!raw) continue;

        const resultString = this.translateString(raw, prefix);
        if (!resultString) continue;

        el.setAttribute(`data-i18n-original-${attr}`, raw);
        el.setAttribute(attr, resultString);
      }

      Array.from(node.childNodes).forEach((n) => this.replaceInNode(n));
    }
  }

  startObserver(target: HTMLDivElement) {
    if (!target) throw new Error(`I18n: target does not exist`);

    this.TARGET = target;
    this.observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((n) => this.replaceInNode(n));
      }
    });

    this.observer.observe(this.TARGET, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
      characterDataOldValue: true,
      attributeOldValue: true,
    });

    this.replaceInNode(this.TARGET);
  }

  stopObserver() {
    this.observer?.disconnect();
    this.observer = null;
  }
}
