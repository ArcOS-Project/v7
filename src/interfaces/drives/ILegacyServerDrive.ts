import type { IFilesystemDrive } from "$interfaces/IFilesystemDrive";
import type { LegacyFilesystemQuota, LegacyUserDirectory } from "$types/external/legacy";

// !tpa
export interface ILegacyServerDrive extends IFilesystemDrive {
  TEST_MODES: [boolean, number][];
  DEFAULT_DIRECTORY: LegacyUserDirectory;
  DEFAULT_QUOTA: LegacyFilesystemQuota;
  legacy_readDir(path: string): Promise<LegacyUserDirectory>;
  legacy_readFile(path: string): Promise<ArrayBuffer | undefined>;
  legacy_testConnection(server: string, authCode?: string): Promise<false | { proto: string; port: number; url: string }>;
  legacy_generateToken(username: string, password: string): Promise<boolean>;
  legacy_quota(): Promise<LegacyFilesystemQuota>;
}
// !end-tpa
