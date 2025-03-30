import { getAllJsonPaths } from "$ts/hierarchy";
import { BRBLACK, BRPURPLE, RESET } from "$ts/terminal/store";
import type { AdminCommand } from "../../admin";
import { AdminCommandStore } from "../store";

export const AdminHelp: AdminCommand = async (term, admin) => {
  const paths = getAllJsonPaths(AdminCommandStore).map((p) => p.replaceAll(".", " "));

  for (let i = 0; i < paths.length; i++) {
    term.rl?.println(`${BRPURPLE}${i}${BRBLACK}: ${RESET}${paths[i]}`);
  }

  return 0;
};
