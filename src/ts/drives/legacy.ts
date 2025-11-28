import { FilesystemDrive } from "./drive";

export class LegacyFilesystemDrive extends FilesystemDrive {
  constructor(uuid: string, letter?: string, ) {
    super(uuid, letter)
  }
}