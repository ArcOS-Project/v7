import { getKMod } from "$ts/env";
import { Backend } from "$ts/server/axios";
import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { BOLD, BRBLACK, BRGREEN, BRPURPLE, BRRED, RESET } from "$ts/terminal/store";
import { sha256 } from "$ts/util";
import type { ServerManagerType } from "$types/kernel";
import type { ServerInfo } from "$types/server";

export const AdminServerPing: AdminCommandType = async (term, admin) => {
  try {
    const start = performance.now();
    const response = await Backend.get("/ping");
    const server = getKMod<ServerManagerType>("server");

    if (response.status !== 200) return 3;

    const latency = performance.now() - start;
    const info = response.data as ServerInfo;

    const NONE = `${BRBLACK}(none)${RESET}`;
    const TRUE = `${BRGREEN}Yes${RESET}`;
    const FALSE = `${BRRED}No${RESET}`;

    term.rl?.println(`\r\nSERVER PING -- ${BRGREEN}${BOLD}${server.url}${RESET} (${latency.toFixed(2)}ms)\r\n`);
    term.rl?.println(`${BRPURPLE}Login bottom text    ${BRBLACK}:${RESET} ${info.loginBottomText || NONE}`);
    term.rl?.println(`${BRPURPLE}Login notice         ${BRBLACK}:${RESET} ${info.loginNotice || NONE}`);
    term.rl?.println(`${BRPURPLE}Login wallpaper      ${BRBLACK}:${RESET} ${info.loginWallpaper ? "Supplied" : "Default"}\r\n`);
    term.rl?.println(`${BRPURPLE}Status               ${BRBLACK}:${RESET} ${info.status}`);
    term.rl?.println(
      `${BRPURPLE}Validation           ${BRBLACK}:${RESET} ${info.validation.length} bytes (${(
        await sha256(info.validation)
      ).slice(0, 16)})`
    );
    term.rl?.println(`${BRPURPLE}Registration enabled ${BRBLACK}:${RESET} ${!info.disableRegistration ? TRUE : FALSE}\r\n`);

    return 0;
  } catch {
    return 3;
  }
};
