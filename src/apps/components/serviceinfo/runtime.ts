import type { IBaseService } from "$interfaces/service";
import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/util/dialog";
import { Stack } from "$ts/env";
import { Daemon } from "$ts/daemon";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { Service } from "$types/service";
import type { Unsubscriber } from "svelte/store";

export class ServiceInfoRuntime extends AppProcess {
  serviceId: string;
  service = Store<Service | undefined>();
  serviceProcess = Store<IBaseService | undefined>();
  serviceSubscriber?: Unsubscriber;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, serviceId: string) {
    super(pid, parentPid, app);

    this.serviceId = serviceId;
    this.service.set(Daemon?.serviceHost?.Services.get().get(serviceId));
  }

  async start() {
    if (!this.service) return false;

    this.serviceSubscriber = Daemon?.serviceHost?.Services.subscribe((v) => {
      this.service.set(v.get(this.serviceId));
      const pid = this.service()?.pid;
      this.serviceProcess.set(pid ? Stack.getProcess(pid) : undefined);
    });
  }

  async stop() {
    this.serviceSubscriber?.();
  }

  //#endregion

  async toggleRunningState() {
    if (this.service()?.pid) {
      MessageBox(
        {
          title: "Stop service?",
          message: "Are you sure you want to stop this service? This may have unforseen consequences.",
          buttons: [
            {
              caption: "Cancel",
              action: () => {},
            },
            {
              caption: "Stop service",
              action: () => {
                Daemon?.serviceHost?.stopService(this.serviceId);
              },
              suggested: true,
            },
          ],
          image: "WarningIcon",
          sound: "arcos.dialog.warning",
        },
        this.pid,
        true
      );
    } else {
      Daemon?.serviceHost?.startService(this.serviceId);
    }
  }
}
