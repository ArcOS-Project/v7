import { AppProcess } from "$ts/apps/process";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class ArcPaintRuntime extends AppProcess {
  ctx = Store<CanvasRenderingContext2D | undefined>();
  points = Store<[number, number, string, number][]>([]);

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);
    this.setSource(__SOURCE__);
  }

  //#endregion

  clear() {
    this.points.set([]);
  }

  async export() {
    try {
      await this.requestPermission("PERMISSION_USER_CONTEXT_FILESYSTEM");
      await this.requestPermission("PERMISSION_FS_WRITE");
      await this.requestPermission("PERMISSION_FS_READ");
    } catch {
      return;
    }

    const ctx = this.ctx.get();
    if (!ctx) return;

    const data = await (await fetch(ctx.canvas.toDataURL())).blob();
    const result = (
      await this.filesystemContext!.LoadSaveDialog({
        extensions: [".png"],
        title: "Export canvas contents",
        icon: "ImageMimeIcon",
        isSave: true,
      })
    )[0];

    if (!result) return;
    await this.fs.writeFile(result, data);
  }

  frame() {
    if (this._disposed) return;

    const ctx = this.ctx.get();
    const points = this.points.get();

    if (ctx) {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      for (const point of points) {
        ctx.fillStyle = point[2];
        ctx.font = `${point[3]}px sans-serif`;
        ctx.fillText("test", point[0], point[1]);
      }
    }

    requestAnimationFrame(this.frame.bind(this));
  }
}
