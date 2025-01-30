import { validateObject, type ValidationObject } from "$ts/json";
import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import { Sleep } from "$ts/sleep";
import { LogLevel } from "$types/logging";
import { RoturErrors, RoturFriendStatus, type RoturPacket } from "$types/rotur";
import axios from "axios";
import md5 from "md5";

export class RoturExtension extends Process {
  override _criticalProcess: boolean = true;

  ws: WebSocket | null;
  client: { ip?: string; username?: string; users?: string[]; room?: string };
  packets: Record<string, any>;
  is_connected: boolean;
  authenticated: boolean;
  accounts: string;
  server: string;
  userToken: string;
  user: Record<string, any>;
  first_login: boolean;
  designation: string;
  username: string;
  my_client: Record<string, any>;
  mail: Record<string, any>;
  syncedVariables: Record<string, any>;
  localKeys: Record<string, any>;
  packetQueue: any[];
  lastJoined: string;
  lastLeft: string;
  version: number;
  outdated: boolean;
  badges: any[];
  friends: any;
  storage_id = "";

  packetCommandHandlers: Record<
    string,
    ((packet: RoturPacket) => void) | undefined
  > = {
    client_ip: this.clientIpPacket.bind(this),
    client_obj: this.clientObjectPacket.bind(this),
    ulist: this.ulistPacket.bind(this),
    pmsg: this.pmesgPacket.bind(this),
  };
  packetListenerHandlers: Record<
    string,
    ((packet: RoturPacket) => void) | undefined
  > = {
    handshake_cfg: this.handshakeCfgPacket.bind(this),
    set_username_cfg: this.setUsernameCfgPacket.bind(this),
    link_cfg: this.linkCfgPacket.bind(this),
  };

  constructor(handler: ProcessHandler, pid: number, parentPid: number) {
    super(handler, pid, parentPid);

    this.ws = null;
    this.client = {};
    this.packets = {};
    this.is_connected = false;
    this.authenticated = false;
    this.accounts = "";
    this.server = "";
    this.userToken = "";
    this.user = {};
    this.first_login = false;
    this.designation = "";
    this.username = "";
    this.my_client = {};
    this.mail = {};
    this.localKeys = {};
    this.syncedVariables = {};
    this.packetQueue = [];
    this.badges = [];

    this.lastJoined = "";
    this.lastLeft = "";

    this.version = 5;
    this.outdated = false;
  }

  async start() {
    await this.getInformation();
    this._initializeBadges();
  }

  async getInformation() {
    this.Log("Getting Rotur server information");
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/Mistium/Origin-OS/main/Resources/info.json"
      );
      if (response.status !== 200)
        throw new Error("Network response was not ok");

      const { data } = response;

      this.accounts = data.name;
      this.server = data.server;
    } catch {
      this.Log(
        "Getting server information failed, defaulting to sys.-origin",
        LogLevel.warning
      );

      this.accounts = "sys.-origin";
      this.server = "wss://rotur.mistium.com";
    }
  }

  async checkVersion() {
    this.Log("Checking Rotur version information");

    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/RoturTW/main/main/Implementations/SCRATCH/version.txt"
      );
      if (response.status !== 200)
        throw new Error("Network response was not ok");

      this.outdated = this.version < parseInt(response.data);
    } catch {
      this.outdated = false;
    }
  }

  async _initializeBadges() {
    this.Log("Intializing badges");

    await this._getBadges();
  }

  async _getBadges() {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/RoturTW/Badges/main/badges.json"
      );
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      this.badges = response.data;
    } catch (error) {
      this.badges = [];
    }
  }

  // main functions

  async connectToServer(designation: string, system: string, version: string) {
    this.Log("Connecting to server");

    if (!this.server || !this.accounts) {
      this.Log("Waiting for server and accounts...");

      await Sleep(1000);

      await this.connectToServer(designation, system, version);

      return true;
    }

    if (this.ws) {
      this.ws?.close();
    }

    this.designation = designation;
    this.username = randomString(32);
    this.my_client = {
      system,
      version,
    };

    await this.connectToWebsocket();
  }

  isAuthenticated() {
    return this.is_connected && this.authenticated;
  }

  openPorts() {
    const ports = [];

    for (let key in this.packets) {
      ports.push(key);
    }

    if (ports.length === 0) {
      return ["No Open Ports"];
    } else {
      return ports;
    }
  }

  accountKeys() {
    const keys = [];

    for (let key of Object.keys(this.user)) {
      keys.push(key);
    }

    if (keys.length === 0) {
      return ["No User Keys"];
    } else {
      return keys;
    }
  }

  myFriends(): string[] {
    if (!this.isAuthenticated()) return ["Not Authenticated"];

    const keys = [];

    for (let key of this.user["sys.friends"]) {
      keys.push(key);
    }

    return keys.length ? keys : ["No Friends"];
  }

  myRequests(): string[] {
    if (!this.isAuthenticated()) {
      return ["Not Authenticated"];
    }

    const keys = [];

    for (let key of this.user["sys.requests"]) {
      keys.push(key);
    }

    return keys.length ? keys : ["No Requests"];
  }

  serverOnline() {
    if (!this.is_connected) {
      return false;
    }

    return this.client.users?.indexOf(this.accounts) !== -1;
  }

  clientIpPacket(packet: RoturPacket) {
    this.client.ip = packet.val;
  }

  clientObjectPacket(packet: RoturPacket) {
    this.Log(`client_obj ${packet}`);

    this.client.username = packet.val.username;
  }

  ulistPacket(packet: RoturPacket) {
    this.Log(`ulist ${packet}`);

    switch (packet.mode) {
      case "add":
        this.client.users?.push(packet.val.username);
        this.lastJoined = packet.val;
        break;
      case "remove":
        this.client.users = this.client.users?.filter(
          (user) => user != packet.val.username
        );
        this.lastLeft = packet.val;
        break;
      case "set":
        this.client.users = [];

        for (let user of packet.val) {
          this.client.users.push(user.username);
        }
        break;
      default:
        this.Log(
          `Unrecognized ulist packet mode "${packet.mode}"`,
          LogLevel.error
        );
    }
  }

  // TODO: full refactor of this function
  pmesgPacket(packet: RoturPacket) {
    this.Log(`pmesg ${packet}`);
    this.packetQueue.push(packet);

    packet.origin = packet.origin.username;

    delete packet.rooms;
    delete packet.cmd;

    packet.client = packet.val.client;
    packet.source = packet.val.source;
    packet.payload = packet.val.payload;
    packet.timestamp = packet.val.timestamp;

    if (packet.val.source_command) {
      packet.source_command = packet.val.source_command;

      delete packet.val.source_command;
    }

    if (packet.origin === this.accounts) {
      if (packet.source_command === "omail_received") {
      } else if (packet.source_command === "account_update") {
        if (packet.payload.key === "sys.requests") {
          if (packet.payload.value.length > this.friends.requests.length) {
          } else {
          }
        }
        if (packet.payload.key === "sys.currency") {
        }
        this.user[packet.payload.key] = packet.payload.value;
      }
    } else {
      if (packet.source_command === "sync_set") {
        if (!this.syncedVariables[packet.origin]) {
          this.syncedVariables[packet.origin] = {};
        }

        this.syncedVariables[packet.origin][packet.payload.key] =
          packet.payload.value;
      }

      if (packet.source_command === "sync_delete") {
        delete this.syncedVariables[packet.origin][packet.payload.key];
      }

      if (!this.packets[packet.val.target]) {
        this.packets[packet.val.target] = [];
      }

      this.packets[packet.val.target].push(packet);

      delete packet.val;
    }
  }

  handshakeCfgPacket(packet: RoturPacket) {
    this.Log(`handshake_cfg ${packet}`);

    let username = this.designation + "-" + this.username;
    let msg = {
      cmd: "setid",
      val: username,
      listener: "set_username_cfg",
    };

    this.ws?.send(JSON.stringify(msg));
  }

  setUsernameCfgPacket(packet: RoturPacket) {
    this.Log(`set_username_cfg ${packet}`);

    this.client.username = this.designation + "-" + this.username;

    let room = "roturTW";
    let msg = {
      cmd: "link",
      val: [room],
      listener: "link_cfg",
    };

    this.ws?.send(JSON.stringify(msg));
  }

  linkCfgPacket(packet: RoturPacket) {
    this.Log(`link_cfg ${packet}`);

    this.client.room = packet.val;
    this.is_connected = true;
    this.Log("Connected!");
    this.globalDispatch.dispatch("rotur-connected");
  }

  socketSendWithAck(
    outgoing: object,
    validation: ValidationObject,
    callback: (packet: RoturPacket) => void
  ) {
    this.socketSend(outgoing);

    const onmessage = (event: MessageEvent) => {
      const packet = JSON.parse(event.data) as RoturPacket;

      if (!packet) return;

      const valid = validateObject(packet, validation);

      if (!valid) return;

      callback(packet);
      this.ws?.removeEventListener("message", onmessage);
    };

    this.ws?.addEventListener("message", onmessage);
  }

  connectToWebsocket() {
    try {
      this.ws = new WebSocket(this.server);
    } catch (e) {
      this.globalDispatch.dispatch("rotur-error", [e]);

      return;
    }

    if (!this.ws) return;

    this.ws.onopen = () => {
      this.sendHandshake();

      if (!this.ws) return;

      this.ws.onerror = () => {
        this.globalDispatch.dispatch("rotur-error");
      };

      this.ws.onmessage = async (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;

        const commandHandler = this.packetCommandHandlers[packet.cmd || ""];
        const listenerHandler =
          this.packetListenerHandlers[packet.listener || ""];

        if (commandHandler) {
          this.globalDispatch.dispatch(`rotur-cmd-${packet.cmd}`, [packet]);

          this.Log(
            `Executing command handler for command ${
              packet.cmd || "<NONE>"
            }, listener: ${packet.listener || "<NONE>"}`
          );

          await commandHandler(packet);
        }

        if (listenerHandler) {
          this.globalDispatch.dispatch(`rotur-listener-${packet.listener}`, [
            packet,
          ]);

          this.Log(
            `Executing listener handler for listener ${
              packet.listener || "<NONE>"
            }, command: ${packet.cmd || "<NONE>"}`
          );
          await listenerHandler(packet);
        }
      };
    };

    this.ws.onclose = () => {
      this.Log("Disconnected!");
      this.is_connected = false;
    };

    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        this.globalDispatch.dispatch("rotur-error");

        resolve(false);
      }, 3000);

      this.globalDispatch.subscribe("rotur-connected", () => {
        clearTimeout(timeout);

        resolve(true);
      });
    });
  }

  socketSend(data: object) {
    this.ws?.send(JSON.stringify(data));
  }

  sendHandshake() {
    this.socketSend({
      cmd: "handshake",
      val: {
        language: "Javascript",
        version: {
          editorType: "Scratch",
          versionNumber: null,
        },
      },
      listener: "handshake_cfg",
    });
  }

  disconnect() {
    if (this.ws) {
      this.ws?.close();
    }
  }

  connected() {
    return this.is_connected;
  }

  loggedIn() {
    return this.authenticated && this.is_connected;
  }

  firstLogin() {
    return this.first_login;
  }

  async login(username: string, password: string) {
    if (!this.is_connected) throw RoturErrors.err_notConnected;
    if (this.authenticated) throw RoturErrors.err_alreadyLoggedIn;

    return new Promise((resolve, reject) => {
      this.socketSendWithAck(
        {
          cmd: "pmsg",
          val: {
            ip: this.client.ip,
            client: this.my_client,
            command: "login",
            id: this.userToken,
            payload: [username, md5("" + password)],
          },
          id: this.accounts,
        },
        {
          origin: { username: this.accounts },
          val: { source_command: "login" },
        },
        async (packet: RoturPacket) => {
          if (typeof packet.val?.payload !== "object") {
            reject(RoturErrors.err_loginFailed);

            return;
          }

          this.ws?.close();
          this.userToken = packet.val.token;
          this.user = packet.val.payload;
          this.first_login = packet.val.first_login;

          delete packet.val;
          delete this.user.key;
          delete this.user.password;

          // friends data
          this.friends = {};
          // handle if the user has no friends :P
          if (!this.user["sys.friends"]) this.user["sys.friends"] = [];
          if (!this.user["sys.requests"]) this.user["sys.requests"] = [];

          this.friends.list = this.user["sys.friends"];
          this.friends.requests = this.user["sys.requests"];
          delete this.user.friends;
          delete this.user.requests;

          // setup username for reconnect
          this.username = username + "§" + randomString(10);
          this.connectToWebsocket();

          while (!this.is_connected) {
            await Sleep(0); // Mist, let's not lock up the webpage while doin' this, mkay?
          }

          this.authenticated = true;
          resolve(RoturErrors.ok_loggedIn);
        }
      );
    });
  }

  register(username: string, password: string) {
    if (!this.is_connected) throw RoturErrors.err_notConnected;
    if (this.authenticated) throw RoturErrors.err_alreadyLoggedIn;

    return new Promise((resolve, reject) => {
      this.socketSendWithAck(
        {
          cmd: "pmsg",
          val: {
            client: this.my_client,
            command: "new_account",
            id: this.userToken,
            ip: this.client.ip,
            payload: {
              username: username,
              password: md5("" + password),
            },
          },
          id: this.accounts,
        },
        {
          origin: { username: this.accounts },
          val: { source_command: "new_account" },
        },
        (packet) => {
          if (packet.val?.payload !== "Account Created Successfully") {
            reject(RoturErrors.err_registerFailed);
            return;
          }

          resolve(RoturErrors.ok_registered);
        }
      );
    });
  }

  deleteAccount() {
    if (!this.is_connected) throw RoturErrors.err_notConnected;
    if (!this.authenticated) throw RoturErrors.err_notLoggedIn;

    return new Promise((resolve, reject) => {
      this.socketSendWithAck(
        {
          cmd: "pmsg",
          val: {
            client: this.my_client,
            command: "delete_account",
            id: this.userToken,
          },
          id: this.accounts,
        },
        {
          origin: { username: this.accounts },
          val: { source_command: "new_account" },
        },
        (packet) => {
          if (packet.val?.payload !== "Account Deleted Successfully") {
            reject(RoturErrors.err_accountDeleteFailed);

            return;
          }

          resolve(RoturErrors.ok_accountDeleted);
        }
      );
    });
  }

  logout() {
    if (!this.is_connected) return;

    this.ws?.send(
      JSON.stringify({
        cmd: "pmsg",
        val: {
          command: "logout",
          client: this.my_client,
          id: this.userToken,
        },
        id: this.accounts,
      })
    );
    this.authenticated = false;
    this.userToken = "";
    this.user = {};
    this.disconnect();
  }

  getToken() {
    return this.userToken ?? "";
  }

  getkey(key: string) {
    if (!this.is_connected) throw RoturErrors.err_notConnected;
    if (!this.authenticated) throw RoturErrors.err_notLoggedIn;

    if (key in this.user) {
      const keyData = this.user[key];

      if (typeof keyData === "object") {
        return JSON.stringify(keyData);
      } else {
        return keyData;
      }
    } else {
      return "";
    }
  }

  setkey(key: string, value: string) {
    if (value.length > 1000) throw RoturErrors.err_keyTooLong;
    if (!this.is_connected) throw RoturErrors.err_notConnected;
    if (!this.authenticated) throw RoturErrors.err_notLoggedIn;

    return new Promise((resolve) => {
      this.socketSendWithAck(
        {
          cmd: "pmsg",
          val: {
            command: "update",
            client: this.my_client,
            id: this.userToken,
            payload: [key, value],
          },
          id: this.accounts,
        },
        {
          origin: { username: this.accounts },
          val: {
            source_command: "new_account",
            payload: "Account Updated Successfully",
          },
        },
        (packet) => resolve(packet.val.payload)
      );
    });
  }

  keyExists(key: string) {
    if (!this.isAuthenticated()) return false;

    return key in this.user;
  }

  getkeys() {
    if (!this.is_connected) throw RoturErrors.err_notConnected;
    if (!this.authenticated) throw RoturErrors.err_notLoggedIn;

    return JSON.stringify(Object.keys(this.user));
  }

  getvalues() {
    if (!this.is_connected) throw RoturErrors.err_notConnected;
    if (!this.authenticated) throw RoturErrors.err_notLoggedIn;

    return JSON.stringify(Object.values(this.user));
  }

  getAccount() {
    if (!this.is_connected) throw RoturErrors.err_notConnected;
    if (!this.authenticated) throw RoturErrors.err_notLoggedIn;

    return JSON.stringify(this.user);
  }

  setStorageID(id: string) {
    if (!this.isAuthenticated()) {
      this.Log("Unable to set the storage ID: Not Logged In", LogLevel.error);

      return;
    }

    if (this.storage_id) {
      this.Log("Unable to set the storage ID: Already Set", LogLevel.error);

      return;
    }

    new Promise((resolve, reject) => {
      this.socketSendWithAck(
        {
          cmd: "pmsg",
          val: {
            command: "storage_getid",
            client: this.my_client,
            id: this.userToken,
            payload: id,
          },
          id: this.accounts,
        },
        {
          origin: { username: this.accounts },
          val: { source_command: "storage_getid" },
        },
        (packet) => {
          if (packet.val.payload === "Not Logged In") {
            reject(RoturErrors.err_storageIdSetFailed);

            return;
          }

          resolve("" + id);
          this.storage_id = "" + id;
          this.localKeys = JSON.parse(packet.val.payload);
        }
      );
    });
  }

  storageIdExists() {
    return this.storage_id !== undefined;
  }

  getStorageID() {
    return this.storage_id ?? "";
  }

  getStorageKey(key: string) {
    if (!this.isAuthenticated()) throw RoturErrors.err_notLoggedIn;

    return this.storage_id
      ? this.localKeys[key] ?? ""
      : RoturErrors.err_storageIdNotSet;
  }

  setStorageKey(key: string, value: string) {
    if (value.length > 1000) throw RoturErrors.err_keyTooLong;

    if (!this.isAuthenticated()) throw RoturErrors.err_notLoggedIn;
    if (!this.storage_id) throw RoturErrors.err_storageIdNotSet;

    this.localKeys[key] = value;

    return new Promise((resolve, reject) => {
      this.socketSendWithAck(
        {
          cmd: "pmsg",
          val: {
            command: "storage_set",
            id: this.userToken,
            client: this.my_client,
            payload: {
              key: key,
              value: value,
              id: this.storage_id,
            },
          },
          id: this.accounts,
        },
        {
          origin: { username: this.accounts },
          val: { source_command: "storage_set" },
        },
        (packet) => {
          if (packet.val.payload !== "Successfully Set Key") {
            reject(RoturErrors.err_keySetFailed);
            return;
          }

          resolve(RoturErrors.ok_keySet);
        }
      );
    });
  }

  existsStorageKey(key: string) {
    if (!this.isAuthenticated()) return false;

    return this.storage_id ? key in this.localKeys : false;
  }

  deleteStorageKey(key: string) {
    if (!this.isAuthenticated()) {
      this.Log("Not Logged In", LogLevel.error);

      return;
    }

    if (!this.storage_id) {
      this.Log("Storage Id Not Set", LogLevel.error);

      return;
    }

    delete this.localKeys[key];

    return new Promise((resolve, reject) => {
      this.socketSendWithAck(
        {
          cmd: "pmsg",
          val: {
            command: "storage_delete",
            id: this.userToken,
            client: this.my_client,
            payload: {
              key,
              id: this.storage_id,
            },
          },
          id: this.accounts,
        },
        {
          origin: { username: this.accounts },
          val: { source_command: "storage_delete" },
        },
        (packet) => {
          if (packet.val.payload !== "Successfully Deleted Key") {
            reject(RoturErrors.err_keyDeleteFailed);

            return;
          }

          resolve(RoturErrors.ok_keyDeleted);
        }
      );
    });
  }

  // TODO: CONTINUE REFACTORING FROM HERE
  // I'M GOING TO BED.

  getStorageKeys() {
    if (!this.isAuthenticated()) throw RoturErrors.err_notLoggedIn;

    if (!this.storage_id) throw RoturErrors.err_storageIdNotSet;

    JSON.stringify(Object.keys(this.localKeys));
  }

  getStorageValues() {
    if (!this.isAuthenticated()) throw RoturErrors.err_notLoggedIn;

    if (!this.storage_id) throw RoturErrors.err_storageIdNotSet;

    return JSON.stringify(Object.values(this.localKeys));
  }

  clearStorage() {
    if (!this.isAuthenticated()) {
      this.Log("Not clearing storage: Not logged in!", LogLevel.error);

      return;
    }

    if (!this.storage_id) {
      this.Log("Not clearing storage: Storage Id Not Set", LogLevel.error);

      return;
    }

    this.localKeys = {};
  }

  storageUsage() {
    if (!this.isAuthenticated()) throw RoturErrors.err_notLoggedIn;

    if (!this.storage_id) throw RoturErrors.err_storageIdNotSet;

    return JSON.stringify(JSON.stringify(this.localKeys).length);
  }

  storageLimit() {
    return "50000";
  }

  storageRemaining() {
    if (!this.isAuthenticated()) throw RoturErrors.err_notLoggedIn;
    if (!this.storage_id) throw RoturErrors.err_storageIdNotSet;

    return 50000 - JSON.stringify(this.localKeys).length + "";
  }

  // TODO: REFACTOR FASE 2: CONTINUE FROM HERE

  accountStorageUsage() {
    if (!this.isAuthenticated()) throw RoturErrors.err_notLoggedIn;

    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "storage_usage",
          client: this.my_client,
          id: this.userToken,
        },
        id: this.accounts,
      });

      const handleStorageKey = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (!packet) return;
        if (packet.origin?.username !== this.accounts) return;
        if (packet.val.source_command !== "storage_usage") return;
        if (packet.val.payload === "Not Logged In") {
          reject(RoturErrors.err_notLoggedIn);
          return;
        }

        resolve(packet.val.payload);

        this.ws?.removeEventListener("message", handleStorageKey);
      };
      this.ws?.addEventListener("message", handleStorageKey);
    });
  }

  accountStorageLimit() {
    return "1000000";
  }

  accountStorageRemaining() {
    if (!this.isAuthenticated()) throw RoturErrors.err_notLoggedIn;

    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "storage_usage",
          client: this.my_client,
          id: this.userToken,
        },
        id: this.accounts,
      });

      const handleStorageKey = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;

        if (!packet) return;
        if (packet.origin?.username !== this.accounts) return;
        if (packet.val.source_command !== "storage_space") return;
        if (packet.val.payload === "Not Logged In") {
          reject(RoturErrors.err_notLoggedIn);

          return;
        }

        resolve(1000000 - Number(packet.val.payload));

        this.ws?.removeEventListener("message", handleStorageKey);
      };
      this.ws?.addEventListener("message", handleStorageKey);
    });
  }

  sendMessage(payload: string, source: string, target: string, user: string) {
    if (!this.is_connected) {
      this.Log("Can't send a message if not connected", LogLevel.error);

      return "";
    }

    this.socketSend({
      cmd: "pmsg",
      val: {
        client: this.my_client,
        payload,
        source,
        target,
        timestamp: Date.now(),
      },
      id: user,
    });
  }

  whenMessageReceived() {
    return true;
  }

  getPacketsFromTarget(target: string) {
    return JSON.stringify(this.packets[target] || "[]");
  }

  numberOfPacketsOnTarget(target: string) {
    return this.packets[target] ? this.packets[target].length : 0;
  }

  getFirstPacketOnTarget(target: string) {
    return JSON.stringify(this.packets[target]?.[0] || "{}");
  }

  dataOfFirstPacketOnTarget(target: string, data: string) {
    switch (data) {
      case "origin":
        return this.packets[target]?.[0]?.origin || "";
      case "client":
        return (
          this.packets[target]?.[0]?.client ||
          '{"system":"Unknown", "version":"Unknown"}'
        );
      case "source port":
        return this.packets[target]?.[0]?.source || "Unknown";
      case "payload":
        return this.packets[target]?.[0]?.payload || "";
      case "timestamp":
        return this.packets[target]?.[0]?.timestamp || "0";
      default:
        return "";
    }
  }

  getAllTargets() {
    return JSON.stringify(Object.keys(this.packets));
  }

  getAllPackets() {
    return JSON.stringify(this.packets);
  }

  deleteFirstPacketOnTarget(target: string) {
    if (!this.packets[target]) return "{}";

    const packet = this.packets[target]?.[0];
    this.packets[target].shift();

    return JSON.stringify(packet);
  }

  deletePacketsOnTarget(target: string) {
    delete this.packets[target];
  }

  deleteAllPackets() {
    this.packets = {};
  }

  clientIP() {
    return this.is_connected ? this.client.ip : RoturErrors.err_notConnected;
  }

  clientUsername() {
    return this.is_connected
      ? this.client.username
      : RoturErrors.err_notConnected;
  }

  clientUsers() {
    if (!this.is_connected) throw RoturErrors.err_notConnected;

    return JSON.stringify(this.client.users);
  }

  getUserDesignation(designation: string) {
    if (!this.is_connected) throw RoturErrors.err_notConnected;

    return JSON.stringify(
      this.client.users?.filter((user) => user.startsWith(designation + "-"))
    );
  }

  usernameConnected(user: string) {
    if (!this.isAuthenticated()) return false;

    const regexp = new RegExp(`(?<=")[a-zA-Z]{3}-${user}§\\S{10}(?=")`, "gi");

    return JSON.stringify(this.client.users).match(regexp) !== null;
  }

  userConnected(designation: string, user: string) {
    if (!this.is_connected) throw RoturErrors.err_notConnected;
    if (designation.length !== 3) throw RoturErrors.err_invalidDesignation;

    const regexp = new RegExp(
      `(?<=")${designation}-${designation}§\\S{10}(?=")`,
      "gi"
    );

    return JSON.stringify(this.client.users).match(regexp) !== null;
  }

  findID(user: string) {
    if (!this.is_connected) throw RoturErrors.err_notConnected;

    const regexp = new RegExp(`[a-zA-Z]{3}-${user}§\\S{10}`, "gi");

    return JSON.stringify(
      this.client.users?.filter((user) => user.match(regexp) !== null)
    );
  }

  RAWgetAllPackets() {
    return JSON.stringify(this.packetQueue);
  }

  RAWgetFirstPacket() {
    return JSON.stringify(this.packetQueue[0] || "{}");
  }

  RAWdeleteFirstPacket() {
    this.packetQueue.shift();
  }

  RAWdeleteAllPackets() {
    this.packetQueue = [];
  }

  onJoinUser() {
    return this.lastJoined;
  }

  onLeaveUser() {
    return this.lastLeft;
  }

  setSyncedVariable(key: string, value: string, user: string) {
    if (!this.is_connected) throw RoturErrors.err_notConnected;
    if (!this.authenticated) throw RoturErrors.err_notLoggedIn;

    this.ws?.send(
      JSON.stringify({
        cmd: "pmsg",
        val: {
          client: this.my_client,
          source_command: "sync_set",
          payload: {
            key,
            value,
          },
        },
        id: user,
      })
    );

    if (!this.syncedVariables[user]) this.syncedVariables[user] = {};

    this.syncedVariables[user][key] = value;
  }

  getSyncedVariable(key: string, user: string) {
    if (!this.is_connected) throw RoturErrors.err_notConnected;
    if (!this.authenticated) throw RoturErrors.err_notLoggedIn;

    return JSON.stringify(this.syncedVariables[user][key] || "");
  }

  deleteSyncedVariable(key: string, user: string) {
    if (!this.is_connected) throw RoturErrors.err_notConnected;
    if (!this.authenticated) throw RoturErrors.err_notLoggedIn;

    this.ws?.send(
      JSON.stringify({
        cmd: "pmsg",
        val: {
          source_command: "sync_delete",
          client: this.my_client,
          payload: {
            key,
          },
        },
        id: user,
      })
    );

    delete this.syncedVariables[user][key];
  }

  getSyncedVariables(user: string) {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    return JSON.stringify(this.syncedVariables[user] || {});
  }

  sendMail(to: string, subject: string, message: string) {
    if (!this.is_connected) throw RoturErrors.err_notConnected;
    if (!this.authenticated) throw RoturErrors.err_notLoggedIn;

    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "omail_send",
          client: this.my_client,
          id: this.userToken,
          payload: {
            title: subject,
            body: message,
            recipient: to,
          },
        },
        id: this.accounts,
      });

      const handleSendMailResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;

        if (!packet) return;
        if (packet.origin?.username !== this.accounts) return;
        if (packet.val.source_command !== "omail_send") return;
        if (packet.val.payload !== "Successfully Sent Omail") {
          reject(RoturErrors.err_mailSendFailed);

          return;
        }

        resolve(RoturErrors.ok_mailSent);

        this.ws?.removeEventListener("message", handleSendMailResponse);
      };

      this.ws?.addEventListener("message", handleSendMailResponse);
    });
  }

  getAllMail() {
    if (!this.is_connected) throw RoturErrors.err_notConnected;
    if (!this.authenticated) throw RoturErrors.err_notLoggedIn;

    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "omail_getinfo",
          client: this.my_client,
          id: this.userToken,
        },
        id: this.accounts,
      });

      const handleGetAllMailResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;

        if (!packet) return;
        if (packet.origin?.username !== this.accounts) return;
        if (packet.val.source_command !== "omail_getinfo") {
          reject(RoturErrors.err_mailGetAllFailed);

          return;
        }

        resolve(JSON.stringify(packet.val.payload));

        this.ws?.removeEventListener("message", handleGetAllMailResponse);
      };

      this.ws?.addEventListener("message", handleGetAllMailResponse);
    });
  }

  getMail(id: string) {
    if (!this.is_connected) throw RoturErrors.err_notConnected;
    if (!this.authenticated) throw RoturErrors.err_notLoggedIn;

    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "omail_getid",
          client: this.my_client,
          payload: id,
          id: this.userToken,
        },
        id: this.accounts,
      });

      const handleGetMailResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;

        if (!packet) return;
        if (packet.origin?.username !== this.accounts) return;
        if (packet.val?.source_command !== "omail_getid") return;

        if (packet.val?.payload[0] === id) {
          resolve(JSON.stringify(packet.val?.payload[1]));
        } else {
          reject(RoturErrors.err_mailGetFailed);
        }

        this.ws?.removeEventListener("message", handleGetMailResponse);
      };

      this.ws?.addEventListener("message", handleGetMailResponse);
    });
  }

  deleteMail(id: string) {
    if (!this.is_connected) throw RoturErrors.err_notConnected;
    if (!this.authenticated) throw RoturErrors.err_notLoggedIn;

    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "omail_delete",
          client: this.my_client,
          payload: id,
          id: this.userToken,
        },
        id: this.accounts,
      });

      const handleDeleteMailResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;

        if (!packet) return;
        if (packet.origin?.username !== this.accounts) return;
        if (packet.val?.source_command !== "omail_delete") return;

        if (packet.val.payload === "Deleted Successfully") {
          resolve(RoturErrors.ok_mailDeleted);
        } else {
          reject(RoturErrors.err_mailDeleteFailed);
        }
        this.ws?.removeEventListener("message", handleDeleteMailResponse);
      };

      this.ws?.addEventListener("message", handleDeleteMailResponse);
    });
  }

  deleteAllMail() {
    if (!this.is_connected) throw RoturErrors.err_notConnected;
    if (!this.authenticated) throw RoturErrors.err_notLoggedIn;

    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "omail_delete",
          client: this.my_client,
          payload: "all",
          id: this.userToken,
        },
        id: this.accounts,
      });

      const handleDeleteAllMailResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (packet?.origin.username === this.accounts) {
          if (packet.val.source_command === "omail_delete") {
            if (packet.val.payload === "Deleted Successfully") {
              resolve(RoturErrors.ok_allMailDeleted);
            } else {
              reject(RoturErrors.err_mailDeleteAllFailed);
            }
            this.ws?.removeEventListener(
              "message",
              handleDeleteAllMailResponse
            );
          }
        }
      };

      this.ws?.addEventListener("message", handleDeleteAllMailResponse);
    });
  }

  getFriendList() {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    return JSON.stringify(this.friends.list);
  }

  sendFriendRequest(friend: string) {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    if (this.friends.list.includes(friend)) {
      throw RoturErrors.err_alreadyFriends;
    }
    if (friend === this.user.username) {
      throw RoturErrors.err_needOtherFriends;
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "friend_request",
          client: this.my_client,
          payload: friend,
          id: this.userToken,
        },
        id: this.accounts,
      });

      const handleSendFriendRequestResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "friend_request") {
            if (packet.val.payload === "Sent Successfully") {
              resolve(RoturErrors.ok_friendRequestSent);
            } else {
              reject(RoturErrors.err_friendRequestFailed);
            }
            this.ws?.removeEventListener(
              "message",
              handleSendFriendRequestResponse
            );
          }
        }
      };

      this.ws?.addEventListener("message", handleSendFriendRequestResponse);
    });
  }

  removeFriend(friend: string) {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    if (!this.friends.list.includes(friend)) {
      throw RoturErrors.err_notFriends;
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "friend_remove",
          client: this.my_client,
          payload: friend,
          id: this.userToken,
        },
        id: this.accounts,
      });

      const handleRemoveFriendResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "friend_remove") {
            if (packet.val.payload === "Friend Removed") {
              resolve(RoturErrors.ok_friendRemoved);
            } else {
              reject(RoturErrors.err_friendRemoveFailed);
            }
            this.ws?.removeEventListener("message", handleRemoveFriendResponse);
          }
        }
      };

      this.ws?.addEventListener("message", handleRemoveFriendResponse);
    });
  }

  acceptFriendRequest(friend: string) {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    if (!this.friends.requests.includes(friend)) {
      throw RoturErrors.err_noFriendRequest;
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "friend_accept",
          client: this.my_client,
          payload: friend,
          id: this.userToken,
        },
        id: this.accounts,
      });

      const handleRemoveFriendResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "friend_accept") {
            if (packet.val.payload === "Request Accepted") {
              this.friends.list.push(friend);
              this.friends.requests = this.friends.requests.filter(
                (user: string) => user != friend
              );
              resolve(RoturErrors.ok_friendRequestAccepted);
            } else {
              reject(RoturErrors.err_friendRequestApproveFailed);
            }
            this.ws?.removeEventListener("message", handleRemoveFriendResponse);
          }
        }
      };

      this.ws?.addEventListener("message", handleRemoveFriendResponse);
    });
  }

  declineFriendRequest(friend: string) {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    if (!this.friends.requests.includes(friend)) {
      throw RoturErrors.err_noFriendRequest;
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "friend_decline",
          client: this.my_client,
          payload: friend,
          id: this.userToken,
        },
        id: this.accounts,
      });

      const handleDeclineFriendRequestResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "friend_decline") {
            if (packet.val.payload === "Request Declined") {
              this.friends.requests = this.friends.requests.filter(
                (user: string) => user != friend
              );
              resolve(RoturErrors.ok_friendRequestDeclined);
            } else {
              reject(RoturErrors.err_friendRequestDeclineFailed);
            }
            this.ws?.removeEventListener(
              "message",
              handleDeclineFriendRequestResponse
            );
          }
        }
      };

      this.ws?.addEventListener("message", handleDeclineFriendRequestResponse);
    });
  }

  getFriendStatus(friend: string) {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    if (this.friends.list.includes(friend)) {
      return RoturFriendStatus.friend;
    } else if (this.friends.requests.includes(friend)) {
      return RoturFriendStatus.requested;
    } else {
      return RoturFriendStatus.notFriend;
    }
  }

  getFriendRequests() {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    return JSON.stringify(this.friends.requests) ?? "";
  }

  getFriendCount() {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    return this.friends.list.length ?? "";
  }

  getBalance() {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    return this.user["sys.currency"] ?? 0;
  }

  tranferCurrency(amount: number, user: string) {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "currency_transfer",
          client: this.my_client,
          payload: {
            amount,
            recipient: user,
          },
          id: this.userToken,
        },
        id: this.accounts,
      });

      const handleTransferCurrencyResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "currency_transfer") {
            if (packet.val.payload === "Transfer Successful") {
              resolve(RoturErrors.ok_currencyTransferSuccess);
            } else {
              reject(RoturErrors.err_currencyTransferFailed);
            }
            this.ws?.removeEventListener(
              "message",
              handleTransferCurrencyResponse
            );
          }
        }
      };
      this.ws?.addEventListener("message", handleTransferCurrencyResponse);
    });
  }

  getTransactions() {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    return JSON.stringify(this.user["sys.transactions"]);
  }

  getTransactionCount() {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    return this.user["sys.transactions"].length;
  }

  getMyOwnedItems() {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    return JSON.stringify(this.user["sys.purchases"]);
  }

  ownsItem(item: string) {
    if (!this.is_connected) {
      return false;
    }
    if (!this.authenticated) {
      return false;
    }
    return this.user["sys.purchases"].includes(item);
  }

  getMyOwnedItemCount() {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    return this.user["sys.purchases"].length;
  }

  itemData(item: string) {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    if (this.user["sys.purchases"].indexOf(item) === -1) {
      throw RoturErrors.err_itemNotOwned;
    }
    return new Promise((resolve) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "item_data",
          payload: item,
          id: this.userToken,
          client: this.my_client,
        },
        id: this.accounts,
      });

      const handleItemDataResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_data") {
            resolve(packet.val.payload);
            this.ws?.removeEventListener("message", handleItemDataResponse);
          }
        }
      };
      this.ws?.addEventListener("message", handleItemDataResponse);
    });
  }

  purchaseItem(item: string) {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    if (this.user["sys.purchases"].indexOf(item) !== -1) {
      throw RoturErrors.err_itemAlreadyOwned;
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "item_purchase",
          payload: item,
          id: this.userToken,
          client: this.my_client,
        },
        id: this.accounts,
      });

      const handlePurchaseItemResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_purchase") {
            if (packet.val.payload === "Item Purchased") {
              resolve(RoturErrors.ok_itemPurchased);
            } else {
              reject(RoturErrors.err_itemPurchaseFailed);
            }
            this.ws?.removeEventListener("message", handlePurchaseItemResponse);
          }
        }
      };
      this.ws?.addEventListener("message", handlePurchaseItemResponse);
    });
  }

  itemInfo(item: string) {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    if (this.user["sys.purchases"].indexOf(item) === -1) {
      throw RoturErrors.err_itemNotOwned;
    }
    return new Promise((resolve) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "item_info",
          payload: item,
          id: this.userToken,
          client: this.my_client,
        },
        id: this.accounts,
      });

      const handleItemInfoResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_info") {
            resolve(
              typeof packet.val.payload === "object"
                ? JSON.stringify(packet.val.payload)
                : packet.val.payload
            );
            this.ws?.removeEventListener("message", handleItemInfoResponse);
          }
        }
      };
      this.ws?.addEventListener("message", handleItemInfoResponse);
    });
  }

  getPublicItems(page: number) {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }

    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "item_public",
          payload: page,
          id: this.userToken,
          client: this.my_client,
        },
        id: this.accounts,
      });

      const handlePublicItemsResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_public") {
            resolve(JSON.stringify(packet.val.payload));
            this.ws?.removeEventListener("message", handlePublicItemsResponse);
          }
        }
      };
      this.ws?.addEventListener("message", handlePublicItemsResponse);
    });
  }

  getPublicItemPages() {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    return new Promise((resolve) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "item_public_pages",
          id: this.userToken,
          client: this.my_client,
        },
        id: this.accounts,
      });

      const handlePublicItemPagesResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_public_pages") {
            resolve(packet.val.payload);
            this.ws?.removeEventListener(
              "message",
              handlePublicItemPagesResponse
            );
          }
        }
      };
      this.ws?.addEventListener("message", handlePublicItemPagesResponse);
    });
  }

  getMyCreatedItems() {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    return JSON.stringify(this.user["sys.items"]);
  }

  createItem(
    name: string,
    description: string,
    price: number,
    data: string,
    tradable: boolean
  ) {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "item_create",
          payload: {
            name,
            description,
            price,
            data,
            tradable,
          },
          id: this.userToken,
          client: this.my_client,
        },
        id: this.accounts,
      });

      const handleCreateItemResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_create") {
            if (packet.val.payload === "Item Created") {
              resolve(RoturErrors.ok_itemCreated);
            } else {
              reject(RoturErrors.err_itemCreateFailed);
            }
            this.ws?.removeEventListener("message", handleCreateItemResponse);
          }
        }
      };

      this.ws?.addEventListener("message", handleCreateItemResponse);
    });
  }

  updateItem(item: string, key: string, data: string) {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    if (this.user["sys.items"].indexOf(item) === -1) {
      throw RoturErrors.err_itemNotOwned;
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "item_update",
          payload: {
            item,
            key,
            data,
          },
          id: this.userToken,
          client: this.my_client,
        },
        id: this.accounts,
      });

      const handleUpdateItemResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_update") {
            if (packet.val.payload === "Item Updated") {
              resolve(RoturErrors.ok_itemUpdated);
            } else {
              reject(RoturErrors.err_itemUpdateFailed);
            }
            this.ws?.removeEventListener("message", handleUpdateItemResponse);
          }
        }
      };

      this.ws?.addEventListener("message", handleUpdateItemResponse);
    });
  }

  deleteItem(item: string) {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    if (this.user["sys.items"].indexOf(item) === -1) {
      throw RoturErrors.err_itemNotOwned;
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "item_delete",
          payload: item,
          id: this.userToken,
          client: this.my_client,
        },
        id: this.accounts,
      });

      const handleDeleteItemResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_delete") {
            if (packet.val.payload === "Item Deleted") {
              resolve(RoturErrors.ok_itemDeleted);
            } else {
              reject(RoturErrors.err_itemDeleteFailed);
            }
            this.ws?.removeEventListener("message", handleDeleteItemResponse);
          }
        }
      };

      this.ws?.addEventListener("message", handleDeleteItemResponse);
    });
  }

  hideItem(id: string) {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "item_hide",
          payload: id,
          id: this.userToken,
          client: this.my_client,
        },
        id: this.accounts,
      });

      const handleHideItemResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_hide") {
            if (packet.val.payload === "Item Hidden") {
              resolve(RoturErrors.ok_itemHidden);
            } else {
              reject(RoturErrors.err_itemHideFailed);
            }
            this.ws?.removeEventListener("message", handleHideItemResponse);
          }
        }
      };

      this.ws?.addEventListener("message", handleHideItemResponse);
    });
  }

  showItem(id: string) {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "item_show",
          payload: id,
          id: this.userToken,
          client: this.my_client,
        },
        id: this.accounts,
      });

      const handleShowItemResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_show") {
            if (packet.val.payload === "Item Shown") {
              resolve(RoturErrors.ok_itemShown);
            } else {
              reject(RoturErrors.err_itemShowFailed);
            }
            this.ws?.removeEventListener("message", handleShowItemResponse);
          }
        }
      };

      this.ws?.addEventListener("message", handleShowItemResponse);
    });
  }

  gotBadgesSuccessfully() {
    return JSON.stringify(this.badges) !== "[]";
  }

  userBadges() {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    return JSON.stringify(this.user["sys.badges"]);
  }

  userBadgeCount() {
    if (!this.is_connected) {
      throw RoturErrors.err_notConnected;
    }
    if (!this.authenticated) {
      throw RoturErrors.err_notLoggedIn;
    }
    return this.user["sys.badges"].length;
  }

  hasBadge(badge: string) {
    if (!this.is_connected) {
      return false;
    }
    if (!this.authenticated) {
      return false;
    }
    return this.user["sys.badges"].includes(badge);
  }

  allBadges() {
    return JSON.stringify(Object.keys(this.badges));
  }

  badgeInfo(badge: string) {
    return JSON.stringify((this.badges as any)?.[badge] ?? {});
  }

  redownloadBadges() {
    this._initializeBadges();
  }

  async loginFromToken(token: string) {
    this.Log(`loginFromToken: ${token.length} bytes`);

    if (!this.is_connected) {
      this.Log(
        `Authentication impossible: not connected. Is Rotur down?`,
        LogLevel.error
      );

      throw RoturErrors.err_notConnected;
    }

    this.socketSend({
      cmd: "pmsg",
      val: {
        id: token,
        client: { system: "arcOS", version: "7" },
        command: "myself",
      },
      id: "sys-rotur",
    });
    this.userToken = token;
    this.authenticated = true;
  }
}

function randomString(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result ?? "";
}
