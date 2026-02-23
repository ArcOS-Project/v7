import type { PublicUserInfo } from "./user";

export interface ArcPackage {
  _id?: string;
  name: string;
  author: string;
  version: string;
  description: string;
  installLocation:
    | `U:/Applications/${string}` // type === "app"
    | `U:/System/Libraries/${string}`; // type === "library"
  appId: string;
  store?: {
    image?: string;
    screenshots?: string[];
    banner?: string;
    category?: string;
  };
  dependencies?: string[];
  type: "app" | "library";
}

export interface StoreItem {
  name: string;
  userId: string;
  user?: PublicUserInfo;
  pkg: ArcPackage;
  _id: string;
  official: boolean;
  installCount: number;
  lastUpdated: number;
  blocked: boolean;
  size: number;
  createdAt: string;
  updatedAt: string;
  deprecated: boolean;
  description: string;
  verifiedBy?: string;
  verifiedVer?: string;
  verifiedNote?: string;
  verificationAgent?: PublicUserInfo;
}

export interface PartialStoreItem {
  _id: string;
  name: string;
  userId: string;
  user?: PublicUserInfo;
  pkg: ArcPackage;
  official: boolean;
  installCount: number;
  lastUpdated: number;
  store?: {
    image?: string;
    screenshots?: string[];
    banner?: string;
    category?: string;
  };
  description: string;
  blocked: boolean;
  size: number;
  createdAt: string;
  updatedAt: string;
  deprecated: boolean;
  verifiedBy?: string;
  verifiedVer?: string;
  verifiedNote?: string;
  verificationAgent?: PublicUserInfo;
}

export type InstallStatusType = "mkdir" | "file" | "registration" | "other";
export type InstallStatusMode = "done" | "failed" | "working";

export interface InstallStatusItem {
  type: InstallStatusType;
  status: InstallStatusMode;
  content: string;
}

export type InstallStatus = Record<string, InstallStatusItem>;

export interface UpdateInfo {
  name: string;
  oldVer: string;
  newVer: string;
  pkg: StoreItem;
}
