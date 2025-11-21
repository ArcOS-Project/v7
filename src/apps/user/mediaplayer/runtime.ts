import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { Fs, Stack } from "$ts/env";
import { Daemon } from "$ts/server/user/daemon";
import { UserPaths } from "$ts/server/user/store";
import { Sleep } from "$ts/sleep";
import { arrayToText, textToBlob } from "$ts/util/convert";
import { getItemNameFromPath, getParentDirectory, join } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { AppContextMenu, AppProcessData } from "$types/app";
import type { RenderArgs } from "$types/process";
import { MediaPlayerAccelerators } from "./accelerators";
import { MediaPlayerAltMenu } from "./altmenu";
import TrayPopup from "./MediaPlayer/TrayPopup.svelte";
import type { PlayerState } from "./types";

export class MediaPlayerRuntime extends AppProcess {
  public queue = Store<string[]>([]);
  public queueIndex = Store<number>(0);
  public url = Store<string>();
  public player: HTMLVideoElement | undefined;
  public State = Store<PlayerState>({ paused: true, current: 0, duration: 0 });
  public isVideo = Store<boolean>(false);
  public Loaded = Store<boolean>(false);
  public playlistPath = Store<string>();

  override contextMenu: AppContextMenu = {
    player: [
      {
        caption: "Enter fullscreen",
        disabled: async () => !!this.getWindow()?.classList.contains("fullscreen"),
        action: () => {
          Stack.renderer?.toggleFullscreen(this.pid);
        },
      },
      {
        caption: "Exit fullscreen",
        disabled: async () => !this.getWindow()?.classList.contains("fullscreen"),
        action: () => {
          Stack.renderer?.toggleFullscreen(this.pid);
        },
      },
    ],
  };

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, file?: string) {
    super(pid, parentPid, app);

    this.altMenu.set(MediaPlayerAltMenu(this));
    this.acceleratorStore.push(...MediaPlayerAccelerators(this));

    this.renderArgs.file = file;
    this.queueIndex.subscribe((v) => this.handleSongChange(v));

    this.State.subscribe((v) => {
      if (this.Loaded()) if (v.current >= v.duration) this.nextSong();
    });

    this.queue.subscribe((v) => {
      if (!v.length) {
        this.Stop();
        if (this.player) this.player.src = "";
        this.Loaded.set(false);
        this.isVideo.set(false);
        this.windowTitle.set(this.app.data.metadata.name);
        this.windowIcon.set(this.app.data.metadata.icon);
        this.getWindow()?.classList.remove("fullscreen");
      }
    });

    this.setSource(__SOURCE__);
  }

  async onClose() {
    this.Reset();
    this.player?.remove();
    return true;
  }

  protected async stop(): Promise<any> {
    this.Reset();
    this.player?.remove();
  }

  async render({ file }: RenderArgs) {
    if (file) {
      if (file.endsWith(".arcpl")) this.readPlaylist(file);
      else this.readFile([file]);
    }

    this.shell?.trayHost?.createTrayIcon?.(this.pid, this.app.id, {
      icon: "MediaPlayerIcon",
      popup: {
        width: 250,
        height: 160,
        component: TrayPopup as any,
      },
    });
  }

  //#endregion

  public setPlayer(player: HTMLVideoElement) {
    this.player = player;

    this.player.addEventListener("timeupdate", () => this.updateState());
    this.player.addEventListener("pause", () => this.updateState());
    this.player.addEventListener("play", () => this.updateState());
  }

  public Reset() {
    if (this._disposed) return;
    if (!this.player) return;

    this.player.src = this.url.get();
    this.player.currentTime = 0;
  }

  public async Play() {
    if (this._disposed) return;
    if (!this.player) return;

    try {
      await this.player.play();
    } catch {}
  }

  public async Pause() {
    if (this._disposed) return;
    if (!this.player) return;

    try {
      this.player.pause();
    } catch {}
  }

  public Seek(mod: number) {
    if (this._disposed) return;
    if (!this.player) return;

    this.player.currentTime += mod;
  }

  public Stop() {
    if (this._disposed) return;
    if (!this.player) return;

    try {
      this.player.pause();
      this.player.currentTime = 0;
    } catch {}
  }

  public updateState() {
    if (this._disposed) return this.player?.remove();
    if (!this.player)
      return {
        paused: true,
        current: 0,
        duration: 0,
      };

    const state = {
      paused: this.player.paused,
      current: this.player.currentTime,
      duration: this.player.duration,
    };

    this.State.set(state);
  }

  public formatTime(seconds: number) {
    if (this._disposed) return "--:--";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  }

  public openFileLocation() {
    if (this._disposed) return;
    const path = this.queue.get()[this.queueIndex()];

    if (!path) return;

    this.spawnApp("fileManager", this.parentPid, getParentDirectory(path));
  }

  public async openFile() {
    if (this._disposed) return;
    const [path] = await Daemon!.files!.LoadSaveDialog({
      title: "Select an audio or video file to open",
      icon: "MediaPlayerIcon",
      startDir: getParentDirectory(this.queue()[this.queueIndex()]) || UserPaths.Music,
      extensions: this.app.data.opens?.extensions,
    });

    if (!path) return;

    await this.readFile([path]);
  }

  async readFile(paths: string[], addToQueue = false) {
    if (this._disposed) return;
    if (addToQueue && this.queue().length) {
      this.queue.update((v) => {
        v.push(...paths);
        return v;
      });
    } else {
      const queueIndex = this.queueIndex();
      this.Loaded.set(false);
      this.queue.set(paths);
      this.queueIndex.set(0);
      if (!queueIndex) this.handleSongChange(0);
    }
  }

  nextSong() {
    if (this._disposed) return;
    let index = this.queueIndex();
    const queue = this.queue();

    if (index + 1 > queue.length - 1) {
      return;
    }
    index++;
    this.queueIndex.set(index);
  }

  async previousSong() {
    if (this._disposed) return;
    let index = this.queueIndex();

    if (this.State().current >= 2) {
      this.player!.currentTime = 0;

      return;
    }

    if (index - 1 < 0) {
      return;
    }
    index--;
    this.queueIndex.set(index);
  }

  clearQueue() {
    if (this._disposed) return;
    this.queueIndex.set(0);
    this.queue.set([]);
  }

  async handleSongChange(v: number) {
    if (this._disposed) return;
    const path = this.queue()[v];

    if (!path) return;

    this.Loaded.set(false);

    try {
      const url = await Fs.direct(path);

      if (!url) {
        MessageBox(
          {
            title: "Failed to load file",
            message:
              "ArcOS failed to open the file you requested. It might be moved or the drive doesn't support direct file access.",
            buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
            image: "MediaPlayerIcon",
            sound: "arcos.dialog.error",
          },
          this.pid,
          true
        );
        return;
      }

      const info = Daemon?.assoc?.getFileAssociation(path);

      this.isVideo.set(info?.friendlyName === "Video file");
      this.url.set(url);
      this.windowTitle.set(`${getItemNameFromPath(path)} - Media Player`);
      this.windowIcon.set(info?.icon || this.getIconCached("MediaPlayerIcon"));

      this.Reset();

      await Sleep(10);
      await this.player?.play();

      this.Loaded.set(true);
    } catch {
      this.failedToPlay();
    }
  }

  async addToQueue() {
    if (this._disposed) return;
    const paths = await Daemon!.files!.LoadSaveDialog({
      title: "Select a file to add to the queue",
      icon: "MediaPlayerIcon",
      startDir: getParentDirectory(this.queue()[this.queueIndex()]) || UserPaths.Music,
      extensions: this.app.data.opens?.extensions?.filter((e) => e !== ".arcpl"),
      multiple: true,
    });

    if (!paths[0]) return;

    await this.readFile(paths as string[], true);
  }

  moveQueueItem(sourceIndex: number, targetIndex: number) {
    if (this._disposed) return;
    const currentQueue = this.queue(); // Get the current value of the queue store
    if (!currentQueue) return;

    // Remove the item from the source index
    const [movedItem] = currentQueue.splice(sourceIndex, 1);

    // Insert the item at the target index
    currentQueue.splice(targetIndex, 0, movedItem);

    // Update the queue store
    this.queue.set(currentQueue);
  }

  async savePlaylist() {
    if (this._disposed) return;
    const playlist = btoa(JSON.stringify(this.queue(), null, 2));

    const [path] = await Daemon!.files!.LoadSaveDialog({
      title: "Save playlist",
      icon: this.app.data.metadata.icon,
      isSave: true,
      extensions: [".arcpl"],
    });

    if (!path) return;

    try {
      await Fs.writeFile(path, textToBlob(playlist, "text/plain"));
    } catch {}
  }

  async loadPlaylist() {
    if (this._disposed) return;
    const [path] = await Daemon!.files!.LoadSaveDialog({
      title: "Open playlist",
      icon: this.app.data.metadata.icon,
      extensions: [".arcpl"],
    });

    if (!path) return;

    this.readPlaylist(path);
  }

  async readPlaylist(path: string) {
    if (this._disposed) return;
    try {
      const contents = await Fs.readFile(path);
      if (!contents) throw new Error("Failed to read playlist");

      const queue = JSON.parse(atob(arrayToText(contents)));
      if (!queue || !Array.isArray(queue)) throw new Error("Playlist is not valid");

      const queueIndex = this.queueIndex();
      this.Loaded.set(false);
      this.queue.set(queue);
      this.queueIndex.set(0);
      if (!queueIndex) this.handleSongChange(0);
      this.playlistPath.set(path);
    } catch (e) {
      MessageBox(
        {
          title: "Failed to open playlist",
          message: `Media Player couldn't open the file you requested. ${e}`,
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          sound: "arcos.dialog.error",
          image: "MediaPlayerIcon",
        },
        this.pid,
        true
      );
    }
  }

  async createPlaylistShortcut() {
    if (this._disposed) return;
    const paths = await Daemon?.files?.LoadSaveDialog({
      title: "Pick where to create the shortcut",
      icon: "FolderIcon",
      folder: true,
      startDir: UserPaths.Desktop,
    });

    if (!paths?.length) return;

    const filename = getItemNameFromPath(this.playlistPath());

    Daemon?.shortcuts?.createShortcut(
      {
        type: "file",
        target: this.playlistPath(),
        icon: "PlaylistMimeIcon",
        name: `${filename} - Shortcut`,
      },
      join(paths[0]!, `${filename.toLowerCase().split(".")[0]}.arclnk`)
    );
  }

  async failedToPlay() {
    if (this._disposed) return;
    MessageBox(
      {
        title: "Failed to play",
        message: `Media Player failed to play the file you wanted to open. It might not be a (supported) audio or video file. Please try a different file.`,
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
        image: "MediaPlayerIcon",
        sound: "arcos.dialog.error",
      },
      this.pid,
      true
    );
  }
}
