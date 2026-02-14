import type { IFilesystemDrive } from "$interfaces/fs";
import { HiddenUserPaths, UserPathCaptions, UserPathIcons, UserPaths } from "$ts/user/store";
import type { ContextMenuItem } from "$types/app";
import type { FileManagerRuntime } from "../runtime";

export function GoMenu(runtime: FileManagerRuntime): ContextMenuItem {
  return {
    caption: "Go",
    subItems: [
      //
      ...folderGoItems(runtime),
      { sep: true },
      userPathsGoItems(runtime),
      { sep: true },
      ...driveGoItems(runtime),
    ],
  };
}

function folderGoItems(runtime: FileManagerRuntime) {
  const result = [];

  for (const folder of runtime.rootFolders()) {
    result.push({
      caption: folder.name,
      image: "FolderIcon",
      action: () => {
        runtime.navigate(`${UserPaths.Home}/${folder.name}`);
      },
    });
  }

  return result;
}

function userPathsGoItems(runtime: FileManagerRuntime): ContextMenuItem {
  const result = [];

  for (const id in UserPaths) {
    if (HiddenUserPaths.includes(id)) continue;
    
    result.push({
      caption: UserPathCaptions[id],
      icon: UserPathIcons[id] || "folder",
      action: () => {
        runtime.navigate((UserPaths as any)[id]);
      },
    });
  }

  return {
    caption: "Locations",
    icon: "map-pin",
    subItems: result,
  };
}

function driveGoItems(runtime: FileManagerRuntime) {
  const result = [];
  const driveSubmenu = (drive: IFilesystemDrive, id: string) => [
    {
      caption: "Go here",
      action: () => {
        runtime.navigate(`${drive.driveLetter || drive.uuid}:/`);
      },
      icon: "hard-drive",
    },
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
      image: "DriveIcon",
      isActive: () => runtime.path().startsWith(`${identifier}/`),
    });
  }

  return result;
}
