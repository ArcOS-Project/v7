// !tpa
/**
 * An interface used to track the state of a Global Load Indicator (GLI) window
 */
export interface GlobalLoadIndicatorProgress {
  /**
   * The maximal value of the progress bar
   */
  max: number;
  /**
   * The done value of the progress bar
   */
  value: number;
  /**
   * Whether or not to render the progress caption as HTML
   */
  useHtml?: boolean;
}
// !endtpa
