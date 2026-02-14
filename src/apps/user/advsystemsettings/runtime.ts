import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/util/dialog";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { UserPreferences } from "$types/user";
import type { Component } from "svelte";
import type { Unsubscriber } from "svelte/store";
import DispatchClients from "./AdvancedSystemSettings/DispatchClients.svelte";
import Main from "./AdvancedSystemSettings/Main.svelte";
import Recycling from "./AdvancedSystemSettings/Recycling.svelte";
import Startup from "./AdvancedSystemSettings/Startup.svelte";
import Migrations from "./AdvancedSystemSettings/Migrations.svelte";

export class AdvSysSetRuntime extends AppProcess {
  public currentTab = Store<string>("Main");
  public tabs: Record<string, Component> = {
    Main: Main as any,
    Recycling: Recycling as any,
    Login: Startup as any,
    "Dispatch Clients": DispatchClients as any,
    Migrations: Migrations as any,
  };
  public preferencesBuffer = Store<UserPreferences>();
  syncInitialized = false;
  bufferInitialized = false;
  bufferChanged = Store<boolean>(false);
  displayingDesync = false;
  preferencesSub?: Unsubscriber;
  bufferSub?: Unsubscriber;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, tab?: string) {
    super(pid, parentPid, app);

    if (tab && this.tabs[tab]) this.currentTab.set(tab);

    this.setSource(__SOURCE__);
  }

  async render() {
    if (await this.closeIfSecondInstance()) return false;

    this.preferencesBuffer.set(this.userPreferences());

    this.bufferSub = this.preferencesBuffer.subscribe(() => {
      if (this._disposed) return this.bufferSub?.();
      if (!this.bufferInitialized) return (this.bufferInitialized = true);

      this.bufferChanged.set(true);
    });

    this.preferencesSub = this.userPreferences.subscribe(() => {
      if (this._disposed) return this.preferencesSub?.();
      if (!this.syncInitialized) return (this.syncInitialized = true);
      if (this.displayingDesync) return;

      this.displayingDesync = true;

      MessageBox(
        {
          title: "Your preferences changed",
          message:
            "The user preferences changed while this app was running. Click 'Synchronize' to synchronize. This will discard any changes you've made since opening the dialog.",
          image: "WarningIcon",
          buttons: [
            {
              caption: "Ignore",
              action: () => {
                this.displayingDesync = false;
              },
            },
            {
              caption: "Synchronize",
              suggested: true,
              action: () => {
                this.displayingDesync = false;
                this.preferencesBuffer.set(this.userPreferences());
                this.bufferChanged.set(false);
              },
            },
          ],
        },
        this.pid,
        true
      );
    });
  }

  //#endregion

  apply(close?: boolean) {
    this.syncInitialized = false;
    this.userPreferences.set(this.preferencesBuffer());
    this.bufferChanged.set(false);

    if (close) this.closeWindow();
  }
}
