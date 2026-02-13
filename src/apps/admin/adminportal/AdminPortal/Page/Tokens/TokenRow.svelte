<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/admin";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { MessageBox } from "$ts/dialog";
  import { Daemon } from "$ts/server/user/daemon";
  import { Sleep } from "$ts/sleep";
  import type { ExpandedToken } from "$types/admin";
  import dayjs from "dayjs";
  import Cookies from "js-cookie";
  import { UAParser } from "ua-parser-js";

  const { token, process }: { token: ExpandedToken; process: IAdminPortalRuntime } = $props();
  const { redacted } = process;
  const parsed = UAParser(token.userAgent);
  const lastUsed = dayjs(token.lastUsed).format("D MMM YYYY, HH:mm");

  async function useToken() {
    MessageBox(
      {
        title: "Are you sure?",
        message:
          "This replaces your current token with this user's token, causing you to log in as this user. You really should NEVER do this unless you have some justifiable reason.",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Log In As",
            suggested: true,
            action: async () => {
              await Daemon?.power?.logoff();
              await Sleep(3000);
              const cookieOptions = {
                expires: 14,
                domain: import.meta.env.DEV ? "localhost" : location.hostname,
              };
              Cookies.set("arcToken", token.value, cookieOptions);
              Cookies.set("arcUsername", token.user?.username!, cookieOptions);
              Daemon!.STATE = "running";
              await Daemon?.power?.restart();
            },
          },
        ],
        image: "ElevationIcon",
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );
  }
</script>

<div class="row">
  <div class="segment icon">
    <span class="lucide icon-key"></span>
  </div>
  <div class="segment author" class:redacted={token.user && $redacted}>
    {#if token.user}
      <ProfilePicture height={20} fallback={token.user.profile.profilePicture} />
      <button class="link" onclick={() => process.switchPage("viewUser", { user: token.user })}>{token.user.username}</button>
    {:else}
      Stranger
    {/if}
  </div>
  <div class="segment browser">
    {parsed.browser.name}
    {parsed.browser.version}
  </div>
  <div class="segment os">
    {parsed.os.name}
    {parsed.os.version}
  </div>
  <div class="segment last-used">
    {lastUsed}
  </div>
  <div class="segment times-used">
    {token.timesUsed}
  </div>
  <div class="segment actions">
    <button class="delete clr-orange" onclick={useToken}>Use...</button>
    <button class="delete clr-red">Delete</button>
  </div>
</div>
