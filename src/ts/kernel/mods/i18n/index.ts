import EnglishLanguage from "$lang/en.json";
import DutchLanguage from "$lang/nl.json";
import { getKMod } from "$ts/env";
import { getJsonHierarchy } from "$ts/hierarchy";
import { KernelModule } from "$ts/kernel/module";
import { detectJavaScript } from "$ts/util";
import type { ConstructedWaveKernel, SystemDispatchType } from "$types/kernel";

export class I18n extends KernelModule {
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

  setLanguage(lang: string) {
    this.language = lang;
    this.rerunObserver();
    this.dispatch.dispatch("i18n-lang-change", [lang]);
  }

  rerunObserver() {
    if (!this.TARGET) return;

    // Handle elements with data-i18n
    this.TARGET.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const translated = this.translateToken(key, el);

      if (detectJavaScript(translated)?.length) return;
      el.innerHTML = translated;
    });

    // Handle attribute translations
    this.translateAttributes(this.TARGET);
  }

  translateToken(token: string, contextEl?: HTMLElement): string {
    if (token.startsWith("lang=")) {
      this.setLanguage(token.replace("lang=", ""));
      return this.language;
    }

    // Look for nearest parent with data-prefix
    if (contextEl) {
      const prefixHolder = contextEl.closest<HTMLElement>("[data-prefix]");
      if (prefixHolder) {
        const prefix = prefixHolder.getAttribute("data-prefix");
        if (prefix && !token.startsWith(prefix)) {
          token = `${prefix}.${token}`;
        }
      }
    }

    const dict = this.LANGUAGES[this.language] || {};
    const translated = getJsonHierarchy(dict, token);

    if (translated === undefined || translated === null) {
      console.warn(`[i18n] Missing translation for token "${token}"`);
      return `%${token}%`;
    }

    return translated;
  }

  translateAttributes(node: HTMLElement) {
    // Process all elements within the node
    const elements = [node, ...Array.from(node.querySelectorAll<HTMLElement>("*"))];

    elements.forEach((el) => {
      this.TRANSLATABLE_ATTRIBUTES.forEach((attr) => {
        const value = el.getAttribute(attr);
        if (value) {
          const match = value.match(/%([\w.=\-]+)%/);
          if (match) {
            const key = match[1];
            const translated = this.translateToken(key, el);

            if (!detectJavaScript(translated)?.length) {
              el.setAttribute(attr, value.replace(/%([\w.=\-]+)%/, translated));
            }
          }
        }
      });
    });
  }

  replaceInNode(node: Node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.nodeValue ?? "";

      // skip text already inside a data-i18n span
      if (node.parentElement?.hasAttribute("data-i18n")) return;

      const match = text.match(/%([\w.=\-]+)%/);
      if (match) {
        const key = match[1];
        const parent = node.parentNode;
        if (!parent) return;

        // Remove ANY existing translation spans in the same parent
        // This handles the case where the translation ID changes (e.g., store updates)
        const existingSpans = parent.querySelectorAll<HTMLElement>("span[data-i18n]");
        existingSpans.forEach((span) => {
          if (span.parentNode === parent) {
            parent.removeChild(span);
          }
        });

        const span = document.createElement("span");
        span.setAttribute("data-i18n", key);
        const translated = this.translateToken(key, node.parentElement!);

        if (detectJavaScript(translated)?.length) return;
        span.innerHTML = translated;

        parent.replaceChild(span, node);
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as HTMLElement;

      if (element.hasAttribute("data-i18n")) return;

      // Translate attributes for this element
      this.translateAttributes(element);

      // Continue with child nodes (convert to array to avoid live NodeList issues)
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
    });

    this.replaceInNode(this.TARGET);
  }

  stopObserver() {
    this.observer?.disconnect();
    this.observer = null;
  }
}
