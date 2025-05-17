import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { UserPreferences } from "$types/user";
import type { Component } from "svelte";
import type { Unsubscriber } from "svelte/store";
import General from "./AdvancedSystemSettings/General.svelte";
import Policies from "./AdvancedSystemSettings/Policies.svelte";
import Startup from "./AdvancedSystemSettings/Startup.svelte";

export class AdvSysSetRuntime extends AppProcess {
  public currentTab = Store<string>("General");
  public tabs: Record<string, Component> = {
    General,
    "Startup Items": Startup,
    "System Policies": Policies,
  };
  public preferencesBuffer = Store<UserPreferences>();
  syncInitialized = false;
  bufferInitialized = false;
  bufferChanged = Store<boolean>(false);
  displayingDesync = false;
  preferencesSub?: Unsubscriber;
  bufferSub?: Unsubscriber;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);
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

  apply(close?: boolean) {
    this.syncInitialized = false;
    this.userPreferences.set(this.preferencesBuffer());
    this.bufferChanged.set(false);

    if (close) this.closeWindow();
  }
}
