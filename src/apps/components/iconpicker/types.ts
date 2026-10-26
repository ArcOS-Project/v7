// !tpa
/**
 * The data used to track the internal state of the Icon Picker app.
 */
export interface IconPickerData {
  /**
   * The name of the thing that the icon is for
   */
  forWhat: string;
  /**
   * A default icon to use. Can be an icon ID like '@builtin::ComponentIcon' etcetera
   */
  defaultIcon: string;
  /**
   * The UUID that is used to identify the return value for the caller. Always a random UUID, never set explicitly.
   */
  returnId: string;
}
// !endtpa
