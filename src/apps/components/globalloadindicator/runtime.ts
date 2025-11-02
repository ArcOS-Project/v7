import { AppProcess } from "$ts/apps/process";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { GlobalLoadIndicatorProgress } from "./types";

export class GlobalLoadIndicatorRuntime extends AppProcess {
  caption = Store<string>("Just a moment...");
  progress = Store<GlobalLoadIndicatorProgress | undefined>();

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, caption: string, progress?: GlobalLoadIndicatorProgress) {
    super(pid, parentPid, app);

    if (caption) this.caption.set(caption);
    if (progress) this.progress.set(progress);

    this.setSource(__SOURCE__);

    this.progress.subscribe((v) => {
      console.log(v)
      this.getWindow()?.classList.toggle("extended", !!v);
    });
  }

  updateProgress(progress: Partial<GlobalLoadIndicatorProgress>) {
    this.progress.update((v) => {
      v ||= { max: progress.max || progress.value || 100, value: progress.value || 0 };

      v.max = progress?.max || v?.max;
      v.value = progress?.value || v?.value;

      return v;
    });
  }

  //#endregion
}
