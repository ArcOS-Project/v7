import type { Notification } from "$types/system/notification";

export interface ElectronIPC {
  closeWindow(): void;
  sendNotification(data: Notification): void;
  updateIconProgress(progress: number, max: number): void;
  onPowerOff(callback: () => void): void;
  setCanClose(canClose: boolean): void;
}
