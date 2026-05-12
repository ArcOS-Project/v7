import type { PageButtons } from "$apps/core/initialsetup/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IServerManager } from "$interfaces/modules/IServerManager";
import type { ReadableStore } from "$types/writable";
import type { Component } from "svelte";

export interface IInitialSetupRuntime extends IAppProcess {
  pageNumber: ReadableStore<number>;
  identityInfoValid: ReadableStore<boolean>;
  newUsername: ReadableStore<string>;
  password: ReadableStore<string>;
  confirm: ReadableStore<string>;
  email: ReadableStore<string>;
  actionsDisabled: ReadableStore<boolean>;
  showMainContent: ReadableStore<boolean>;
  displayName: ReadableStore<string>;
  server: IServerManager;
  readonly pages: Component<any>[];
  readonly pageButtons: PageButtons;

  render(): Promise<void>;
  finish(): Promise<void>;
  licenseConfirmation(): Promise<void>;
  viewLicense(): Promise<void>;
  createAccount(): Promise<void>;
  checkAccountActivation(): Promise<void>;
}
