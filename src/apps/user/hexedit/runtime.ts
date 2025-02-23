import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { getDirectoryName } from "$ts/fs/util";
import { ErrorIcon, WarningIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { sliceIntoChunks } from "$ts/util";
import { Store } from "$ts/writable";
import type { App, AppProcessData } from "$types/app";
import { EditRow } from "./editrow/metadata";

export class HexEditRuntime extends AppProcess {
  buffer = Store<ArrayBuffer>();
  original = Store<Uint8Array | undefined>();
  view = Store<Uint8Array>();
  offsets = Store<number[]>([]);
  offsetLength = Store<number>();
  hexRows = Store<[number, number][][]>([]);
  decoded = Store<[string, number][][]>([]);
  requestedFile: string;
  editorInputs = Store<HTMLButtonElement[]>([]);
  filename = Store<string>();

  protected overlayStore: Record<string, App> = {
    editRow: EditRow,
  };

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    file: string
  ) {
    super(handler, pid, parentPid, app);

    this.requestedFile = file;
    this.view.subscribe((v) => {
      if (!v) return;
      this.updateVariables(v);
    });
  }

  updateVariables(view: Uint8Array) {
    const array = Array.from(view);
    const offsetLength = Math.ceil(view.length / 16);
    const offsets: number[] = [];

    for (let i = 0; i < offsetLength; i++) {
      offsets.push(i * 16);
    }

    const hexRows = sliceIntoChunks(
      array.map((b, i) => [b, i]),
      16
    );

    const decoded = sliceIntoChunks(
      array.map((b, i) => [this.sanitizeDecoded(String.fromCharCode(b)), i]),
      16
    );

    this.saveVariables(hexRows, decoded, offsetLength, offsets);
  }

  saveVariables(
    hexRows: [number, number][][],
    decoded: [string, number][][],
    offsetLength: number,
    offsets: number[]
  ) {
    this.hexRows.set(hexRows);
    this.decoded.set(decoded);
    this.offsetLength.set(offsetLength);
    this.offsets.set(offsets);
  }

  async render() {
    try {
      const contents = await this.fs.readFile(this.requestedFile);

      if (!contents) throw new Error();

      if (contents.byteLength >= 20 * 1024 * 1024) {
        MessageBox(
          {
            title: "File too big",
            message: `HexEdit can't open files larger than 20MB at this time. Please choose another application.`,
            buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
            image: ErrorIcon,
            sound: "arcos.dialog.error",
          },
          this.parentPid,
          true
        );

        this.closeWindow();

        return;
      }

      this.filename.set(getDirectoryName(this.requestedFile));
      this.buffer.set(contents);
      this.view.set(new Uint8Array(contents));
      this.original.set(new Uint8Array(this.view()));
    } catch {
      MessageBox(
        {
          title: "No file",
          message:
            "HexEdit was launched without a file to read. This shouldn't happen.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: WarningIcon,
          sound: "arcos.dialog.warning",
        },
        this.parentPid,
        true
      );

      this.closeWindow();
    }
  }

  sanitizeDecoded(input: string) {
    return input.replace(/[^\x21-\x7E]/g, ".");
  }

  getByteClass(byte: number) {
    if (byte === 0) {
      return "nul"; // Black (0x00)
    } else if (byte === 0x0d || byte === 0x0a || byte === 0x09) {
      return "ascii-control"; // Green (0D, 0A, 09)
    } else if ((byte >= 0x00 && byte <= 0x1f) || byte === 0x7f) {
      return "ascii-control"; // Green (00–1F, 7F)
    } else if (byte >= 0x20 && byte <= 0x7e) {
      return "printable-ascii"; // Blue (printable ASCII)
    } else {
      return "rest"; // Orange (everything else)
    }
  }

  newByte() {
    const view = this.view();
    const newView = new Uint8Array(view.length + 1);

    newView.set(view);

    this.view.set(newView);
  }

  async alterRow(rowIndex: number) {
    this.spawnOverlay("editRow", this.view, rowIndex);
  }
}
