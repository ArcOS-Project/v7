export interface UserApprovalNode {
  username: string;
  userId: string;
  emailAddress: string;
  validationId: string;
  timestamp: number;
  validated: boolean;
}

export interface User {
  username: string;
  passwordHash: string;
  preferences: object;
  admin: boolean;
  adminScopes: string[];
  approved: boolean;
  _id: string;
  email: string;
  storageSize?: number;
}

export interface AdminTemporaryPassword {
  _id: string;
  adminId: string;
  userId: string;
  passwordValue: string;
  createdAt: string;
  updatedAt: string;
}
