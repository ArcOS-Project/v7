import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ReadableStore } from "$types/writable";

export interface ISettingsRuntime extends IAppProcess {
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
