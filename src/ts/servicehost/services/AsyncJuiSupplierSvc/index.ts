import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IJuiSupplier } from "$interfaces/IJuiSupplier";
import type { IServiceHost } from "$interfaces/IServiceHost";
import type { IApplicationStorage } from "$interfaces/services/IApplicationStorage";
import type { IAsyncJuiSupplierSvc } from "$interfaces/services/IAsyncJuiSupplierSvc";
import { CommandResult } from "$ts/result";
import { BaseService } from "$ts/servicehost/base";
import { JuiSupplier } from "$ts/ui/jui/supplier";
import type { Service } from "$types/services/service";
import type { AmbientJuiSupplierSettings } from "$types/system/jui/ambient";

export class AsyncJuiSupplierSvc extends BaseService implements IAsyncJuiSupplierSvc {
  private suppliers: Record<string, IJuiSupplier> = {};

  get appStorage() {
    return this.host.getService<IApplicationStorage>("AppStorage");
  }

  constructor(pid: number, parentPid: number, name: string, host: IServiceHost, initBroadcast?: (msg: string) => void) {
    super(pid, parentPid, name, host, initBroadcast);
  }

  protected async start(): Promise<any> {
    const applications = this.appStorage!.buffer().filter((app) => app.originId === "builtin" && app.joltSupplier);

    for (const app of applications) {
      // not awaiting here
      this.LoadSupplier(app.id, app.joltSupplier!);
    }
  }

  private LoadSupplier(appId: string, ambient: AmbientJuiSupplierSettings): Promise<ICommandResult> {
    return new Promise<ICommandResult>((resolve) => {
      try {
        const supplier = new JuiSupplier(ambient.supplierOptions);

        supplier.Initialize().then((result) => {
          this.suppliers[appId] = supplier;
          resolve(result);
        });
      } catch (e) {
        return CommandResult.Error(`${e}`);
      }
    });
  }

  public GetSupplier(appId: string): IJuiSupplier | undefined {
    return this.suppliers[appId];
  }
}

export const asyncJuiSupplierService: Service = {
  name: "AsyncJuiSupplierSvc",
  description: "Asynchronously obtains Jolt UI suppliers",
  process: AsyncJuiSupplierSvc,
  initialState: "started",
};
