import { AppProcess } from "$ts/apps/process";
import { Stack } from "$ts/env";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { DonutAltMenu } from "./altmenu";

export class DonutAppRuntime extends AppProcess {
  public interval: NodeJS.Timeout;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);
    this.setSource(__SOURCE__);

    this.interval = setInterval(() => {
      if (Stack().renderer?.focusedPid() !== this.pid && !this.userPreferences().appPreferences.DonutApp.alwaysActive)
        return;

      this.Tick();
    }, 1000 / this.FPS);
  }

  async start() {
    this.altMenu.set(DonutAltMenu(this));
  }

  async stop() {
    clearInterval(this.interval);
  }

  //#endregion

  public readonly FPS = 30;
  public Buffer = Store<string>(); // The buffer to output to Svelte
  public A = 1;
  public B = 1;

  public async Tick() {
    const b = [];
    const z = [];
    this.A += 0.07;
    this.B += 0.03;
    let cA = Math.cos(this.A),
      sA = Math.sin(this.A),
      cB = Math.cos(this.B),
      sB = Math.sin(this.B);
    for (let k = 0; k < 1760; k++) {
      b[k] = k % 80 == 79 ? "\n" : " ";
      z[k] = 0;
    }
    for (let j = 0; j < 6.28; j += 0.07) {
      let ct = Math.cos(j),
        st = Math.sin(j);
      for (let i = 0; i < 6.28; i += 0.02) {
        let sp = Math.sin(i),
          cp = Math.cos(i),
          h = ct + 2,
          D = 1 / (sp * h * sA + st * cA + 5),
          t = sp * h * cA - st * sA;

        let x = 0 | (40 + 30 * D * (cp * h * cB - t * sB)),
          y = 0 | (12 + 15 * D * (cp * h * sB + t * cB)),
          o = x + 80 * y,
          N = 0 | (8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB));
        if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
          z[o] = D;
          b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
        }
      }
    }

    this.Buffer.set(b.join("")); // Write the output to the buffer
  }
}
