import type { Notification } from "$types/system/notification";

export interface ElectronIPC {
  closeWindow(): void;
  sendNotification(data: Notification): void;
}
