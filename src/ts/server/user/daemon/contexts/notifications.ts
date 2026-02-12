import type { IUserDaemon } from "$interfaces/daemon";
import { SysDispatch } from "$ts/env";
import type { Notification } from "$types/notification";
import { UserContext } from "../context";

export class NotificationsUserContext extends UserContext {
  public notifications = new Map<string, Notification>([]);

  constructor(id: string, daemon: IUserDaemon) {
    super(id, daemon);
  }

  sendNotification(data: Notification) {
    if (this._disposed) return;

    this.Log(`Sending notification: ${data.title} -> ${data.message.length} body bytes`);

    const id = `${Math.floor(Math.random() * 1e9)}`;

    data.timestamp = Date.now();

    this.notifications.set(id, data);
    SysDispatch.dispatch("update-notifications", [this.notifications]);
    SysDispatch.dispatch("send-notification", [data]);

    return id;
  }

  deleteNotification(id: string) {
    if (this._disposed) return;

    this.Log(`Deleting notification '${id}'`);

    const notification = this.notifications.get(id);

    if (!notification) return;

    notification.deleted = true;

    this.notifications.set(id, notification);

    SysDispatch.dispatch("delete-notification", [id]);
    SysDispatch.dispatch("update-notifications", [this.notifications]);
  }

  clearNotifications() {
    if (this._disposed) return;

    this.Log(`Clearing notifications`);

    this.notifications = new Map<string, Notification>([]);
    SysDispatch.dispatch("update-notifications", [this.notifications]);
  }
}
