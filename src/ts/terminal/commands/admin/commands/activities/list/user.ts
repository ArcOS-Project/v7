import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { BRBLACK, BRPURPLE, RESET } from "$ts/terminal/store";
import { maxLength } from "$ts/util";
import dayjs from "dayjs";

export const AdminActivitiesListUser: AdminCommandType = async (term, admin, [username]) => {
  if (!admin.canAccess("admin.admin.activities.user")) return 2;
  if (!username) return 5;

  const activities = await admin.getActivityOf(username);

  if (!activities.length) return 3;

  const maxActionLength = maxLength(activities.map((a) => a.action));

  for (const activity of activities) {
    const timestamp = dayjs(activity.createdAt).format("ddd DD MMM, HH:mm:ss");
    const action = activity.action.toUpperCase().padEnd(maxActionLength);

    term.rl?.println(
      `${BRBLACK}${activity._id}${RESET} [${timestamp}] ${BRPURPLE}${action}${BRBLACK}:${RESET} ${activity.location?.host}`
    );
  }

  return 0;
};
