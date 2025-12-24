import { SysDispatch } from "$ts/env";
import type { IconService } from "$ts/icon";
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
    SysDispatch.dispatch("update-notifications", [this.notifications]);
    SysDispatch.dispatch("send-notification", [data]);

    if (!document.hasFocus()) {
      Notification.requestPermission().then((perm) => {
        if (perm !== "granted") return;

        // there's probably a better way to do this rather than inserting a CDN link
        const icon = data.icon ? `https://unpkg.com/lucide-static@latest/icons/${data.icon}.svg` : undefined;
        const image = data.image
          ? this.serviceHost?.getService<IconService>("IconService")?.getIconCached(data.image) || data.image
          : icon;

        const notif = new Notification(data.title, { body: data.message, icon: image, requireInteraction: true });
        notif.onclose = () => this.deleteNotification(id);
        notif.onclick = () => {
          window.focus();
          this.deleteNotification(id);
        };

        if (data.timeout) setTimeout(() => notif.close(), data.timeout);
      });
    }

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
