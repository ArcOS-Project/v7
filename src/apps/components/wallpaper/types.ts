// !tpa
/**
 * An x,y (pixels) coordinate of a desktop icon
 */
export interface DesktopIconPos {
  x: number;
  y: number;
}

/**
 * A record that is the type of the data in U:/System/DesktopIcons.json
 */
export type DesktopIcons = Record<string, DesktopIconPos>;
// !endtpa
