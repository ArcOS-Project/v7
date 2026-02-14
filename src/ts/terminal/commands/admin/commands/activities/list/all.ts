import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { BRBLACK, BRBLUE, BRPURPLE, RESET } from "$ts/terminal/store";
import { maxLength } from "$ts/util";
import dayjs from "dayjs";

export const AdminActivitiesListAll: AdminCommandType = async (term, admin) => {
  if (!admin.canAccess(AdminScopes.adminActivitiesList, AdminScopes.adminUsersList)) return 2;

  const users = await admin.getAllUsers();
  const activities = await admin.getAllActivity();

  if (!users.length || !activities.length) return 3;

  const maxUsernameLength = maxLength(users.map((u) => u.username));
  const maxActionLength = maxLength(activities.map((a) => a.action));

  for (const activity of activities) {
    const user = users.filter((u) => u._id === activity.authorId)[0];
    const timestamp = dayjs(activity.createdAt).format("ddd DD MMM, HH:mm:ss");
    const action = activity.action.toUpperCase().padEnd(maxActionLength);
    const username = user.username.padEnd(maxUsernameLength);

    term.rl?.println(
      `${BRBLACK}${activity._id}${RESET} [${timestamp}] ${BRPURPLE}${action} ${BRBLUE}${username}${BRBLACK}:${RESET} ${activity.location?.host}`
    );
  }

  return 0;
};
