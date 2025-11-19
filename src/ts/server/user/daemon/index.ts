//#region IMPORTS
import { GlobalLoadIndicatorApp } from "$apps/components/globalloadindicator/GlobalLoadIndicator";
import { GlobalLoadIndicatorRuntime } from "$apps/components/globalloadindicator/runtime";
import type { IconPickerData } from "$apps/components/iconpicker/types";
import { TerminalWindowApp } from "$apps/components/terminalwindow/TerminalWindow";
import { TerminalWindowRuntime } from "$apps/components/terminalwindow/runtime";
import { AppProcess } from "$ts/apps/process";
import { ApplicationStorage } from "$ts/apps/storage";
import { MessageBox } from "$ts/dialog";
import { getKMod, KernelStack } from "$ts/env";
import { KernelStateHandler } from "$ts/getters";
import { Process } from "$ts/process/instance";
import type { ProtocolServiceProcess } from "$ts/proto";
import { AdminProtocolHandlers } from "$ts/server/admin/proto";
import type { GlobalDispatch } from "$ts/server/ws";
import { ServiceHost } from "$ts/services";
import { Sleep } from "$ts/sleep";
import { LibraryManagement } from "$ts/tpa/libraries";
import { UUID } from "$ts/uuid";
import { Store } from "$ts/writable";
import type { App } from "$types/app";
import type { EnvironmentType, ServerManagerType } from "$types/kernel";
import type { Service } from "$types/service";
import type { ExpandedTerminal } from "$types/terminal";
import type { UserInfo, UserPreferences } from "$types/user";
import type { FileAssocService } from "../assoc";
import { DefaultUserInfo } from "../default";
import type { UserContext } from "./context";
import type { AccountUserContext } from "./contexts/account";
import type { LoginActivityUserContext } from "./contexts/activity";
import type { ApplicationsUserContext } from "./contexts/applications";
import type { AppRegistrationUserContext } from "./contexts/appregistration";
import type { AppRendererUserContext } from "./contexts/apprenderer";
import type { ChecksUserContext } from "./contexts/checks";
import type { ElevationUserContext } from "./contexts/elevation";
import type { FilesystemUserContext } from "./contexts/filesystem";
import type { MigrationsUserContext } from "./contexts/migrations";
import type { NotificationsUserContext } from "./contexts/notifications";
import type { PowerUserContext } from "./contexts/power";
import type { PreferencesUserContext } from "./contexts/preferences";
import type { SpawnUserContext } from "./contexts/spawn";
import type { StatusUserContext } from "./contexts/status";
import type { ThemesUserContext } from "./contexts/themes";
import type { VersionUserContext } from "./contexts/version";
import type { WallpaperUserContext } from "./contexts/wallpaper";
import type { WorkspaceUserContext } from "./contexts/workspaces";
import { UserContexts } from "./store";
//#endregion

export class UserDaemon extends Process {
  public username: string;
  public token: string;
  public userInfo: UserInfo = DefaultUserInfo;
  public autoLoadComplete = false;
  public safeMode = false;
  public initialized = false;
  public usingTargetedAuthorization = false;
  public _blockLeaveInvocations = true;
  public _toLoginInvoked = false;
  override _criticalProcess: boolean = true;
  public copyList = Store<string[]>([]);
  public cutList = Store<string[]>([]);
  public server: ServerManagerType;
  public globalDispatch?: GlobalDispatch;
  public assoc?: FileAssocService;
  public serviceHost?: ServiceHost;
  public libraries?: LibraryManagement;

  // CONTEXTS

  account?: AccountUserContext;
  activityContext?: LoginActivityUserContext;
  applicationsContext?: ApplicationsUserContext;
  appRegistrationContext?: AppRegistrationUserContext;
  appRendererContext?: AppRendererUserContext;
  checksContext?: ChecksUserContext;
  elevationContext?: ElevationUserContext;
  filesystemContext?: FilesystemUserContext;
  migrationsContext?: MigrationsUserContext;
  notificationsContext?: NotificationsUserContext;
  powerContext?: PowerUserContext;
  preferencesContext?: PreferencesUserContext;
  spawnContext?: SpawnUserContext;
  statusContext?: StatusUserContext;
  themesContext?: ThemesUserContext;
  versionContext?: VersionUserContext;
  wallpaperContext?: WallpaperUserContext;
  workspacesContext?: WorkspaceUserContext;

  get preferences() {
    return this.preferencesContext!.preferences!;
  }

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, token: string, username: string, userInfo?: UserInfo) {
    super(pid, parentPid);

    this.token = token;
    this.username = username;
    this.env.set("userdaemon_pid", this.pid);
    if (userInfo) this.userInfo = userInfo;

    this.server = getKMod<ServerManagerType>("server");
    this.safeMode = !!this.env.get("safemode");
    this.name = "UserDaemon";

    this.setSource(__SOURCE__);
  }

  async start() {
    try {
      await this.startUserContexts();
      this.usingTargetedAuthorization = this.server.url !== import.meta.env.DW_SERVER_URL;
    } catch {
      return false;
    }
  }

  async stop() {
    if (this._disposed) return;

    if (!this._toLoginInvoked && KernelStateHandler()?.currentState === "desktop") {
      KernelStateHandler()?.loadState("login", { type: "restart", userDaemon: this });
      return false;
    }

    if (this.serviceHost) this.serviceHost._holdRestart = true;
  }

  //#endregion
  //#region INIT

  async startUserContexts() {
    for (const id in UserContexts) {
      const context = new UserContexts[id](id, this);
      (this as any)[id] = context;
    }

    for (const id in UserContexts) {
      await (this as any)[id].__init();
    }
  }

  async stopUserContexts() {
    for (const id in UserContexts) {
      const context = (this as any)[id] as UserContext;

      await context.__deactivate();
    }
  }

  async activateAdminBootstrapper() {
    this.Log("Activating admin bootstrapper");

    if (!this.userInfo.admin) return;
    const appStore = this.appStorage()!;
    const adminPortal = (await import("$apps/admin/adminportal/AdminPortal")).default as App;

    appStore.loadOrigin("admin", () => [adminPortal]);
    await appStore.refresh();

    const proto = this.serviceHost?.getService<ProtocolServiceProcess>("ProtoService");

    for (const key in AdminProtocolHandlers) {
      proto?.registerHandler(key, AdminProtocolHandlers[key]);
    }
  }

  async startServiceHost(svcPreRun?: (service: Service) => void) {
    this.Log("Starting service host");

    this.serviceHost = await KernelStack().spawn<ServiceHost>(ServiceHost, undefined, this.userInfo!._id, this.pid);
    await this.serviceHost?.init(svcPreRun);

    this.assoc = this.serviceHost?.getService<FileAssocService>("FileAssocSvc");
    this.libraries = this.serviceHost?.getService<LibraryManagement>("LibMgmtSvc")!;
  }

  async activateGlobalDispatch() {
    this.globalDispatch = this.serviceHost!.getService<GlobalDispatch>("GlobalDispatch");

    this.globalDispatch?.subscribe("update-preferences", async (preferences: UserPreferences) => {
      this.preferencesContext!.syncLock = true;
      await Sleep(0);
      this.preferencesContext!.preferences.set(preferences);
      await Sleep(0);
      this.preferencesContext!.syncLock = false;
    });

    this.globalDispatch?.subscribe("fs-flush-folder", (path) => {
      this.systemDispatch.dispatch("fs-flush-folder", path);
    });

    this.globalDispatch?.subscribe("fs-flush-file", (path) => {
      this.systemDispatch.dispatch("fs-flush-file", path);
    });
  }

  appStorage() {
    return this.serviceHost?.getService<ApplicationStorage>("AppStorage");
  }

  //#endregion INIT
  //#region HELPERS

  async GlobalLoadIndicator(caption?: string, pid?: number) {
    const process = await KernelStack().spawn<GlobalLoadIndicatorRuntime>(
      GlobalLoadIndicatorRuntime,
      undefined,
      this.userInfo!._id,
      pid || +this.env.get("shell_pid"),
      {
        data: { ...GlobalLoadIndicatorApp, overlay: true },
        id: GlobalLoadIndicatorApp.id,
        desktop: undefined,
      },
      caption
    );

    if (!process)
      return {
        caption: Store<string>(),
        stop: async () => {},
      };

    return {
      caption: process.caption,
      stop: async () => {
        await Sleep(500);
        await process.closeWindow();
      },
    };
  }

  async Confirm(title: string, message: string, no: string, yes: string, image = "QuestionIcon", pid?: number) {
    const shellPid = pid || +this.env.get("shell_pid");
    return new Promise((r) => {
      MessageBox(
        {
          title,
          message,
          image,
          buttons: [
            { caption: no, action: () => r(false) },
            { caption: yes, action: () => r(true), suggested: true },
          ],
        },
        shellPid,
        !!shellPid
      );
    });
  }

  async TerminalWindow(pid = +this.env.get("shell_pid")): Promise<ExpandedTerminal | undefined> {
    const process = await KernelStack().spawn<TerminalWindowRuntime>(TerminalWindowRuntime, undefined, this.userInfo!._id, pid, {
      data: { ...TerminalWindowApp },
      id: TerminalWindowApp.id,
      desktop: undefined,
    });

    if (!process?.term) return undefined;

    const term: ExpandedTerminal = process.term;
    term.process = process;

    return term;
  }

  async IconPicker(data: Omit<IconPickerData, "returnId">) {
    if (this._disposed) return;

    this.Log(`Opening OpenWith for ${data.forWhat}`);

    const uuid = UUID();

    await this.spawnContext?.spawnOverlay("IconPicker", +this.env.get("shell_pid"), {
      ...data,
      returnId: uuid,
    });

    return new Promise<string>(async (r) => {
      this.systemDispatch.subscribe<[string, string]>("ip-confirm", ([id, icon]) => {
        if (id === uuid) r(icon);
      });
      this.systemDispatch.subscribe("ip-cancel", ([id]) => {
        if (id === uuid) r(data.defaultIcon);
      });
    });
  }

  ParentIs(proc: AppProcess, appId: string) {
    const targetAppInstances = KernelStack()
      .renderer?.getAppInstances(appId)
      .map((p) => p.pid);

    return targetAppInstances?.includes(proc.parentPid);
  }

  //#endregion HELPERS
}

export function TryGetDaemon(): UserDaemon | undefined {
  const env = getKMod<EnvironmentType>("env");
  const stack = KernelStack();
  const daemonPid = +env.get("userdaemon_pid");

  return stack.getProcess<UserDaemon>(daemonPid);
}
