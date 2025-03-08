export function groupByTimeFrame<T extends Record<string, any>>(items: T[], column: keyof T = "createdAt") {
  const now = new Date();
  const today = new Date(now.setHours(0, 0, 0, 0));
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);
  const twentyEightDaysAgo = new Date(today);
  twentyEightDaysAgo.setDate(today.getDate() - 28);

  return items.reduce(
    (acc, item) => {
      const date = new Date(item[column]);
      if (date >= today) {
        acc.today.push(item);
      } else if (date >= yesterday) {
        acc.yesterday.push(item);
      } else if (date >= sevenDaysAgo) {
        acc.sevenDays.push(item);
      } else if (date >= twentyEightDaysAgo) {
        acc.twentyEightDays.push(item);
      } else {
        acc.older.push(item);
      }
      return acc;
    },
    {
      today: [],
      yesterday: [],
      sevenDays: [],
      twentyEightDays: [],
      older: [],
    } as Record<string, T[]>
  );
}
