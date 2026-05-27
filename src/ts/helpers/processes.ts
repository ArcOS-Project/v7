import type { IProcess } from "$interfaces/IProcess";
import { AppProcess } from "$ts/apps/process";
import { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import { ThirdPartyProcess } from "$ts/apps/tpa/process";
import { BaseHelper } from ".";

export class ProcessesHelper extends BaseHelper {
  static IsAnyAppProcess(proc: IProcess) {
    return proc instanceof AppProcess || proc instanceof ThirdPartyAppProcess || proc instanceof ThirdPartyProcess;
  }

  static IsAnyGraphicalAppProcess(proc: IProcess) {
    return proc instanceof AppProcess || proc instanceof ThirdPartyAppProcess;
  }

  static IsAnyThirdPartyProcess(proc: IProcess) {
    return proc instanceof ThirdPartyProcess || proc instanceof ThirdPartyAppProcess;
  }
}
