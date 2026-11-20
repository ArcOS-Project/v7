export interface ServerStatistics {
  counts: ServerStatGroup;
  endpoints: number;
}

export interface ServerStatGroup extends Record<string, number> {
  tokens: number;
  users: number;
  indexes: number;
  accessors: number;
  approvals: number;
  bugreps: number;
  audits: number;
  activities: number;
}

export interface UserStatistics {
  activities: number;
  approvals: number;
  bughunts: number;
  fsaccesses: number;
  indexings: number;
  messages: number;
  shares: number;
  tokens: number;
}
