import type { ContextMenuItem } from "$types/app";
import type { CodRuntime } from "../runtime";

export function LanguageMenu(runtime: CodRuntime): ContextMenuItem {
  return {
    caption: "Language",
    subItems: [
      {
        caption: "None",
        action: () => runtime.language.set("plaintext"),
        isActive: () => runtime.language() === "plaintext",
      },
      { sep: true },
      {
        caption: "CSS",
        action: () => runtime.language.set("css"),
        isActive: () => runtime.language() === "css",
      },
      {
        caption: "INI",
        action: () => runtime.language.set("ini"),
        isActive: () => runtime.language() === "ini",
      },
      {
        caption: "JavaScript",
        action: () => runtime.language.set("javascript"),
        isActive: () => runtime.language() === "javascript",
      },
      {
        caption: "JSON",
        action: () => runtime.language.set("json"),
        isActive: () => runtime.language() === "json",
      },
      {
        caption: "Markdown",
        action: () => runtime.language.set("markdown"),
        isActive: () => runtime.language() === "markdown",
      },
      {
        caption: "XML",
        action: () => runtime.language.set("xml"),
        isActive: () => runtime.language() === "xml",
      },
      {
        caption: "YAML",
        action: () => runtime.language.set("yaml"),
        isActive: () => runtime.language() === "yaml",
      },
      {
        caption: "SQL",
        action: () => runtime.language.set("sql"),
        isActive: () => runtime.language() === "sql",
      },
    ],
  };
}
