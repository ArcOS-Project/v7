export interface RoturPacket<T = any> {
  cmd?: string;
  val: T;
  mode: string;
  origin: any;
  client: string;
  source: string;
  timestamp: string | number;
  listener: string;
  payload: {
    key: string;
    value: any;
  };
  rooms?: string[];
  source_command: string;
}

export enum RoturErrors {
  err_notConnected = 0,
  err_alreadyLoggedIn = 1,
  err_notLoggedIn = 2,
  err_keyTooLong = 3,
  err_storageIdNotSet = 4,
  err_storageIdSetFailed = 40,
  err_invalidDesignation = 5,
  err_alreadyFriends = 6,
  err_needOtherFriends = 7,
  err_notFriends = 8,
  err_noFriendRequest = 9,
  err_friendRequestFailed = 45,
  err_friendRequestApproveFailed = 46,
  err_friendRequestDeclineFailed = 47,
  err_itemNotOwned = 10,
  err_itemAlreadyOwned = 11,
  err_loginFailed = 29,
  err_accountDeleteFailed = 32,
  err_registerFailed = 34,
  err_mailGetFailed = 36,
  err_mailDeleteFailed = 37,
  err_mailDeleteAllFailed = 44,
  err_friendRemoveFailed = 38,
  err_mailGetAllFailed = 39,
  err_keySetFailed = 41,
  err_keyDeleteFailed = 42,
  err_mailSendFailed = 43,
  err_currencyTransferFailed = 48,
  err_itemPurchaseFailed = 49,
  err_itemCreateFailed = 50,
  err_itemUpdateFailed = 51,
  err_itemDeleteFailed = 52,
  err_itemHideFailed = 53,
  err_itemShowFailed = 54,
  ok_allMailDeleted = 12,
  ok_itemPurchased = 13,
  ok_itemCreated = 14,
  ok_itemUpdated = 15,
  ok_itemDeleted = 16,
  ok_itemHidden = 17,
  ok_itemShown = 18,
  ok_keySet = 19,
  ok_keyDeleted = 20,
  ok_friendRequestSent = 21,
  ok_friendRemoved = 22,
  ok_mailDeleted = 23,
  ok_mailSent = 35,
  ok_friendRequestAccepted = 24,
  ok_friendRequestDeclined = 25,
  ok_currencyTransferSuccess = 26,
  ok_loggedIn = 30,
  ok_accountDeleted = 31,
  ok_registered = 33,
  /** fallbacks */
  ok_genericSucess = 27,
  err_genericFailure = 28,
}

export enum RoturFriendStatus {
  friend = 0,
  requested = 1,
  notFriend = 2,
}

export interface RoturUser {
  created: number;
  discord_id?: string;
  hostOS: string;
  last_login: number;
  max_size: number;
  onboot: string[];
  origin_dock: string[];
  pfp: string;
  private: boolean;
  "sys.backups": string[];
  "sys.badges": string[];
  "sys.currency": number;
  "sys.friends": string[];
  "sys.items": string[];
  "sys.purchases": string[];
  "sys.requests": string[];
  "sys.total_logins": number;
  "sys.transactions": string[];
  "sys.used_systems": string;
  system: string;
  theme: Record<string, string>;
  timezone: string;
  username: string;
  wallpaper: string;
  wallpaper_mode: string;
  [key: string]: any;
}
