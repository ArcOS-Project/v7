export interface BetaRecord {
  id: string;
  serverName: string;
  userId: string;
  enabled: boolean;
  created: string;
  updated: string;
}

export interface BetaFeedback {
  id: string;
  version: string;
  userId: string;
  serverName: string;
  username: string;
  title: string;
  message: string;
  created?: string;
  updated?: string;
  read?: boolean;
}

export type BetaFeedbackRequest = Omit<BetaFeedback, "id">;
