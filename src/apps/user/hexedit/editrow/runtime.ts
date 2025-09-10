import { AppProcess } from "$ts/apps/process";
import { KernelStack } from "$ts/process/handler";
import { Sleep } from "$ts/sleep";
import { sliceIntoChunks } from "$ts/util";
import { Store, type ReadableStore } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { HexEditRuntime } from "../runtime";

export class EditRowRuntime extends AppProcess {
  view = Store<Uint8Array>();
  output = Store<Uint8Array>();
  offset = Store<number>();
  rows = Store<[number, [number, number][]][]>([]);
  editorInputs = Store<HTMLInputElement[]>([]);

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, view: ReadableStore<Uint8Array>, offset: number) {
    super(pid, parentPid, app);

    this.view = Store(new Uint8Array(view()));
    this.output = view;
    this.offset.set(offset);
  }

  async render() {
    const parent = KernelStack().getProcess(this.parentPid)!;

    if (!(parent instanceof HexEditRuntime)) throw new Error("EditRowRuntime: invalid invocation");

    const v = this.view();
    const array = Array.from(v);
    const rows = sliceIntoChunks(
      array.map((b, i) => [b, i]),
      16
    );
    const offset = this.offset();

    this.rows.set([
      [offset - 1, rows[offset - 1] ?? undefined],
      [offset, rows[offset]],
      [offset + 1, rows[offset + 1] ?? undefined],
    ]);
  }

  //#endregion

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

  async writeBytes() {
    const view = this.view();

    this.output.set(new Uint8Array());
    await Sleep(0);
    this.output.set(view);

    this.closeWindow();
  }
}
