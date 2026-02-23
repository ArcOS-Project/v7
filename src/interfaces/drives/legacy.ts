import type { IFilesystemDrive } from "$interfaces/fs";
import type { FSQuota, UserDirectory } from "$types/legacy";

export interface ILegacyServerDrive extends IFilesystemDrive {
  TEST_MODES: [boolean, number][];
  DEFAULT_DIRECTORY: UserDirectory;
  DEFAULT_QUOTA: FSQuota;
  legacy_readDir(path: string): Promise<UserDirectory>;
  legacy_readFile(path: string): Promise<ArrayBuffer | undefined>;
  legacy_testConnection(server: string, authCode?: string): Promise<false | { proto: string; port: number; url: string }>;
  legacy_generateToken(username: string, password: string): Promise<boolean>;
  legacy_quota(): Promise<FSQuota>;
}
