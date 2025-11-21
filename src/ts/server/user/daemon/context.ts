import { Log } from "$ts/logging";
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

  protected get serviceHost() {
    return this.#daemon.serviceHost;
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
    this.#daemon.userInfo = value;
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
