import { AppProcess } from "$ts/apps/process";
import type { AppProcessData } from "$types/app";

export class ArcTermColorsRuntime extends AppProcess {
  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
  }

  async start() {
    
  }

  async stop() {

  }

  async render() {

  }
  
  //#endregion LIFECYCLE
}