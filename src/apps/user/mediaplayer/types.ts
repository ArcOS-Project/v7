export enum LoopMode {
  None = 0,
  All = 1,
  One = 2,
}

export interface PlayerState {
  paused: boolean;
  current: number;
  duration: number;
  loopMode: LoopMode;
  seeking: boolean;
}

export interface AudioFileMetadata {
  coverImagePath?: string;
  artist?: string;
  title?: string;
  album?: string;
  year?: number;
  genre?: string;
}

export type MetadataConfiguration = Record<string, AudioFileMetadata>; // R<path, meta>
