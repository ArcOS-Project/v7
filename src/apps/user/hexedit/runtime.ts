import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { Fs } from "$ts/env";
import { sliceIntoChunks } from "$ts/util";
import { getItemNameFromPath } from "$ts/util/fs";
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
  activeByte = Store<number>(-1);
  modified = Store<boolean>(false);

  protected overlayStore: Record<string, App> = {
    editRow: EditRow,
  };

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, file: string) {
    super(pid, parentPid, app);

    this.requestedFile = file;
    this.view.subscribe((v) => {
      if (!v) return;
      this.updateVariables(v);
      this.modified.set(this.requestedFile && this.original() ? this.isModified() : false);
    });

    this.setSource(__SOURCE__);
  }

  async render() {
    if (!this.requestedFile) {
      MessageBox(
        {
          title: "No file",
          message: "HexEdit was launched without a file to read. This shouldn't happen.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: "WarningIcon",
          sound: "arcos.dialog.warning",
        },
        this.parentPid,
        true
      );
      this.closeWindow();

      return;
    }

    const prog = await this.userDaemon!.files!.FileProgress(
      {
        type: "size",
        caption: `Reading file`,
        subtitle: this.requestedFile,
        icon: "MemoryIcon",
      },
      this.pid
    );
    try {
      const contents = await Fs().readFile(this.requestedFile, (progress) => {
        prog.show();
        prog.setMax(progress.max);
        prog.setDone(progress.value);
      });

      prog.stop();

      if (!contents || !contents.byteLength) {
        throw new Error("The file is empty or doesn't exist.");
      }

      if (contents.byteLength >= 10 * 1024 * 1024) {
        MessageBox(
          {
            title: "File too big",
            message: `HexEdit can't open files larger than 10MB at this time. Please choose another application.`,
            buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
            image: "ErrorIcon",
            sound: "arcos.dialog.error",
          },
          this.parentPid,
          true
        );

        this.closeWindow();

        return;
      }

      await this.requestFileLock(this.requestedFile);

      this.filename.set(getItemNameFromPath(this.requestedFile));
      this.buffer.set(contents);
      this.view.set(new Uint8Array(contents));
      this.original.set(new Uint8Array(this.view()));
    } catch (e) {
      MessageBox(
        {
          title: "Failed to read file",
          message: `HexEdit was unable to open the file you requested: ${e}`,
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: "WarningIcon",
          sound: "arcos.dialog.error",
        },
        this.parentPid,
        true
      );
      this.closeWindow();
    }
  }

  async onClose(): Promise<boolean> {
    this.Log("onClose");
    const modified = this.isModified();

    if (modified) {
      return new Promise<boolean>((r) => {
        MessageBox(
          {
            title: "Save changes?",
            message: `Do you want to save the changes you made to ${this.filename()}?`,
            buttons: [
              {
                caption: "Cancel",
                action: () => {
                  r(false);
                },
              },
              {
                caption: "No",
                action: () => {
                  r(true);
                },
              },
              {
                caption: "Yes",
                suggested: true,
                action: async () => {
                  await this.saveFile();
                  await this.unlockFile(this.requestedFile);
                  r(true);
                },
              },
            ],
          },
          this.pid,
          true
        );
      });
    }

    await this.unlockFile(this.requestedFile);
    return true;
  }

  //#endregion

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

  saveVariables(hexRows: [number, number][][], decoded: [string, number][][], offsetLength: number, offsets: number[]) {
    this.hexRows.set(hexRows);
    this.decoded.set(decoded);
    this.offsetLength.set(offsetLength);
    this.offsets.set(offsets);
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

  isModified() {
    return !!(this.requestedFile && this.filename() && this.original()?.toString() !== this.view().toString());
  }

  async saveFile() {
    if (!this.isModified()) return;

    const prog = await this.userDaemon!.files!.FileProgress(
      {
        type: "size",
        caption: `Saving ${this.filename()}`,
        subtitle: `Writing ${this.requestedFile}`,
        icon: "DriveIcon",
      },
      this.pid
    );

    try {
      await Fs().writeFile(this.requestedFile, new Blob([this.view() as any]), async (progress) => {
        await prog.show();
        prog.setMax(progress.max);
        prog.setDone(progress.value);
      });
    } catch {}

    await prog.stop();
  }
}
