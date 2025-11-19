import type { Notification } from "$types/notification";
import type { UserDaemon } from "..";
import { UserContext } from "../context";

export class NotificationsUserContext extends UserContext {
  public notifications = new Map<string, Notification>([]);

  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  sendNotification(data: Notification) {
    if (this._disposed) return;

    this.Log(`Sending notification: ${data.title} -> ${data.message.length} body bytes`);

    const id = `${Math.floor(Math.random() * 1e9)}`;

    data.timestamp = Date.now();

    this.notifications.set(id, data);
    this.systemDispatch.dispatch("update-notifications", [this.notifications]);
    this.systemDispatch.dispatch("send-notification", [data]);

    return id;
  }

  deleteNotification(id: string) {
    if (this._disposed) return;

    this.Log(`Deleting notification '${id}'`);

    const notification = this.notifications.get(id);

    if (!notification) return;

    notification.deleted = true;

    this.notifications.set(id, notification);

    this.systemDispatch.dispatch("delete-notification", [id]);
    this.systemDispatch.dispatch("update-notifications", [this.notifications]);
  }

  clearNotifications() {
    if (this._disposed) return;

    this.Log(`Clearing notifications`);

    this.notifications = new Map<string, Notification>([]);
    this.systemDispatch.dispatch("update-notifications", [this.notifications]);
  }
}
