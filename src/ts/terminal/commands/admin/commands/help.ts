import { getAllJsonPaths } from "$ts/util/hierarchy";
import { BRBLACK, BRPURPLE, RESET } from "$ts/terminal/store";
import type { AdminCommandType } from "../../admin";
import { AdminCommandStore } from "../store";

export const AdminHelp: AdminCommandType = async (term, admin) => {
  const paths = getAllJsonPaths(AdminCommandStore).map((p) => p.replaceAll(".", " "));

  for (let i = 0; i < paths.length; i++) {
    term.rl?.println(`${BRPURPLE}${i}${BRBLACK}: ${RESET}${paths[i]}`);
  }

  return 0;
};
