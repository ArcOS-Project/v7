import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ReadableStore } from "$types/shared/writable";
import type { JoltSettingsPage, JoltSettingsBlock } from "$types/system/jui/settings";

// !tpa
export interface ISettingsRuntime extends IAppProcess<JoltSettingsBlock, JoltSettingsPage> {
  currentPage: ReadableStore<string>;
  currentSlide: ReadableStore<string>;
  slideVisible: ReadableStore<boolean>;
  requestedSlide: string | undefined;
  render(): Promise<false | undefined>;
  switchPage(pageId: string): void;
  showSlide(id: string): Promise<void>;
  loginActivity(): Promise<void>;
  logOutEverywhere(): Promise<void>;
  uploadWallpaper(): Promise<void>;
  viewLicense(): Promise<void>;
  deleteThemeConfirmation(id?: string): void;
  chooseProfilePicture(): Promise<void>;
  chooseWallpaper(): Promise<void>;
  chooseLoginBackground(): Promise<void>;
  setup2fa(): Promise<void>;
  disableTotp(): Promise<void>;
}
