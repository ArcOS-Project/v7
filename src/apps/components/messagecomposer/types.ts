// !tpa
/**
 * An attachment for the message in the Message Composer
 */
export interface Attachment {
  /**
   * The actual file content to send
   */
  data: File;
  /**
   * A unique identifier for the file
   */
  uuid: string;
}
// !endtpa
