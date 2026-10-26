// !tpa
/**
 * A Qlorb orb. It's called `Box` because early versions of Qlorb used boxes instead of circular targets.
 */
export interface Box {
  /**
   * How much to increment or decrement the player's score
   */
  modifier: number;
  /**
   * The CSS class of the orb
   */
  class: string;
  /**
   * The randomly picked vertical offset of the orb
   */
  yoffset: number;
}
// !endtpa
