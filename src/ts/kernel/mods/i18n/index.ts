import EnglishLanguage from "$lang/en.json";
import DutchLanguage from "$lang/nl.json";
import { getKMod, KernelStack } from "$ts/env";
import { getJsonHierarchy } from "$ts/hierarchy";
import { KernelModule } from "$ts/kernel/module";
import { detectJavaScript } from "$ts/util";
import type { ConstructedWaveKernel, SystemDispatchType } from "$types/kernel";

export class I18n extends KernelModule {
  REGEX = /%(?<id>[\w.=\-]+)(?:\((?<inlays>(.*?))\)|)%/gm;
  language: string = "en";
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

  replaceInNode(node: Node) {
    if (node.nodeType !== node.TEXT_NODE) return;

    const str = node.textContent ?? "";
    const results = [...str.matchAll(this.REGEX)].map(({ groups }) => ({
      id: groups?.id,
      inlays: groups?.inlays ? groups.inlays.split(",") : [],
    }));

    if (!results.length) return;

    let resultString = "";
    for (const result of results) {
      const value = getJsonHierarchy<string>(this.LANGUAGES[this.language], result.id ?? "");

      if (!result.id || !value) {
        resultString += `%${result.id}(${result.inlays?.join(",") ?? ""})%`;

        continue;
      }

      let partialResultString = value as string;

      if (result.inlays) {
        for (let i = 0; i < result.inlays.length; i++) {
          partialResultString = partialResultString.replace(`{{${i}}}`, result.inlays[i]);
        }
      }

      resultString += partialResultString;
    }

    console.warn(str, resultString);
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
    });

    this.replaceInNode(this.TARGET);
  }

  stopObserver() {
    this.observer?.disconnect();
    this.observer = null;
  }
}
