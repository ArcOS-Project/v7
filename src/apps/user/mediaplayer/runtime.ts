import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { getDirectoryName, getParentDirectory } from "$ts/fs/util";
import { MediaPlayerIcon } from "$ts/images/apps";
import { VideoMimeIcon } from "$ts/images/mime";
import type { ProcessHandler } from "$ts/process/handler";
import { DefaultMimeIcons } from "$ts/server/user/store";
import { Sleep } from "$ts/sleep";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { RenderArgs } from "$types/process";
import { MediaPlayerAccelerators } from "./accelerators";
import { MediaPlayerAltMenu } from "./altmenu";
import type { PlayerState } from "./types";

export class MediaPlayerRuntime extends AppProcess {
  public queue = Store<string[]>([]);
  public queueIndex = Store<number>(0);
  public url = Store<string>();
  public player: HTMLVideoElement | undefined;
  public State = Store<PlayerState>({ paused: true, current: 0, duration: 0 });
  public isVideo = Store<boolean>(false);
  public Loaded = Store<boolean>(false);

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    file?: string
  ) {
    super(handler, pid, parentPid, app);

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
        this.windowTitle.set(this.app.data.metadata.name);
        this.windowIcon.set(this.app.data.metadata.icon);
      }
    });
  }

  async render({ file }: RenderArgs) {
    if (file) this.readFile(file);
  }

  public setPlayer(player: HTMLVideoElement) {
    this.player = player;

    this.player.addEventListener("timeupdate", () => this.updateState());
    this.player.addEventListener("pause", () => this.updateState());
    this.player.addEventListener("play", () => this.updateState());
  }

  public Reset() {
    if (!this.player) return;

    this.player.src = this.url.get();
    this.player.currentTime = 0;
  }

  public async Play() {
    if (!this.player) return;

    try {
      await this.player.play();
    } catch {}
  }

  public async Pause() {
    if (!this.player) return;

    try {
      this.player.pause();
    } catch {}
  }

  public Seek(mod: number) {
    if (!this.player) return;

    this.player.currentTime += mod;
  }

  public Stop() {
    if (!this.player) return;

    try {
      this.player.pause();
      this.player.currentTime = 0;
    } catch {}
  }

  public updateState() {
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
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  }

  public openFileLocation() {
    const path = this.queue.get()[this.queueIndex()];

    if (!path) return;

    this.spawnApp("fileManager", this.parentPid, getParentDirectory(path));
  }

  public async openFile() {
    const path = await this.userDaemon?.LoadSaveDialog({
      title: "Select an audio or video file to open",
      icon: MediaPlayerIcon,
      startDir: getParentDirectory(this.queue()[this.queueIndex()]) || "U:/",
      extensions: this.app.data.opens?.extensions,
    });

    if (!path) return;

    await this.readFile(path);
  }

  async readFile(path: string, addToQueue = false) {
    if (addToQueue && this.queue().length) {
      this.queue.update((v) => {
        v.push(path);
        return v;
      });
    } else {
      const queueIndex = this.queueIndex();
      this.Loaded.set(false);
      this.queue.set([path]);
      this.queueIndex.set(0);
      if (!queueIndex) this.handleSongChange(0);
    }
  }

  nextSong() {
    let index = this.queueIndex();
    const queue = this.queue();

    if (index + 1 > queue.length - 1) {
      return;
    }
    index++;
    this.queueIndex.set(index);
  }

  previousSong() {
    let index = this.queueIndex();

    if (index - 1 < 0) {
      return;
    }
    index--;
    this.queueIndex.set(index);
  }

  clearQueue() {
    this.queueIndex.set(0);
    this.queue.set([]);
  }

  async handleSongChange(v: number) {
    const path = this.queue()[v];

    if (!path) return;

    this.Loaded.set(false);

    const url = await this.fs.direct(path);

    if (!url) {
      MessageBox(
        {
          title: "Failed to load file",
          message:
            "ArcOS failed to open the file you requested. It might be moved or the drive doesn't support direct file access.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: MediaPlayerIcon,
          sound: "arcos.dialog.error",
        },
        this.pid,
        true
      );
      return;
    }

    console.log(`Now playing: ${path}`, this.State());

    const split = path.split(".");

    this.isVideo.set(
      DefaultMimeIcons[VideoMimeIcon].includes(`.${split[split.length - 1]}`)
    );
    this.url.set(url);
    this.windowTitle.set(`${getDirectoryName(path)} - Media Player`);
    this.windowIcon.set(
      this.userDaemon?.getMimeIconByFilename(path) || MediaPlayerIcon
    );

    this.Reset();

    await Sleep(0);

    await this.player?.play();
    this.Loaded.set(true);
  }

  async addToQueue() {
    const path = await this.userDaemon?.LoadSaveDialog({
      title: "Select a file to add to the queue",
      icon: MediaPlayerIcon,
      startDir: getParentDirectory(this.queue()[this.queueIndex()]) || "U:/",
      extensions: this.app.data.opens?.extensions,
    });

    if (!path) return;

    await this.readFile(path, true);
  }

  moveQueueItem(sourceIndex: number, targetIndex: number) {
    const currentQueue = this.queue(); // Get the current value of the queue store
    if (!currentQueue) return;

    // Remove the item from the source index
    const [movedItem] = currentQueue.splice(sourceIndex, 1);

    // Insert the item at the target index
    currentQueue.splice(targetIndex, 0, movedItem);

    // Update the queue store
    this.queue.set(currentQueue);
  }
}
