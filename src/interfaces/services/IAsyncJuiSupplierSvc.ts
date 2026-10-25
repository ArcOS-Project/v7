import type { IJuiSupplier } from "../IJuiSupplier";
import type { IBaseService } from "$interfaces/IServiceHost";

export interface IAsyncJuiSupplierSvc extends IBaseService {
  GetSupplier(appId: string): IJuiSupplier | undefined;
}
