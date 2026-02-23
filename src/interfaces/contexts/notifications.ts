import type { IUserContext } from "$interfaces/daemon";
import type { Notification } from "$types/notification";

export interface INotificationsUserContext extends IUserContext {
  notifications: Map<string, Notification>;
  sendNotification(data: Notification): string | undefined;
  deleteNotification(id: string): void;
  clearNotifications(): void;
}
