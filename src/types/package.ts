export interface ArcPackage {
  name: string;
  author: string;
  version: string;
  description: string;
  installLocation: `U:/Applications/${string}`;
  appId: string;
  store?: {
    image?: string;
    screenshots?: string[];
    banner?: string;
  };
}

export interface StoreItem {
  name: string;
  userId: string;
  pkg: ArcPackage;
  _id: string;
  official: boolean;
  installCount: number;
  lastUpdated: number;
  blocked: boolean;
  size: number;
}

export interface PartialStoreItem {
  _id: string;
  name: string;
  userId: string;
  official: boolean;
  installCount: number;
  lastUpdated: number;
}

export type InstallStatusType = "mkdir" | "file" | "registration" | "other";
export type InstallStatusMode = "done" | "failed" | "working";

export interface InstallStatusItem {
  type: InstallStatusType;
  status: InstallStatusMode;
  content: string;
}

export type InstallStatus = Record<string, InstallStatusItem>;
