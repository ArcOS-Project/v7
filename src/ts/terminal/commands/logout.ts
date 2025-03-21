import type { TerminalCommand } from "$types/terminal";

export const LogoutCommand: TerminalCommand = {
  keyword: "logout",
  async exec(term, flags, argv) {
    term.daemon?.logoff();
    return -256;
  },
  description: "Log out of ArcOS",
};
