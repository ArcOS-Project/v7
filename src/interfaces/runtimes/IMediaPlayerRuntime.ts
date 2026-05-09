import type { AudioFileMetadata, LoopMode, MetadataConfiguration, PlayerState } from "$apps/user/mediaplayer/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IConfigurator } from "$interfaces/IConfigurator";
import type { BooleanStore, NumberStore, ReadableStore, StringStore } from "$types/writable";
import type { IAudioMetadata } from "music-metadata";

export interface IMediaPlayerRuntime extends IAppProcess {
  queue: ReadableStore<string[]>;
  queueIndex: NumberStore;
  url: StringStore;
  player?: HTMLVideoElement;
  seeking: BooleanStore;
  loopMode: ReadableStore<LoopMode>;
  State: ReadableStore<PlayerState>;
  isVideo: BooleanStore;
  Loaded: BooleanStore;
  playlistPath: StringStore;
  pinControls: BooleanStore;
  MetadataConfiguration: ReadableStore<MetadataConfiguration>;
  CurrentMediaMetadata: ReadableStore<AudioFileMetadata | undefined>;
  CurrentCoverUrl: ReadableStore<string | undefined>;
  LoadingMetadata: BooleanStore;
  mediaSpecificAccentColor: StringStore;
  Configuration: IConfigurator;

  setPlayer(player: HTMLVideoElement): void;
  Reset(): void;
  Play(): void;
  Pause(): void;
  Seek(mod: number): void;
  SeekTo(secondTime: number): void;
  Stop(): void;
  SetLoopNone(): void;
  SetLoopAll(): void;
  SetLoopOne(): void;
  updateState(): void | {
    paused: boolean;
    current: number;
    duration: number;
  };
  openFile(): Promise<void>;
  readFile(paths: string[], addToQueue?: boolean): Promise<void>;
  nextSong(): void;
  previousSong(): Promise<void>;
  clearQueue(): void;
  handleSongChange(v: number): Promise<void>;
  addToQueue(): Promise<void>;
  savePlaylist(queue?: string[]): Promise<void>;
  readPlaylist(path: string): Promise<void>;
  createPlaylistShortcut(): Promise<void>;
  folderAsPlaylist(): Promise<void>;
  failedToPlay(e?: any): Promise<void>;
  normalizeMetadata(meta: IAudioMetadata): Promise<AudioFileMetadata>;
  parseMetadata(path: string, apply?: boolean): Promise<ICommandResult<AudioFileMetadata>>;
  parseEntireQueue(): Promise<void>;
  formatTime(seconds: number): string;
  openFileLocation(): void;
}
