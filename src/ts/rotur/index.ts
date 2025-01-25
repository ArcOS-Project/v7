import { GlobalDispatcher } from "$ts/dispatch";
import { validateObject, type ValidationObject } from "$ts/json";
import type { WaveKernel } from "$ts/kernel";
import { KernelModule } from "$ts/kernel/module";
import { Sleep } from "$ts/sleep";
import { LogLevel } from "$types/logging";
import type {
  GetOrDeleteSyncedVariableArguments,
  RoturConnectionArguments,
  RoturLoginArguments,
  RoturPacket,
  SendMailArguments,
  SendMessageArguments,
  SetSyncedVariableArguments,
  TargetAggregationArguments,
  UserConnectedArguments,
  UserDesignationArguments,
  UsernameConectedArguments,
} from "$types/rotur";
import axios from "axios";
import md5 from "md5";

export class RoturExtension extends KernelModule {
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
  dispatch: GlobalDispatcher;

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

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);

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

    this.dispatch = this.kernel.getModule<GlobalDispatcher>("dispatch");
  }

  async _init() {
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

  async connectToServer(args: RoturConnectionArguments) {
    this.Log("Connecting to server");

    if (!this.server || !this.accounts) {
      this.Log("Waiting for server and accounts...");

      await Sleep(1000);

      await this.connectToServer(args);

      return true;
    }

    if (this.ws) {
      this.ws?.close();
    }

    this.designation = args.DESIGNATION;
    this.username = randomString(32);
    this.my_client = {
      system: args.SYSTEM,
      version: args.VERSION,
    };

    this.connectToWebsocket();
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
    this.client.username = packet.val.username;
  }

  ulistPacket(packet: RoturPacket) {
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
    let username = this.designation + "-" + this.username;
    let msg = {
      cmd: "setid",
      val: username,
      listener: "set_username_cfg",
    };

    this.ws?.send(JSON.stringify(msg));
  }

  setUsernameCfgPacket(packet: RoturPacket) {
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
    this.client.room = packet.val;
    this.is_connected = true;
    this.Log("Connected!");
    this.dispatch.dispatch("rotur-connected");
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
      this.dispatch.dispatch("rotur-error", [e]);

      return;
    }

    if (!this.ws) return;

    this.ws.onopen = () => {
      this.sendHandshake();

      if (!this.ws) return;

      this.ws.onerror = () => {
        this.dispatch.dispatch("rotur-error");
      };

      this.ws.onmessage = async (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;

        const commandHandler = this.packetCommandHandlers[packet.cmd || ""];
        const listenerHandler =
          this.packetListenerHandlers[packet.listener || ""];

        if (commandHandler) {
          this.Log(
            `Executing command handler for command ${
              packet.cmd || "<NONE>"
            }, listener: ${packet.listener || "<NONE>"}`
          );

          await commandHandler(packet);
        }

        if (listenerHandler) {
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
        this.dispatch.dispatch("rotur-error");

        resolve(false);
      }, 3000);

      this.dispatch.subscribe("rotur-connected", () => {
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

  async login(args: RoturLoginArguments) {
    if (!this.is_connected) return "Not Connected";
    if (this.authenticated) return "Already Logged In";

    return new Promise((resolve, reject) => {
      this.socketSendWithAck(
        {
          cmd: "pmsg",
          val: {
            ip: this.client.ip,
            client: this.my_client,
            command: "login",
            id: this.userToken,
            payload: [args.USERNAME, md5("" + args.PASSWORD)],
          },
          id: this.accounts,
        },
        {
          origin: { username: this.accounts },
          val: { source_command: "login" },
        },
        async (packet: RoturPacket) => {
          if (typeof packet.val?.payload === "object") {
            reject(`Failed to log in as ${args.USERNAME}`);

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
          this.username = args.USERNAME + "§" + randomString(10);
          this.connectToWebsocket();

          while (!this.is_connected) {
            await Sleep(0); // Mist, let's not lock up the webpage while doin' this, mkay?
          }

          this.authenticated = true;
          resolve(`Logged in as ${args.USERNAME}`);
        }
      );
    });
  }

  register(args: RoturLoginArguments) {
    if (!this.is_connected) return "Not Connected";
    if (this.authenticated) return "Already Logged In";

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
              username: args.USERNAME,
              password: md5("" + args.PASSWORD),
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
            reject(
              `Faield to register as ${args.USERNAME}: ${packet.val.payload}`
            );
            return;
          }

          resolve(`Registered as ${args.USERNAME}`);
        }
      );
    });
  }

  deleteAccount() {
    if (!this.is_connected) return "Not Connected";
    if (!this.authenticated) return "Not Logged In";

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
            reject("Failed to delete account: " + packet.val.payload);

            return;
          }

          resolve(`Account Deleted Successfully`);
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

  getkey(args: Record<string, any>) {
    if (!this.is_connected) return "Not Connected";
    if (!this.authenticated) return "Not Logged In";

    if (args.KEY in this.user) {
      const keyData = this.user[args.KEY];

      if (typeof keyData === "object") {
        return JSON.stringify(keyData);
      } else {
        return keyData;
      }
    } else {
      return "";
    }
  }

  setkey(args: Record<string, any>) {
    if (args.VALUE.length > 1000)
      return "Key Too Long, Limit is 1000 Characters";
    if (!this.is_connected) return "Not Connected";
    if (!this.authenticated) return "Not Logged In";

    return new Promise((resolve) => {
      this.socketSendWithAck(
        {
          cmd: "pmsg",
          val: {
            command: "update",
            client: this.my_client,
            id: this.userToken,
            payload: [args.KEY, args.VALUE],
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

  keyExists(args: Record<string, any>) {
    if (!this.isAuthenticated()) return false;

    return args.KEY in this.user;
  }

  getkeys() {
    if (!this.is_connected) return "Not Connected";
    if (!this.authenticated) return "Not Logged In";

    return JSON.stringify(Object.keys(this.user));
  }

  getvalues() {
    if (!this.is_connected) return "Not Connected";
    if (!this.authenticated) return "Not Logged In";

    return JSON.stringify(Object.values(this.user));
  }

  getAccount() {
    if (!this.is_connected) return "Not Connected";
    if (!this.authenticated) return "Not Logged In";

    return JSON.stringify(this.user);
  }

  setStorageID(args: Record<string, any>) {
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
            payload: args.ID,
          },
          id: this.accounts,
        },
        {
          origin: { username: this.accounts },
          val: { source_command: "storage_getid" },
        },
        (packet) => {
          if (packet.val.payload === "Not Logged In") {
            console.error("Failed to set storage id: " + packet.val.payload);
            reject(packet.val.payload);

            return;
          }

          resolve("" + args.ID);
          this.storage_id = "" + args.ID;
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

  getStorageKey(args: Record<string, any>) {
    if (!this.isAuthenticated()) return "Not Logged In";

    return this.storage_id
      ? this.localKeys[args.KEY] ?? ""
      : "Storage Id Not Set";
  }

  setStorageKey(args: Record<string, any>) {
    if (args.VALUE.length > 1000)
      return "Key Too Long, Limit is 1000 Characters";

    if (!this.isAuthenticated()) return "Not Logged In";
    if (!this.storage_id) return "Storage Id Not Set";

    this.localKeys[args.KEY] = args.VALUE;

    return new Promise((resolve, reject) => {
      this.socketSendWithAck(
        {
          cmd: "pmsg",
          val: {
            command: "storage_set",
            id: this.userToken,
            client: this.my_client,
            payload: {
              key: args.KEY,
              value: args.VALUE,
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
            reject(packet.val.payload);
            return;
          }

          resolve("Key Set");
        }
      );
    });
  }

  existsStorageKey(args: Record<string, any>) {
    if (!this.isAuthenticated()) return false;

    return this.storage_id ? args.KEY in this.localKeys : false;
  }

  deleteStorageKey(args: Record<string, any>) {
    if (!this.isAuthenticated()) {
      this.Log("Not Logged In", LogLevel.error);

      return;
    }

    if (!this.storage_id) {
      this.Log("Storage Id Not Set", LogLevel.error);

      return;
    }

    delete this.localKeys[args.KEY];

    return new Promise((resolve, reject) => {
      this.socketSendWithAck(
        {
          cmd: "pmsg",
          val: {
            command: "storage_delete",
            id: this.userToken,
            client: this.my_client,
            payload: {
              key: args.KEY,
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
            reject(packet.val.payload);

            return;
          }

          resolve("Key Deleted");
        }
      );
    });
  }

  // TODO: CONTINUE REFACTORING FROM HERE
  // I'M GOING TO BED.

  getStorageKeys() {
    if (!this.isAuthenticated()) return "Not Logged In";

    if (!this.storage_id) return "Storage Id Not Set";

    JSON.stringify(Object.keys(this.localKeys));
  }

  getStorageValues() {
    if (!this.isAuthenticated()) return "Not Logged In";

    if (!this.storage_id) return "Storage Id Not Set";

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
    if (!this.isAuthenticated()) return "Not Logged In";

    if (!this.storage_id) return "Storage Id Not Set";

    return JSON.stringify(JSON.stringify(this.localKeys).length);
  }

  storageLimit() {
    return "50000";
  }

  storageRemaining() {
    if (!this.isAuthenticated()) return "Not Logged In";
    if (!this.storage_id) return "Storage Id Not Set";

    return 50000 - JSON.stringify(this.localKeys).length + "";
  }

  // TODO: REFACTOR FASE 2: CONTINUE FROM HERE

  accountStorageUsage() {
    if (!this.isAuthenticated()) return "Not Logged In";

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
          reject("Not Logged In");
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
    if (!this.isAuthenticated()) return "Not Logged In";

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
          reject("Not Logged In");

          return;
        }

        resolve(1000000 - Number(packet.val.payload));

        this.ws?.removeEventListener("message", handleStorageKey);
      };
      this.ws?.addEventListener("message", handleStorageKey);
    });
  }

  sendMessage(args: SendMessageArguments) {
    if (!this.is_connected) {
      this.Log("Can't send a message if not connected", LogLevel.error);

      return "";
    }

    this.socketSend({
      cmd: "pmsg",
      val: {
        client: this.my_client,
        payload: args.PAYLOAD,
        source: args.SOURCE,
        target: args.TARGET,
        timestamp: Date.now(),
      },
      id: args.USER,
    });
  }

  whenMessageReceived() {
    return true;
  }

  getPacketsFromTarget(args: TargetAggregationArguments) {
    return JSON.stringify(this.packets[args.TARGET] || "[]");
  }

  numberOfPacketsOnTarget(args: TargetAggregationArguments) {
    return this.packets[args.TARGET] ? this.packets[args.TARGET].length : 0;
  }

  getFirstPacketOnTarget(args: TargetAggregationArguments) {
    return JSON.stringify(this.packets[args.TARGET]?.[0] || "{}");
  }

  dataOfFirstPacketOnTarget(args: TargetAggregationArguments) {
    switch (args.DATA) {
      case "origin":
        return this.packets[args.TARGET]?.[0]?.origin || "";
      case "client":
        return (
          this.packets[args.TARGET]?.[0]?.client ||
          '{"system":"Unknown", "version":"Unknown"}'
        );
      case "source port":
        return this.packets[args.TARGET]?.[0]?.source || "Unknown";
      case "payload":
        return this.packets[args.TARGET]?.[0]?.payload || "";
      case "timestamp":
        return this.packets[args.TARGET]?.[0]?.timestamp || "0";
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

  deleteFirstPacketOnTarget(args: Record<string, any>) {
    if (!this.packets[args.TARGET]) return "{}";

    const packet = this.packets[args.TARGET]?.[0];
    this.packets[args.TARGET].shift();

    return JSON.stringify(packet);
  }

  deletePacketsOnTarget(args: Record<string, any>) {
    delete this.packets[args.TARGET];
  }

  deleteAllPackets() {
    this.packets = {};
  }

  clientIP() {
    return this.is_connected ? this.client.ip : "Not Connected";
  }

  clientUsername() {
    return this.is_connected ? this.client.username : "Not Connected";
  }

  clientUsers() {
    if (!this.is_connected) return "Not Connected";

    return JSON.stringify(this.client.users);
  }

  getUserDesignation(args: UserDesignationArguments) {
    if (!this.is_connected) return "Not Connected";

    return JSON.stringify(
      this.client.users?.filter((user) =>
        user.startsWith(args.DESIGNATION + "-")
      )
    );
  }

  usernameConnected(args: UsernameConectedArguments) {
    if (!this.isAuthenticated()) return false;

    const regexp = new RegExp(
      `(?<=")[a-zA-Z]{3}-${args.USER}§\\S{10}(?=")`,
      "gi"
    );

    return JSON.stringify(this.client.users).match(regexp) !== null;
  }

  userConnected(args: UserConnectedArguments) {
    if (!this.is_connected) return "Not Connected";
    if (args.DESIGNATION.length !== 3) return "Invalid Designation";

    const regexp = new RegExp(
      `(?<=")${args.DESIGNATION}-${args.USER}§\\S{10}(?=")`,
      "gi"
    );

    return JSON.stringify(this.client.users).match(regexp) !== null;
  }

  findID(args: UsernameConectedArguments) {
    if (!this.is_connected) return "Not Connected";

    const regexp = new RegExp(`[a-zA-Z]{3}-${args.USER}§\\S{10}`, "gi");

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

  setSyncedVariable(args: SetSyncedVariableArguments) {
    if (!this.is_connected) return "Not Connected";
    if (!this.authenticated) return "Not Logged In";

    this.ws?.send(
      JSON.stringify({
        cmd: "pmsg",
        val: {
          client: this.my_client,
          source_command: "sync_set",
          payload: {
            key: args.KEY,
            value: args.VALUE,
          },
        },
        id: args.USER,
      })
    );

    if (!this.syncedVariables[args.USER]) this.syncedVariables[args.USER] = {};

    this.syncedVariables[args.USER][args.KEY] = args.VALUE;
  }

  getSyncedVariable(args: GetOrDeleteSyncedVariableArguments) {
    if (!this.is_connected) return "Not Connected";
    if (!this.authenticated) return "Not Logged In";

    return JSON.stringify(this.syncedVariables[args.USER][args.KEY] || "");
  }

  deleteSyncedVariable(args: GetOrDeleteSyncedVariableArguments) {
    if (!this.is_connected) return "Not Connected";
    if (!this.authenticated) return "Not Logged In";

    this.ws?.send(
      JSON.stringify({
        cmd: "pmsg",
        val: {
          source_command: "sync_delete",
          client: this.my_client,
          payload: {
            key: args.KEY,
          },
        },
        id: args.USER,
      })
    );

    delete this.syncedVariables[args.USER][args.KEY];
  }

  getSyncedVariables(args: UsernameConectedArguments) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return JSON.stringify(this.syncedVariables[args.USER] || {});
  }

  sendMail(args: SendMailArguments) {
    if (!this.is_connected) return "Not Connected";
    if (!this.authenticated) return "Not Logged In";

    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "omail_send",
          client: this.my_client,
          id: this.userToken,
          payload: {
            title: args.SUBJECT,
            body: args.MESSAGE,
            recipient: args.TO,
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
          reject(`Failed to send mail to ${args.TO}: ${packet.val.payload}`);

          return;
        }

        resolve(`Mail sent to ${args.TO}`);

        this.ws?.removeEventListener("message", handleSendMailResponse);
      };

      this.ws?.addEventListener("message", handleSendMailResponse);
    });
  }

  getAllMail() {
    if (!this.is_connected) return "Not Connected";
    if (!this.authenticated) return "Not Logged In";

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
          reject("Failed to get all mail");

          return;
        }

        resolve(JSON.stringify(packet.val.payload));

        this.ws?.removeEventListener("message", handleGetAllMailResponse);
      };

      this.ws?.addEventListener("message", handleGetAllMailResponse);
    });
  }

  getMail(args: Record<string, any>) {
    if (!this.is_connected) return "Not Connected";
    if (!this.authenticated) return "Not Logged In";

    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "omail_getid",
          client: this.my_client,
          payload: args.ID,
          id: this.userToken,
        },
        id: this.accounts,
      });

      const handleGetMailResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;

        if (!packet) return;
        if (packet.origin?.username !== this.accounts) return;
        if (packet.val?.source_command !== "omail_getid") return;

        if (packet.val?.payload[0] === args.ID) {
          resolve(JSON.stringify(packet.val?.payload[1]));
        } else {
          reject(`Failed to get mail with ID: ${args.ID}`);
        }

        this.ws?.removeEventListener("message", handleGetMailResponse);
      };

      this.ws?.addEventListener("message", handleGetMailResponse);
    });
  }

  deleteMail(args: Record<string, any>) {
    if (!this.is_connected) return "Not Connected";
    if (!this.authenticated) return "Not Logged In";

    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "omail_delete",
          client: this.my_client,
          payload: args.ID,
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
          resolve(`Mail with ID ${args.ID} deleted`);
        } else {
          reject(
            `Failed to delete mail with ID ${args.ID}: ${packet.val.payload}`
          );
        }
        this.ws?.removeEventListener("message", handleDeleteMailResponse);
      };

      this.ws?.addEventListener("message", handleDeleteMailResponse);
    });
  }

  deleteAllMail() {
    if (!this.is_connected) return "Not Connected";
    if (!this.authenticated) return "Not Logged In";

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
              resolve("All mail deleted");
            } else {
              reject(`Failed to delete all mail: ${packet.val.payload}`);
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
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return JSON.stringify(this.friends.list);
  }

  sendFriendRequest(args: Record<string, any>) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (this.friends.list.includes(args.FRIEND)) {
      return "Already Friends";
    }
    if (args.FRIEND === this.user.username) {
      return "You Need Other Friends :/";
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "friend_request",
          client: this.my_client,
          payload: args.FRIEND,
          id: this.userToken,
        },
        id: this.accounts,
      });

      const handleSendFriendRequestResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "friend_request") {
            if (packet.val.payload === "Sent Successfully") {
              resolve(`Sent Successfully`);
            } else {
              reject(packet.val.payload);
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

  removeFriend(args: Record<string, any>) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (!this.friends.list.includes(args.FRIEND)) {
      return "Not Friends";
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "friend_remove",
          client: this.my_client,
          payload: args.FRIEND,
          id: this.userToken,
        },
        id: this.accounts,
      });

      const handleRemoveFriendResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "friend_remove") {
            if (packet.val.payload === "Friend Removed") {
              resolve(`Friend removed: ${args.FRIEND}`);
            } else {
              reject(`Failed to remove friend: ${packet.val.payload}`);
            }
            this.ws?.removeEventListener("message", handleRemoveFriendResponse);
          }
        }
      };

      this.ws?.addEventListener("message", handleRemoveFriendResponse);
    });
  }

  acceptFriendRequest(args: Record<string, any>) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (!this.friends.requests.includes(args.FRIEND)) {
      return "No Request";
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "friend_accept",
          client: this.my_client,
          payload: args.FRIEND,
          id: this.userToken,
        },
        id: this.accounts,
      });

      const handleRemoveFriendResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "friend_accept") {
            if (packet.val.payload === "Request Accepted") {
              this.friends.list.push(args.FRIEND);
              this.friends.requests = this.friends.requests.filter(
                (user: string) => user != args.FRIEND
              );
              resolve(`Request Accepted`);
            } else {
              reject(packet.val.payload);
            }
            this.ws?.removeEventListener("message", handleRemoveFriendResponse);
          }
        }
      };

      this.ws?.addEventListener("message", handleRemoveFriendResponse);
    });
  }

  declineFriendRequest(args: Record<string, any>) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (!this.friends.requests.includes(args.FRIEND)) {
      return "No Request";
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "friend_decline",
          client: this.my_client,
          payload: args.FRIEND,
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
                (user: string) => user != args.FRIEND
              );
              resolve(`Request Declined`);
            } else {
              reject(packet.val.payload);
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

  getFriendStatus(args: Record<string, any>) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (this.friends.list.includes(args.FRIEND)) {
      return "Friend";
    } else if (this.friends.requests.includes(args.FRIEND)) {
      return "Requested";
    } else {
      return "Not Friend";
    }
  }

  getFriendRequests() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return JSON.stringify(this.friends.requests) ?? "";
  }

  getFriendCount() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return this.friends.list.length ?? "";
  }

  getBalance() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return this.user["sys.currency"] ?? 0;
  }

  tranferCurrency(args: Record<string, any>) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "currency_transfer",
          client: this.my_client,
          payload: {
            amount: args.AMOUNT,
            recipient: args.USER,
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
              resolve(`Success`);
            } else {
              reject(packet.val.payload);
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
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return JSON.stringify(this.user["sys.transactions"]);
  }

  getTransactionCount() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return this.user["sys.transactions"].length;
  }

  getMyOwnedItems() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return JSON.stringify(this.user["sys.purchases"]);
  }

  ownsItem(args: Record<string, any>) {
    if (!this.is_connected) {
      return false;
    }
    if (!this.authenticated) {
      return false;
    }
    return this.user["sys.purchases"].includes(args.ITEM);
  }

  getMyOwnedItemCount() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return this.user["sys.purchases"].length;
  }

  itemData(args: Record<string, any>) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (this.user["sys.purchases"].indexOf(args.ITEM) === -1) {
      return "You Do Not Own This Item";
    }
    return new Promise((resolve) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "item_data",
          payload: args.ITEM,
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

  purchaseItem(args: Record<string, any>) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (this.user["sys.purchases"].indexOf(args.ITEM) !== -1) {
      return "You Already Own This Item";
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "item_purchase",
          payload: args.ITEM,
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
              resolve("Item Purchased");
            } else {
              reject(packet.val.payload);
            }
            this.ws?.removeEventListener("message", handlePurchaseItemResponse);
          }
        }
      };
      this.ws?.addEventListener("message", handlePurchaseItemResponse);
    });
  }

  itemInfo(args: Record<string, any>) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (this.user["sys.purchases"].indexOf(args.ITEM) === -1) {
      return "You Do Not Own This Item";
    }
    return new Promise((resolve) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "item_info",
          payload: args.ITEM,
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

  getPublicItems(args: Record<string, any>) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }

    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "item_public",
          payload: args.PAGE,
          id: this.userToken,
          client: this.my_client,
        },
        id: this.accounts,
      });

      const handlePublicItemsResponse = (event: MessageEvent) => {
        const packet = JSON.parse(event.data) as RoturPacket;
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_public") {
            reject(JSON.stringify(packet.val.payload));
            this.ws?.removeEventListener("message", handlePublicItemsResponse);
          }
        }
      };
      this.ws?.addEventListener("message", handlePublicItemsResponse);
    });
  }

  getPublicItemPages() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
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
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return JSON.stringify(this.user["sys.items"]);
  }

  createItem(args: Record<string, any>) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "item_create",
          payload: {
            name: args.NAME,
            description: args.DESCRIPTION,
            price: args.PRICE,
            data: args.CODE,
            tradable: args.TRADABLE,
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
              resolve("Item Created");
            } else {
              reject(packet.val.payload);
            }
            this.ws?.removeEventListener("message", handleCreateItemResponse);
          }
        }
      };

      this.ws?.addEventListener("message", handleCreateItemResponse);
    });
  }

  updateItem(args: Record<string, any>) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (this.user["sys.items"].indexOf(args.ITEM) === -1) {
      return "You Do Not Own This Item";
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "item_update",
          payload: {
            item: args.ITEM,
            key: args.KEY,
            data: args.DATA,
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
              resolve("Item Updated");
            } else {
              reject(packet.val.payload);
            }
            this.ws?.removeEventListener("message", handleUpdateItemResponse);
          }
        }
      };

      this.ws?.addEventListener("message", handleUpdateItemResponse);
    });
  }

  deleteItem(args: Record<string, any>) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (this.user["sys.items"].indexOf(args.ITEM) === -1) {
      return "You Do Not Own This Item";
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "item_delete",
          payload: args.ITEM,
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
              resolve("Item Deleted");
            } else {
              reject(packet.val.payload);
            }
            this.ws?.removeEventListener("message", handleDeleteItemResponse);
          }
        }
      };

      this.ws?.addEventListener("message", handleDeleteItemResponse);
    });
  }

  hideItem(args: Record<string, any>) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "item_hide",
          payload: args.ID,
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
              resolve("Item Hidden");
            } else {
              reject(packet.val.payload);
            }
            this.ws?.removeEventListener("message", handleHideItemResponse);
          }
        }
      };

      this.ws?.addEventListener("message", handleHideItemResponse);
    });
  }

  showItem(args: Record<string, any>) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return new Promise((resolve, reject) => {
      this.socketSend({
        cmd: "pmsg",
        val: {
          command: "item_show",
          payload: args.ID,
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
              resolve("Item Shown");
            } else {
              reject(packet.val.payload);
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
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return JSON.stringify(this.user["sys.badges"]);
  }

  userBadgeCount() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return this.user["sys.badges"].length;
  }

  hasBadge(args: Record<string, any>) {
    if (!this.is_connected) {
      return false;
    }
    if (!this.authenticated) {
      return false;
    }
    return this.user["sys.badges"].includes(args.BADGE);
  }

  allBadges() {
    return JSON.stringify(Object.keys(this.badges));
  }

  badgeInfo(args: Record<string, any>) {
    return JSON.stringify(this.badges?.[args.BADGE] ?? {});
  }

  redownloadBadges() {
    this._initializeBadges();
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
