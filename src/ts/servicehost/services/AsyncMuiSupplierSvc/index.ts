import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IMuiSupplier } from "$interfaces/IMuiSupplier";
import type { IServiceHost } from "$interfaces/IServiceHost";
import type { IApplicationStorage } from "$interfaces/services/IApplicationStorage";
import type { IAsyncMuiSupplierSvc } from "$interfaces/services/IAsyncMuiSupplierSvc";
import { CommandResult } from "$ts/result";
import { BaseService } from "$ts/servicehost/base";
import { MuiSupplier } from "$ts/ui/mui/supplier";
import type { Service } from "$types/services/service";
import type { AmbientMuiSupplierSettings } from "$types/system/mui/ambient";

export class AsyncMuiSupplierSvc extends BaseService implements IAsyncMuiSupplierSvc {
  private suppliers: Record<string, IMuiSupplier> = {};

  get appStorage() {
    return this.host.getService<IApplicationStorage>("AppStorage");
  }

  constructor(pid: number, parentPid: number, name: string, host: IServiceHost, initBroadcast?: (msg: string) => void) {
    super(pid, parentPid, name, host, initBroadcast);
  }

  protected async start(): Promise<any> {
    const applications = this.appStorage!.buffer().filter((app) => app.originId === "builtin" && app.muiSupplier);

    for (const app of applications) {
      // not awaiting here
      this.LoadSupplier(app.id, app.muiSupplier!);
    }
  }

  private LoadSupplier(appId: string, ambient: AmbientMuiSupplierSettings): Promise<ICommandResult> {
    return new Promise<ICommandResult>((resolve) => {
      try {
        const supplier = new MuiSupplier(ambient.supplierOptions);

        supplier.Initialize().then((result) => {
          this.suppliers[appId] = supplier;
          resolve(result);
        });
      } catch (e) {
        return CommandResult.Error(`${e}`);
      }
    });
  }

  public GetSupplier(appId: string): IMuiSupplier | undefined {
    return this.suppliers[appId];
  }
}

export const asyncMuiSupplierService: Service = {
  name: "AsyncMuiSupplierSvc",
  description: "Asynchronously obtains MUI suppliers",
  process: AsyncMuiSupplierSvc,
  initialState: "started",
};
