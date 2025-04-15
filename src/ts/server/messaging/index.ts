import type { ProcessHandler } from "$ts/process/handler";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import type { PartialMessage } from "$types/messaging";
import { Axios } from "../axios";

export class MessagingInterface extends BaseService {
  token: string | undefined;
  constructor(handler: ProcessHandler, pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(handler, pid, parentPid, name, host);
  }

  async activate(token: string): Promise<void> {
    this.token = token;
  }

  async getSentMessages(): Promise<PartialMessage[]> {
    try {
      const response = await Axios.get("/messaging/sent", { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as PartialMessage[];
    } catch {
      return [];
    }
  }
  async getReceivedMessages(): Promise<PartialMessage[]> {
    try {
      const response = await Axios.get("/messaging/received", { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as PartialMessage[];
    } catch {
      return [];
    }
  }
  async sendMessage(
    subject: string,
    recipients: string[],
    body: string,
    attachments: File[],
    repliesTo?: string
  ): Promise<boolean> {
    const formData = new FormData();
    formData.set("title", subject);
    formData.set("body", body);
    formData.set("recipients", JSON.stringify(recipients));

    if (repliesTo) formData.set("repliesTo", repliesTo);

    attachments.forEach((a) => formData.append("attachments", a));

    try {
      const response = await Axios.post("/messaging", formData, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.status === 200;
    } catch {
      return false;
    }
  }
}
