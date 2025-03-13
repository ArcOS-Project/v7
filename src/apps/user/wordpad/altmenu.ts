import type { ContextMenuItem } from "$types/app";
import type { WordPadRuntime } from "./runtime";

export function WordPadAltMenu(runtime: WordPadRuntime): ContextMenuItem[] {
  return [
    {
      caption: "File",
      subItems: [
        {
          caption: "New...",
        },
        {
          caption: "Open...",
          action: () => runtime.openFile(),
        },
        {
          caption: "Save",
          action: () => runtime.saveChanges(),
        },
        {
          caption: "Save As...",
          action: () => runtime.saveAs(),
        },
        { sep: true },
        {
          caption: "Exit",
          action: () => runtime.closeWindow(),
        },
      ],
    },
    {
      caption: "Edit",
      subItems: [
        {
          caption: "Undo",
          action: () => runtime.formatDoc("undo"),
        },
        { sep: true },
        {
          caption: "Cut",
          action: () => runtime.formatDoc("cut"),
        },
        {
          caption: "Copy",
          action: () => runtime.formatDoc("copy"),
        },
        {
          caption: "Paste",
          action: () => runtime.formatDoc("paste"),
        },
        {
          caption: "Clear",
          action: () => (runtime.editor()!.innerHTML = ""),
        },
        {
          caption: "Select All",
          action: () => runtime.formatDoc("selectAll"),
        },
      ],
    },
    {
      caption: "Format",
      subItems: [
        {
          caption: "Bold",
          action: () => runtime.formatDoc("bold"),
        },
        {
          caption: "Italic",
          action: () => runtime.formatDoc("italic"),
        },
        {
          caption: "Underline",
          action: () => runtime.formatDoc("underline"),
        },
        {
          caption: "Strikethrough",
          action: () => runtime.formatDoc("strikeThrough"),
        },
        { sep: true },
        {
          caption: "Reset style",
          action: () => runtime.formatDoc("removeFormat"),
        },
        {
          caption: "Heading",
          subItems: [
            {
              caption: "Heading 1",
              action: () => {
                runtime.formatDoc("removeFormat");
                runtime.formatDoc("fontSize", "7");
                runtime.formatDoc("bold");
                runtime.formatDoc("formatBlock");
              },
            },
            {
              caption: "Heading 2",
              action: () => {
                runtime.formatDoc("removeFormat");
                runtime.formatDoc("fontSize", "5");
                runtime.formatDoc("bold");
                runtime.formatDoc("formatBlock");
              },
            },
            {
              caption: "Heading 3",
              action: () => {
                runtime.formatDoc("removeFormat");
                runtime.formatDoc("fontSize", "4");
                runtime.formatDoc("bold");
                runtime.formatDoc("formatBlock");
              },
            },
            {
              caption: "Heading 4",
              action: () => {
                runtime.formatDoc("removeFormat");
                runtime.formatDoc("fontSize", "2");
                runtime.formatDoc("bold");
                runtime.formatDoc("formatBlock");
              },
            },
          ],
        },
        {
          caption: "Font size",
          subItems: [
            {
              caption: "8pt",
              action: () => runtime.formatDoc("justifyLeft"),
            },
            {
              caption: "10pt",
              action: () => runtime.formatDoc("justifyCenter"),
            },
            {
              caption: "12pt",
              action: () => runtime.formatDoc("justifyRight"),
            },
            {
              caption: "14pt",
              action: () => runtime.formatDoc("justifyFull"),
            },
            {
              caption: "18pt",
              action: () => runtime.formatDoc("justifyFull"),
            },
            {
              caption: "24pt",
              action: () => runtime.formatDoc("justifyFull"),
            },
            {
              caption: "36pt",
              action: () => runtime.formatDoc("justifyFull"),
            },
          ],
        },
        {
          caption: "Justify",
          subItems: [
            {
              caption: "Left",
              action: () => runtime.formatDoc("justifyLeft"),
            },
            {
              caption: "Center",
              action: () => runtime.formatDoc("justifyCenter"),
            },
            {
              caption: "Right",
              action: () => runtime.formatDoc("justifyRight"),
            },
            {
              caption: "Full",
              action: () => runtime.formatDoc("justifyFull"),
            },
          ],
        },
      ],
    },
  ];
}
