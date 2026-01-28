import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { Fs, Stack } from "$ts/env";
import { tryJsonParse } from "$ts/json";
import { Daemon } from "$ts/server/user/daemon";
import { UserPaths } from "$ts/server/user/store";
import { Sleep } from "$ts/sleep";
import { arrayBufferToBlob, arrayBufferToText, textToBlob } from "$ts/util/convert";
import { getItemNameFromPath, getParentDirectory, join } from "$ts/util/fs";
import { UUID } from "$ts/uuid";
import { Store } from "$ts/writable";
import type { AppContextMenu, AppProcessData } from "$types/app";
import type { FileEntry } from "$types/fs";
import type { RenderArgs } from "$types/process";
import { parseBuffer, type IAudioMetadata } from "music-metadata";
import { MediaPlayerAccelerators } from "./accelerators";
import { MediaPlayerAltMenu } from "./altmenu";
import TrayPopup from "./MediaPlayer/TrayPopup.svelte";
import { LoopMode, type AudioFileMetadata, type MetadataConfiguration, type PlayerState } from "./types";
import { getReadableVibrantColor } from "$ts/color";
import Loop from "./MediaPlayer/Controls/Loop.svelte";

export class MediaPlayerRuntime extends AppProcess {
  private readonly METADATA_PATH = join(UserPaths.Configuration, "MediaPlayer", "Metadata.json");
  private readonly COVERIMAGES_PATH = join(UserPaths.Configuration, "MediaPlayer", "CoverImages");
  public queue = Store<string[]>([]);
  public queueIndex = Store<number>(0);
  public url = Store<string>();
  public player: HTMLVideoElement | undefined;
  public loopMode = Store<LoopMode>(LoopMode.None);
  public State = Store<PlayerState>({ paused: true, current: 0, duration: 0, loopMode: LoopMode.None });
  public isVideo = Store<boolean>(false);
  public Loaded = Store<boolean>(false);
  public playlistPath = Store<string>();
  MetadataConfiguration = Store<MetadataConfiguration>({});
  CurrentMediaMetadata = Store<AudioFileMetadata | undefined>();
  CurrentCoverUrl = Store<string | undefined>();
  LoadingMetadata = Store<boolean>(false);
  mediaSpecificAccentColor = Store<string>("");

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

    this.CurrentCoverUrl.subscribe(async (v) => {
      if (!v) return this.mediaSpecificAccentColor.set("");

      this.mediaSpecificAccentColor.set(await getReadableVibrantColor(v));
    });

    this.mediaSpecificAccentColor.subscribe((v) => {
      const window = this.getWindow();

      if (!v || !window) return;

      // Merging goes here
    });

    this.setSource(__SOURCE__);
  }

  async onClose() {
    this.Reset();
    this.player?.remove();
    return true;
  }

  protected async start(): Promise<any> {
    await Fs.createDirectory(getParentDirectory(this.METADATA_PATH));
    await Fs.createDirectory(this.COVERIMAGES_PATH);
    await this.readConfiguration();

    let firstSub = false;
    this.MetadataConfiguration.subscribe((v) => {
      if (!firstSub) return (firstSub = true);

      this.writeConfiguration(v);
    });
    this.CurrentMediaMetadata.subscribe((v) => {
      if (!v?.title) return;

      this.windowTitle.set(v.title);
    });
  }

  protected async stop(): Promise<any> {
    this.Reset();
    this.player?.remove();
  }

  async render({ file }: RenderArgs) {
    if (await this.closeIfSecondInstance()) return;

    if (file) {
      if (file.endsWith(".arcpl")) this.readPlaylist(file);
      else this.readFile([file]);
    }

    this.shell?.trayHost?.createTrayIcon?.(this.pid, this.app.id, {
      icon: "MediaPlayerIcon",
      popup: {
        width: 250,
        height: 185,
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

  public SeekTo(secondTime: number) {
    if (this._disposed) return;
    if (!this.player) return;

    this.player.currentTime = secondTime;
  }

  public Stop() {
    if (this._disposed) return;
    if (!this.player) return;

    try {
      this.player.pause();
      this.player.currentTime = 0;
    } catch {}
  }

  public async SetLoopNone() {
    if (this._disposed) return;
    if (!this.player) return;

    try {
      this.player.loop = false;
      this.loopMode.set(LoopMode.None);
    } catch {}
  }

  public async SetLoopAll() {
    if (this._disposed) return;
    if (!this.player) return;

    try {
      this.player.loop = false;
      this.loopMode.set(LoopMode.All);
    } catch {}
  }

  public async SetLoopOne() {
    if (this._disposed) return;
    if (!this.player) return;

    try {
      this.player.loop = true;
      this.loopMode.set(LoopMode.One);
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
      loopMode: this.loopMode.get(),
    };

    this.State.set(state);
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

    if (path.endsWith(".arcpl")) await this.readPlaylist(path);
    else await this.readFile([path]);
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
      if (this.loopMode() == LoopMode.All) this.queueIndex.set(0);
      return;
    }
    index++;
    this.queueIndex.set(index);
  }

  async previousSong() {
    if (this._disposed) return;
    let index = this.queueIndex();
    const queue = this.queue();

    if (this.State().current >= 2) {
      this.player!.currentTime = 0;

      return;
    }

    if (index - 1 < 0) {
      if (this.loopMode() == LoopMode.All) this.queueIndex.set(queue.length - 1);
      return;
    }
    index--;
    this.queueIndex.set(index);
  }

  //#region QUEUE

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

      const fileAssociation = Daemon?.assoc?.getFileAssociation(path);

      this.isVideo.set(fileAssociation?.friendlyName === "Video file");
      this.url.set(url);
      this.windowTitle.set(`${getItemNameFromPath(path)} - Media Player`);
      this.windowIcon.set(fileAssociation?.icon || this.getIconCached("MediaPlayerIcon"));

      this.parseMetadata(path);

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

  //#endregion
  //#region PLAYLISTS

  async savePlaylist(queue = this.queue()) {
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

      const queueIndex = this.queueIndex();
      this.Loaded.set(false);
      this.queue.set(queue);
      this.queueIndex.set(0);
      if (!queueIndex) this.handleSongChange(0);
      this.playlistPath.set(path);
    } catch {}
  }

  async readPlaylist(path: string) {
    if (this._disposed) return;
    try {
      const contents = await Fs.readFile(path);
      if (!contents) throw new Error("Failed to read playlist");

      const queue = JSON.parse(atob(arrayBufferToText(contents)!));
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

  async folderAsPlaylist() {
    const [path] = await Daemon.files!.LoadSaveDialog({
      title: "Choose a folder to scan for media",
      icon: this.app.data.metadata.icon,
      startDir: UserPaths.Music,
      folder: true,
    });

    if (!path) return;

    const content = await Fs.readDir(path);
    const mediaFiles: FileEntry[] = [];

    for (const file of content?.files || []) {
      const extensions = this.app.data.opens?.extensions?.filter((e) => file.name.endsWith(e) && e !== ".arcpl");
      if (!extensions?.length) continue;

      mediaFiles.push(file);
    }

    this.Stop();
    const playlist = mediaFiles.map((f) => join(path, f.name));
    this.queue.set(playlist);
    await this.parseEntireQueue();
    await this.savePlaylist(this.queue());
  }

  //#endregion
  //#region ERRORS

  async failedToPlay(e?: any) {
    if (this._disposed) return;
    MessageBox(
      {
        title: "Failed to play",
        message:
          `Media Player failed to play the file you wanted to open. It might not be a (supported) audio or video file. Please try a different file. ${e}`.trim(),
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
        image: "MediaPlayerIcon",
        sound: "arcos.dialog.error",
      },
      this.pid,
      true
    );
    this.Loaded.set(true);
  }

  //#endregion
  //#region METADATA

  async readConfiguration() {
    try {
      const content = await Fs.readFile(this.METADATA_PATH);
      if (!content) throw new Error("Failed to read file contents");

      const json = tryJsonParse(arrayBufferToText(content));
      if (!json || typeof json === "string") throw new Error("File contents could not be parsed as JSON");

      this.MetadataConfiguration.set(json);
    } catch {
      return await this.writeConfiguration({});
    }
  }

  async writeConfiguration(configuration: MetadataConfiguration) {
    await Fs.writeFile(this.METADATA_PATH, textToBlob(JSON.stringify(configuration, null, 2)), undefined, false);
  }

  async normalizeMetadata(meta: IAudioMetadata): Promise<AudioFileMetadata> {
    const result: AudioFileMetadata = {};

    result.artist = meta?.common?.artist;
    result.genre = meta?.common?.genre?.join(", ");
    result.title = meta?.common?.title;
    result.year = Number.isNaN(meta?.common?.year) ? undefined : meta?.common?.year;
    result.album = meta?.common?.album;

    const coverImage =
      meta?.common?.picture?.find((p) => p.description?.toLowerCase().includes("cover")) || meta?.common?.picture?.[0];
    const coverImageBytes = coverImage?.data;
    const coverImageBuffer = coverImageBytes?.buffer.slice(
      coverImageBytes.byteOffset,
      coverImageBytes.byteOffset + coverImageBytes.byteLength
    ) as ArrayBuffer | undefined;
    const coverImageType = coverImage?.format;

    if (coverImageBuffer) {
      const path = join(this.COVERIMAGES_PATH, `${UUID()}.${coverImageType?.split("/")[1] || "png"}`);
      const written = await Fs.writeFile(path, arrayBufferToBlob(coverImageBuffer, coverImageType), undefined, false);

      if (written) result.coverImagePath = path;
    }

    return result;
  }

  async parseMetadata(path: string, apply = true) {
    try {
      if (apply) {
        this.CurrentCoverUrl.set("");
        this.CurrentMediaMetadata.set(undefined);
      }

      const existing = this.MetadataConfiguration()[path];
      if (existing) {
        if (apply) this.CurrentMediaMetadata.set(existing);
        return existing;
      }

      if (apply) {
        this.CurrentCoverUrl.set("");
        this.LoadingMetadata.set(true);
      }

      const content = await Fs.readFile(path);
      if (!content) {
        if (apply) this.LoadingMetadata.set(false);
        return undefined;
      }

      const metadata = await parseBuffer(new Uint8Array(content));
      const normalized = await this.normalizeMetadata(metadata);

      if (apply) {
        this.LoadingMetadata.set(false);
        this.CurrentMediaMetadata.set(normalized);
      }
      this.MetadataConfiguration.update((v) => {
        v[path] = normalized;

        return v;
      });
    } catch {
      return;
    }
  }

  async parseEntireQueue() {
    const queue = this.queue();

    if (!queue.length) return;

    const gli = await Daemon.helpers?.GlobalLoadIndicator("Just a moment...", this.pid, {
      max: this.queue().length,
      value: 0,
    });

    for (const path of queue) {
      gli?.caption.set(`Scanning ${getItemNameFromPath(path)}...`);
      await this.parseMetadata(path, false);
      gli?.incrementProgress?.(1);
    }

    await gli?.stop();
  }

  //#endregion
  //#region UTILS

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

  //#endregion
}
