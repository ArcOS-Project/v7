import { Daemon } from "$ts/daemon";
import { Stack, SysDispatch } from "$ts/env";
import { Process } from "$ts/kernel/mods/stack/process/instance";
import { adminService } from "$ts/servicehost/services/AdminBootstrapper";
import { appStoreService } from "$ts/servicehost/services/AppStorage";
import { bhuspService } from "$ts/servicehost/services/BugHuntUsp";
import { devEnvironmentService } from "$ts/servicehost/services/DevEnvironment";
import { distributionService } from "$ts/servicehost/services/DistribSvc";
import { fileAssocService } from "$ts/servicehost/services/FileAssocSvc";
import { globalDispatchService } from "$ts/servicehost/services/GlobalDispatch";
import iconService from "$ts/servicehost/services/IconService";
import { libraryManagementService } from "$ts/servicehost/services/LibMgmtSvc";
import { messagingService } from "$ts/servicehost/services/MessagingService";
import { protoService } from "$ts/servicehost/services/ProtoService";
import { recentFilesService } from "$ts/servicehost/services/RecentFilesSvc";
import { shareService } from "$ts/servicehost/services/ShareMgmt";
import { trashService } from "$ts/servicehost/services/TrashSvc";
import { Store } from "$ts/writable";
import { LogLevel } from "$types/logging";
import type { ReadableServiceStore, ServiceChangeResult, ServiceStore } from "$types/service";
import type { IBaseService, IServiceHost } from "../../interfaces/service";
import { migrationService } from "./services/MigrationSvc";

export class ServiceHost extends Process implements IServiceHost {
  public Services: ReadableServiceStore = Store<ServiceStore>();
  public _holdRestart = false;
  private _storeLoaded = false;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.name = "ServiceHost";

    this.setSource(__SOURCE__);
  }

  public async initialRun(broadcast?: (msg: string) => void) {
    const services = this.Services.get();

    for (const [id, service] of [...services]) {
      if (!service.initialState || service.initialState != "started") continue;
      service.id = id;

      await this.startService(id, broadcast);
    }
  }

  public async spinDown(broadcast?: (msg: string) => void) {
    this._holdRestart = true;

    for (const [id, service] of [...this.Services()]) {
      if (service.pid) await this.stopService(id, broadcast);
    }

    await this.killSelf();
  }

  async init(broadcast?: (msg: string) => void) {
    this.loadStore(this.STORE);
    await this.initialRun(broadcast);

    Stack.store.subscribe(() => this.verifyServicesProcesses());
    this.Services.subscribe(() => SysDispatch.dispatch("services-flush"));
  }

  async stop() {
    this._holdRestart = true;

    // Gracefully stop each service
    for (const [id, service] of [...this.Services()]) {
      if (service.pid) await this.stopService(id);
    }
  }

  //#endregion

  readonly STORE = new Map([
    ["TrashSvc", { ...trashService }],
    ["BugHuntUsp", { ...bhuspService }],
    ["ShareMgmt", { ...shareService }],
    ["AppStorage", { ...appStoreService }],
    ["ProtoService", { ...protoService }],
    ["AdminBootstrapper", { ...adminService }],
    ["FileAssocSvc", { ...fileAssocService }],
    ["GlobalDispatch", { ...globalDispatchService }],
    ["MessagingService", { ...messagingService }],
    ["DevEnvironment", { ...devEnvironmentService }],
    ["DistribSvc", { ...distributionService }],
    ["IconService", { ...iconService }],
    ["LibMgmtSvc", { ...libraryManagementService }],
    ["MigrationSvc", { ...migrationService }],
    ["RecentFilesSvc", { ...recentFilesService }],
  ]);

  public loadStore(store: ServiceStore) {
    if (this._storeLoaded) {
      this.Log(`Can't load another store: a store is already loaded.`, LogLevel.error);

      return false;
    }

    this.Log(`Loading store (${store.size} services)`);

    for (const [id, service] of [...store]) {
      const { process, startCondition } = service;
      service.id = id;
      service.loadedAt = new Date().getTime();

      store.set(id, { ...JSON.parse(JSON.stringify(service)), process, startCondition });
    }

    this.Services.set(store);

    return (this._storeLoaded = true);
  }

  getServiceInfo(id: string) {
    const services = this.Services.get();
    const service = services.get(id);

    return service;
  }

  async startService(id: string, broadcast?: (msg: string) => void) {
    broadcast ||= (m) => this.Log(`startService for ${id}: ${m}`);
    this.Log(`Starting service ${id}...`);

    const services = this.Services.get();
    const service = services.get(id);
    if (!services.has(id) || !service) return "err_noExist";

    const canStart = service.startCondition ? await service.startCondition(Stack.getProcess(this.parentPid)!) : true;

    if (!canStart) return "err_startCondition";
    if (service.pid) return "err_alreadyRunning";

    const instance = await Stack.spawn(service.process, undefined, Daemon?.userInfo?._id, this.pid, id, this, broadcast);
    if (!instance) return "err_spawnFailed";

    service.pid = instance.pid;
    service.changedAt = new Date().getTime();

    services.set(id, service);
    this.Services.set(services);

    return "success";
  }

  public async stopService(id: string, broadcast?: (m: string) => void): Promise<ServiceChangeResult> {
    broadcast ||= (m) => this.Log(`stopService for ${id}: ${m}`);
    this.Log(`Stopping service ${id}...`);

    const services = this.Services.get();
    const service = services.get(id);

    if (!services.has(id) || !service) return "err_noExist";
    if (!service.pid) return "err_notRunning";

    this._holdRestart = true;

    const proc = Stack.getProcess<IBaseService>(service.pid);

    proc?.deactivate(broadcast);

    await Stack.kill(service.pid, true);

    service.pid = undefined;
    service.changedAt = new Date().getTime();
    services.set(id, service);
    this.Services.set(services);
    this._holdRestart = false;

    return "success";
  }

  public async restartService(id: string): Promise<ServiceChangeResult> {
    const services = this.Services.get();

    if (!services.has(id)) return "err_noExist";

    await this.stopService(id);
    const started = await this.startService(id);

    return started;
  }

  public async verifyServicesProcesses() {
    if (this._holdRestart) return;

    const services = this.Services.get();

    for (const [id, service] of [...services]) {
      if (!service.pid || Stack.isPid(service.pid)) continue;

      this.Log(`Process of ${id} doesn't exist anymore! Restarting service...`, LogLevel.warning);

      Daemon.getShell()?.ShowToast(
        {
          content: `Service ${service.name} got restarted because of a problem`,
          icon: "power",
        },
        3000
      );

      await this.restartService(id);
    }
  }

  public getService<T extends IBaseService = IBaseService>(id: string): T | undefined {
    const store = this.Services();
    const service = store.get(id);

    if (!service?.pid) {
      if (store.has(id)) this.Log(`Tried to get inactive service '${id}'!`, LogLevel.warning);
      return undefined;
    }

    return Stack.getProcess(service.pid) as T;
  }

  public hasService(id: string): boolean {
    const store = this.Services();
    const service = store.get(id);

    if (!store.has(id) || !service) return false;

    return true;
  }
}
