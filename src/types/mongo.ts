export interface UpdateResult {
  acknowledged: boolean;
  matchedCount: number;
  modifiedCount: number;
  upsertedCount: number;
  upsertedId: number;
}

export declare interface DeleteResult {
  acknowledged: boolean;
  deletedCount: number;
}

export type UpdateWriteOpResult = UpdateResult;
