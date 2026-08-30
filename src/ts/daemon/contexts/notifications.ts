import type { INotificationsUserContext } from "$interfaces/contexts/INotificationsUserContext";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import { Logo } from "$ts/branding";
import { IsElectron } from "$ts/electron";
import { SysDispatch } from "$ts/env";
import type { IconService } from "$ts/servicehost/services/IconService";
import type { Notification } from "$types/system/notification";
import { UserContext } from "../context";

export class NotificationsUserContext extends UserContext implements INotificationsUserContext {
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

    const iconService = this.serviceHost?.getService<IconService>("IconService");

    if (IsElectron()) {
      electron!.sendNotification(data);
      // if (iconService && data.icon) electron.sendNotification(data, await iconService.getIcon(data.icon));
      // else electron.sendNotification(data, Logo());
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
