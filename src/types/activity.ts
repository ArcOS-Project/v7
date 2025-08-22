export interface LoginActivity {
  authorId: string;
  token?: string;
  userAgent: string;
  location?: Location;
  action: "unknown" | "login" | "logout";
  _id: string;
  createdAt: string;
  updatedAt: string;
}
