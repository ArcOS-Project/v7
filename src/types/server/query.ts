export interface QueryableOptions extends Record<string, string | number | undefined> {
  page?: number;
  take?: number;
  search?: string;
}

export interface QueryResult<T extends object> {
  items: T[];
  totalCount: number;
}
