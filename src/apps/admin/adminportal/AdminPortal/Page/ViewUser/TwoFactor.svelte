<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/admin";
  import { MessageBox } from "$ts/util/dialog";
  import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
  import type { UserTotp } from "$types/admin";
  import type { ExpandedUserInfo } from "$types/user";
  import { onMount } from "svelte";

  const { process, user }: { process: IAdminPortalRuntime; user: ExpandedUserInfo } = $props();

  let loading = $state<boolean>(true);
  let totp = $state<UserTotp>();

  onMount(async () => {
    totp = await process.admin.getTotpOf(user.username);
    loading = false;
  });

  function disableTotp() {
    MessageBox(
      {
        title: "Disable two-factor authentication?",
        message:
          "Are you sure you want to disable 2FA for this user? Only ever do this if they can't access their codes anymore.",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Disable",
            action: async () => {
              await process.admin.deActivateTotpOf(user.username);
              process.switchPage("viewUser", { user: await process.admin.getUserByUsername(user.username) }, true);
            },
            suggested: true,
          },
        ],
        image: "SecurityMediumIcon",
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );
  }

  function deleteTotp() {
    MessageBox(
      {
        title: "Delete two-factor authentication?",
        message:
          "Are you sure you want to delete the 2FA node for this user? Only ever do this if they can't access their codes anymore.",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Delete",
            action: async () => {
              await process.admin.deleteTotpOf(user.username);
              process.switchPage("viewUser", { user: await process.admin.getUserByUsername(user.username) }, true);
            },
            suggested: true,
          },
        ],
        image: "SecurityHighIcon",
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );
  }

  function viewTotp() {
    MessageBox(
      {
        title: "2FA of " + user.username,
        message: `<ul><li>Secret: ${totp?.secret}</li><li>URL: ${totp?.url}</li></ul>`,
        image: "ElevationIcon",
        sound: "arcos.dialog.info",
        buttons: [
          { caption: "Copy secret", action: () => navigator.clipboard.writeText(totp?.secret!) },
          { caption: "Copy URL", action: () => navigator.clipboard.writeText(totp?.url!) },
          { caption: "Okay", action: () => {}, suggested: true },
        ],
      },
      process.pid,
      true
    );
  }
</script>

{#if process.admin.canAccess(AdminScopes.adminTotpGetUser)}
  <div class="section totp">
    <h1>Two-factor authentication</h1>
    <div>
      <div class="status" class:enabled={totp?.activated} class:disabled={!totp?.activated}>
        {totp?.activated ? "Enabled" : totp ? "Disabled" : "Not present"}
      </div>
      <button class:clr-orange={totp?.activated} disabled={!totp?.activated} onclick={disableTotp}>Disable</button>
      <button class:clr-red={!!totp} disabled={!totp} onclick={deleteTotp}>Delete</button>
      <button disabled={!totp?.activated} onclick={viewTotp}>View...</button>
    </div>
  </div>
{/if}
