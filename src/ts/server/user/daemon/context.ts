import { getKMod } from "$ts/env";
import { Log } from "$ts/logging";
import { type SystemDispatchType, type EnvironmentType, type FilesystemType, type ServerManagerType } from "$types/kernel";
import { LogLevel } from "$types/logging";
import type { UserInfo } from "$types/user";
import type { UserDaemon } from ".";

export class UserContext {
  #userDaemon: UserDaemon;
  #id: string;

  constructor(id: string, daemon: UserDaemon) {
    this.#userDaemon = daemon;
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

  protected get userDaemon() {
    return this.#userDaemon;
  }

  protected get serviceHost() {
    return this.#userDaemon.serviceHost;
  }

  protected get GlobalLoadIndicator() {
    return this.#userDaemon.GlobalLoadIndicator;
  }

  protected get appStorage() {
    return this.#userDaemon.appStorage;
  }

  protected get safeMode() {
    return this.#userDaemon.safeMode;
  }

  protected get _disposed() {
    return this.#userDaemon._disposed;
  }

  protected get pid() {
    return this.#userDaemon.pid;
  }

  protected get userInfo() {
    return this.#userDaemon.userInfo;
  }

  protected set userInfo(value: UserInfo) {
    this.userDaemon.userInfo = value;
  }

  protected get token() {
    return this.#userDaemon.token;
  }

  protected get username() {
    return this.#userDaemon.username;
  }

  protected set username(username: string) {
    this.#userDaemon.username = username;
  }

  protected get initialized() {
    return this.#userDaemon.initialized;
  }

  protected set initialized(value: boolean) {
    this.#userDaemon.initialized = value;
  }
}
