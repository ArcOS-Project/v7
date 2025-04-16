import { appStoreService } from "$ts/apps/storage";
import { bhuspService } from "$ts/bughunt/process";
import { shareService } from "$ts/fs/shares";
import { adminService } from "$ts/server/admin";
import { messagingService } from "$ts/server/messaging";
import type { ServiceStore } from "$types/service";

export const ServicesStore: ServiceStore = new Map([
  ["BugHuntUsp", bhuspService],
  ["AdminBootstrapper", adminService],
  ["ShareMgmt", shareService],
  ["AppStorage", appStoreService],
  ["MessagingService", messagingService],
]);
