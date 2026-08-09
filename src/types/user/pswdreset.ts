export interface PswdResetConsumptionResult {
  success: boolean;
  changed: boolean;
}

export interface PswdResetCreateResult {
  created: boolean;
  userId: string;
}

export interface PswdResetVerificationResult {
  userId: string;
  resetToken: string;
}