import type { FilesystemDrive } from "$ts/kernel/mods/fs/drive";
import { DriveIcon, FolderIcon } from "$ts/images/filesystem";
import { UserPaths } from "$ts/server/user/store";
import type { ContextMenuItem } from "$types/app";
import type { FileManagerRuntime } from "../runtime";

export function GoMenu(runtime: FileManagerRuntime): ContextMenuItem {
  return {
    caption: "Go",
    subItems: [...folderGoItems(runtime), { sep: true }, ...driveGoItems(runtime)],
  };
}

function folderGoItems(runtime: FileManagerRuntime) {
  const result = [];

  for (const folder of runtime.rootFolders()) {
    result.push({
      caption: folder.name,
      image: FolderIcon,
      action: () => {
        runtime.navigate(`${UserPaths.Home}/${folder.name}`);
      },
    });
  }

  return result;
}

function driveGoItems(runtime: FileManagerRuntime) {
  const result = [];
  const driveSubmenu = (drive: FilesystemDrive, id: string) => [
    {
      caption: "Go here",
      action: () => {
        runtime.navigate(`${drive.driveLetter || drive.uuid}:/`);
      },
      icon: "hard-drive",
    },
    { sep: true },
    {
      caption: "Unmount",
      action: () => {
        runtime.unmountDrive(drive, id);
      },
      disabled: () => drive.FIXED,
      icon: "x",
    },
  ];

  for (const [id, drive] of Object.entries(runtime.drives())) {
    const identifier = `${drive.data.driveLetter || drive.data.uuid}:`;

    result.push({
      caption: drive.data.driveLetter ? `${drive.data.label} (${drive.data.driveLetter}:)` : drive.data.label,
      subItems: driveSubmenu(drive.data, id),
      image: DriveIcon,
      isActive: () => runtime.path().startsWith(`${identifier}/`),
    });
  }

  return result;
}
