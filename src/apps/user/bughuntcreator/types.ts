// !tpa
/**
 * Settings that determine what data should be included in a bug report
 */
export interface BugHuntCreatorOptions {
  /**
   * Whether or not to send the report without user information
   */
  sendAnonymously: boolean;
  /**
   * Whether or not to include the ArcOS system logs
   */
  excludeLogs: boolean;
  /**
   * Whether or not to make the bug report publicly accessible. Overrules {@link BugHuntCreatorOptions.sendAnonymously} and makes the bug report anonymous.
   */
  makePublic: boolean;
}
// !endtpa
