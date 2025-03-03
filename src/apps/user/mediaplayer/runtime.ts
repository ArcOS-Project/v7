import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { getDirectoryName, getParentDirectory } from "$ts/fs/util";
import { MediaPlayerIcon } from "$ts/images/apps";
import { AudioMimeIcon, VideoMimeIcon } from "$ts/images/mime";
import type { ProcessHandler } from "$ts/process/handler";
import { DefaultMimeIcons } from "$ts/server/user/store";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { MediaPlayerAccelerators } from "./accelerators";
import { MediaPlayerAltMenu } from "./altmenu";
import type { PlayerState } from "./types";

export class MediaPlayerRuntime extends AppProcess {
  public path = Store<string>();
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
  }
  public setPlayer(player: HTMLVideoElement) {
    this.player = player;

    this.player.addEventListener("timeupdate", () => this.updateState());
    this.player.addEventListener("pause", () => this.updateState());
    this.player.addEventListener("play", () => this.updateState());
  }

  public Reset() {
    if (!this.player) return;

    this.player.pause();
    this.player.src = this.url.get();
    this.player.currentTime = 0;
  }

  public Play() {
    if (!this.player) return;

    this.player.play();
  }

  public Pause() {
    if (!this.player) return;

    this.player.pause();
  }

  public Seek(mod: number) {
    if (!this.player) return;

    this.player.currentTime += mod;
  }

  public Stop() {
    if (!this.player) return;

    this.player.pause();
    this.player.currentTime = 0;
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
    const path = this.path.get();

    if (!path) return;

    this.spawnApp("FileManager", this.parentPid, getParentDirectory(path));
  }

  public async openFile() {
    const path = await this.userDaemon?.LoadSaveDialog({
      title: "Select an audio or video file to open",
      icon: MediaPlayerIcon,
      startDir: getParentDirectory(this.path()) || "U:/",
      extensions: [
        ...DefaultMimeIcons[AudioMimeIcon],
        ...DefaultMimeIcons[VideoMimeIcon],
      ],
    });

    if (!path) return;

    await this.readFile(path);
  }

  async readFile(path: string) {
    this.path.set(path);
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

    this.url.set(url);
    this.windowTitle.set(`${getDirectoryName(path)} - Media Player`);
    this.windowIcon.set(
      this.userDaemon?.getMimeIconByFilename(path) || MediaPlayerIcon
    );

    this.Reset();

    setTimeout(() => {
      this.player?.play();
      this.Loaded.set(true);
    });
  }
}
