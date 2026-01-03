import { AppProcess } from "$ts/apps/process";
import { Fs } from "$ts/env";
import { Store } from "$ts/writable";

import type { App, AppProcessData } from "$types/app";
import type { FileEntry } from "$types/fs";

export class GalleryRuntime extends AppProcess {
    selectedFile = Store<string>("");
    currentFolder = Store("U:/Home/Pictures");
    images = Store<Array<FileEntry>>([]);
    //#region LIFECYCLE
    constructor(pid: number, parentPid: number, app: AppProcessData) {
        super(pid, parentPid, app);
    }

    async start() {
    
    }

    //#endregion

    folders:Array<string> = [
        "U:/Home/Pictures",
        "U:/Home/Documents",
    ] as const;

    async openFolder(path:string) {
        const data = await Fs.readDir(path);
        this.currentFolder.set(path);
        this.images.set(data?.files ?? [])
    }

    truncateName(path:string) {
        return path.split("/").pop();
    }

}