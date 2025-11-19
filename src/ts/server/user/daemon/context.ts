import { getKMod } from "$ts/env";
import { Log } from "$ts/logging";
import { type SystemDispatchType, type EnvironmentType, type FilesystemType, type ServerManagerType } from "$types/kernel";
import { LogLevel } from "$types/logging";
import type { UserInfo } from "$types/user";
import type { UserDaemon } from ".";

export class UserContext {
  #daemon: UserDaemon;
  #id: string;

  constructor(id: string, daemon: UserDaemon) {
    this.#daemon = daemon;
    this.#id = id;
  }

  async __init() {
    this.Log("Calling _init");

    return await this._init();
  }

  async _init() {
    /** stub */
  }

  async __deactivate() {
    this.Log("Calling _deactivate");

    return await this._deactivate();
  }

  async _deactivate() {
    /** stub */
  }

  protected Log(message: string, level = LogLevel.info) {
    const source = `UserContext[${this.#id}]`;

    Log(source, message, level);
  }

  //#region KMOD REFERENCES

  protected get fs() {
    return getKMod<FilesystemType>("fs");
  }

  protected get env() {
    return getKMod<EnvironmentType>("env");
  }

  protected get systemDispatch() {
    return getKMod<SystemDispatchType>("dispatch");
  }

  protected get server() {
    return getKMod<ServerManagerType>("server");
  }

  //#endregion KMOD REFERENCES

  protected get daemon() {
    return this.#daemon;
  }

  protected get serviceHost() {
    return this.#daemon.serviceHost;
  }

  protected get GlobalLoadIndicator() {
    return this.#daemon.GlobalLoadIndicator;
  }

  protected get appStorage() {
    return this.#daemon.appStorage;
  }

  protected get safeMode() {
    return this.#daemon.safeMode;
  }

  protected get _disposed() {
    return this.#daemon._disposed;
  }

  protected get pid() {
    return this.#daemon.pid;
  }

  protected get userInfo() {
    return this.#daemon.userInfo;
  }

  protected set userInfo(value: UserInfo) {
    this.daemon.userInfo = value;
  }

  protected get token() {
    return this.#daemon.token;
  }

  protected get username() {
    return this.#daemon.username;
  }

  protected set username(username: string) {
    this.#daemon.username = username;
  }

  protected get initialized() {
    return this.#daemon.initialized;
  }

  protected set initialized(value: boolean) {
    this.#daemon.initialized = value;
  }
}
