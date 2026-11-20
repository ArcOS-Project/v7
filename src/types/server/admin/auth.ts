import type { ExpandedUserInfo } from "$types/user";

export interface Activity {
  authorId: string;
  token: string;
  userAgent: string;
  location: Location;
  action: "unknown" | "login" | "logout";
  createdAt?: Date;
  _id: string;
}

export type ExpandedActivity = Activity & { user?: ExpandedUserInfo };

export interface Token {
  value: string;
  userId: string;
  _id?: string;
  lastUsed?: number;
  timesUsed?: number;
  userAgent?: string;
}

export type ExpandedToken = Token & { user?: ExpandedUserInfo };

export interface UserTotp extends Record<string, string | boolean> {
  userId: string;
  secret: string;
  activated: boolean;
  url: string;
}

export interface PartialUserTotp {
  _id: string;
  activated: boolean;
  userId: string;
}
