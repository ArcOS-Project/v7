import type { IMuiSupplier } from "$interfaces/IMuiSupplier";
import type { IBaseService } from "$interfaces/IServiceHost";

export interface IAsyncMuiSupplierSvc extends IBaseService {
  GetSupplier(appId: string): IMuiSupplier | undefined;
}
