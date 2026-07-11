import type { Notification } from "$types/system/notification";

export interface ElectronIPC {
  closeWindow(): void;
  minimizeWindow(): void;
  maximizeWindow(): void;
  sendNotification(data: Notification): void;
  updateIconProgress(progress: number, max: number): void;
  onPowerOff(callback: () => void): void;
  setCanClose(canClose: boolean): void;
  getSystem(): Promise<NodeJS.Platform>;
  handleMaximize(callback: (isMaximized: boolean) => void): void;
  handleFullscreen(callback: (isFullscreen: boolean) => void): void;
  supportIntegration(): void;
  isNative(): Promise<boolean>;
}
