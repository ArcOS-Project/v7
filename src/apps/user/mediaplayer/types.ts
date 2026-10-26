// !tpa
/**
 * An enum that specifies the loop mode of the media player.
 * 
 * None - No looping
 * All - Loop the entire playlist
 * One - Loop the current song
 */
export enum LoopMode {
  None = 0,
  All = 1,
  One = 2,
}

/**
 * The state of the media player
 */
export interface PlayerState {
  /**
   * Whether or not the player is paused
   */
  paused: boolean;
  /**
   * The current millisecond of the current song
   */
  current: number;
  /**
   * The duration of the song in milliseconds
   */
  duration: number;
}

/**
 * Media player specific metadata for an audio or video file
 */
export interface AudioFileMetadata {
  /**
   * The ArcOS filesystem path that points to the cover image. Always in `U:/System/Config/MediaPlayer/CoverImages`.
   * Filename is always a random UUID. Direct file accessing will be used to display the image in the media player.
   */
  coverImagePath?: string;
  /**
   * The name of the artist
   */
  artist?: string;
  /**
   * The title of the song or video
   */
  title?: string;
  /**
   * The name of the album
   */
  album?: string;
  /**
   * The year of release
   */
  year?: number;
  /**
   * The genre of the song or video
   */
  genre?: string;
}

/**
 * The data of the configuration file that tracks parsed media metadata. This file is `U:/System/Config/MediaPlayer/Metadata.json`.
 */
export type MetadataConfiguration = Record<string, AudioFileMetadata>; // R<path, meta>
// !endtpa
