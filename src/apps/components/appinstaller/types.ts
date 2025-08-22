export type InstallStatusType = "mkdir" | "file" | "registration" | "other";
export type InstallStatusMode = "done" | "failed" | "working";

export interface InstallStatusItem {
  type: InstallStatusType;
  status: InstallStatusMode;
  content: string;
}

export type InstallStatus = Record<string, InstallStatusItem>;
