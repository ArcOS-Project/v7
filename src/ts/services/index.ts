import { appStoreService } from "$ts/apps/storage";
import { bhuspService } from "$ts/bughunt/process";
import { devEnvironmentService } from "$ts/devenv";
import { distributionService } from "$ts/distrib";
import { KernelStack } from "$ts/env";
import iconService from "$ts/icon";
import { Process } from "$ts/process/instance";
import { protoService } from "$ts/proto";
import { adminService } from "$ts/server/admin";
import { messagingService } from "$ts/server/messaging";
import { fileAssocService } from "$ts/server/user/assoc";
import type { UserDaemon } from "$ts/server/user/daemon";
import { trashService } from "$ts/server/user/trash";
import { globalDispatchService } from "$ts/server/ws";
import { shareService } from "$ts/shares";
import { Store } from "$ts/writable";
import { LogLevel } from "$types/logging";
import type { ReadableServiceStore, Service, ServiceChangeResult, ServiceStore } from "$types/service";
import type { BaseService } from "./base";

export class ServiceHost extends Process {
  public Services: ReadableServiceStore = Store<ServiceStore>();
  public _holdRestart = false;
  private _storeLoaded = false;
  public daemon: UserDaemon;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.daemon = KernelStack().getProcess(+this.env.get("userdaemon_pid"))!;
    this.name = "ServiceHost";

    this.setSource(__SOURCE__);
  }

  public async initialRun(svcPreRun?: (service: Service) => void) {
    const services = this.Services.get();

    for (const [id, service] of [...services]) {
      if (!service.initialState || service.initialState != "started") continue;

      service.id = id;

      await this.startService(id);

      await svcPreRun?.(service);
    }
  }

  async init(svcPreRun?: (service: Service) => void) {
    this.loadStore(this.STORE);
    await this.initialRun(svcPreRun);

    KernelStack().store.subscribe(() => this.verifyServicesProcesses());

    this.Services.subscribe(() => this.systemDispatch.dispatch("services-flush"));
  }

  async stop() {
    this._holdRestart = true;
  }

  //#endregion

  readonly STORE = new Map([
    // ["TrashSvc", { ...trashService }],
    // ["BugHuntUsp", { ...bhuspService }],
    // ["AdminBootstrapper", { ...adminService }],
    // ["ShareMgmt", { ...shareService }],
    // ["AppStorage", { ...appStoreService }],
    // ["FileAssocSvc", { ...fileAssocService }],
    // ["GlobalDispatch", { ...globalDispatchService }],
    // ["MessagingService", { ...messagingService }],
    // ["DevEnvironment", { ...devEnvironmentService }],
    // ["DistribSvc", { ...distributionService }],
    // ["ProtoService", { ...protoService }],
    // ["IconService", { ...iconService }],
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

  async startService(id: string) {
    this.Log(`Starting service ${id}...`);

    const services = this.Services.get();
    const service = services.get(id);

    if (!services.has(id) || !service) return "err_noExist";

    const canStart = service.startCondition ? await service.startCondition(KernelStack().getProcess(this.parentPid)!) : true;

    if (!canStart) return "err_startCondition";
    if (service.pid) return "err_alreadyRunning";

    const instance = await KernelStack().spawn(service.process, undefined, this.daemon.userInfo?._id, this.pid, id, this);

    if (!instance) return "err_spawnFailed";

    service.pid = instance.pid;
    service.changedAt = new Date().getTime();

    services.set(id, service);
    this.Services.set(services);

    return "success";
  }

  public async stopService(id: string): Promise<ServiceChangeResult> {
    this.Log(`Stopping service ${id}...`);

    const services = this.Services.get();
    const service = services.get(id);

    if (!services.has(id) || !service) return "err_noExist";

    if (!service.pid) return "err_notRunning";

    this._holdRestart = true;

    await KernelStack().kill(service.pid, true);

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
      if (!service.pid || KernelStack().isPid(service.pid)) continue;

      this.Log(`Process of ${id} doesn't exist anymore! Restarting service...`, LogLevel.warning);

      await this.restartService(id);
    }
  }

  public getService<T extends BaseService = BaseService>(id: string): T | undefined {
    const store = this.Services();
    const service = store.get(id);

    if (!store.has(id) || !service || !service.pid) return undefined;

    return KernelStack().getProcess(service.pid) as T;
  }

  public hasService(id: string): boolean {
    const store = this.Services();
    const service = store.get(id);

    if (!store.has(id) || !service) return false;

    return true;
  }
}
