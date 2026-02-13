<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/admin";
  import Spinner from "$lib/Spinner.svelte";
  import { MessageBox } from "$ts/dialog";
  import { AdminScopes } from "$ts/server/admin/store";
  import type { UserStatistics } from "$types/admin";
  import { onMount } from "svelte";
  import type { ViewUserData } from "../../types";
  import ChangeEmail from "./ViewUser/ChangeEmail.svelte";
  import ChangePassword from "./ViewUser/ChangePassword.svelte";
  import ChangeQuota from "./ViewUser/ChangeQuota.svelte";
  import Filesystem from "./ViewUser/Filesystem.svelte";
  import Identity from "./ViewUser/Identity.svelte";
  import Reports from "./ViewUser/Reports.svelte";
  import Shares from "./ViewUser/Shares.svelte";
  import TwoFactor from "./ViewUser/TwoFactor.svelte";

  const { process, data }: { process: IAdminPortalRuntime; data: ViewUserData } = $props();
  const { redacted } = process;
  const { user, reports } = data;

  let statistics: UserStatistics | undefined = $state();

  onMount(async () => {
    if (!user) return;

    statistics = await process.admin.getStatisticsOf(user._id);
  });

  function logout() {
    MessageBox(
      {
        title: "Log out user?",
        message: "Are you sure you want to invalidate all of this user's tokens? They'll have to log in again everywhere.",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Confirm",
            action: async () => {
              await process.admin.purgeUserTokens(user._id.toString());

              process.switchPage("viewUser", { user: await process.admin.getUserByUsername(user.username) }, true);
            },
            suggested: true,
          },
        ],
        image: "PasswordIcon",
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );
  }

  function toggleApproved() {
    MessageBox(
      {
        title: user.approved ? "Disapprove user?" : "Approve user?",
        message: user.approved
          ? "Are you sure you want to disapprove this user? They'll have to be manually approved again should they need to regain access to their account."
          : "Are you sure you want to manually approve this user? This goes against the core principle of email activation: never approve spam accounts!",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: user.approved ? "Disapprove" : "Approve",
            suggested: true,
            action: async () => {
              if (user.approved) await process.admin.disapproveUser(user.username);
              else await process.admin.approveUser(user.username);

              process.switchPage("viewUser", { user: await process.admin.getUserByUsername(user.username) }, true);
            },
          },
        ],
        image: "SecurityLowIcon",
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );
  }
  function toggleAdmin() {
    MessageBox(
      {
        title: user.admin ? "Revoke admin?" : "Grant admin?",
        message: user.admin
          ? "Are you absolutely certain you wish to revoke the administrative privileges from this user? If this action is unjust your privileges may be revoked."
          : "This might be a security vulnerability. Are you sure you want to grant this user admin? ArcOS could be comprimised if this person has any malicious intent.",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: user.admin ? "Revoke" : "Grant",
            suggested: true,
            action: async () => {
              if (user.admin) await process.admin.revokeAdmin(user.username);
              else await process.admin.grantAdmin(user.username);

              process.switchPage("viewUser", { user: await process.admin.getUserByUsername(user.username) }, true);
            },
          },
        ],
        image: "SecurityLowIcon",
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );
  }

  async function deleteUser() {
    MessageBox(
      {
        title: "Delete user?",
        message: "Are you sure you want to delete this user? THIS CANNOT BE REVERTED!",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Delete",
            action: async () => {
              await process.admin.deleteUser(user.username);
              process.switchPage("users");
            },
            suggested: true,
          },
        ],
        image: "TrashIcon",
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );
  }

  function copy() {
    MessageBox(
      {
        title: `Copy from ${user.username}`,
        message:
          "Choose the information that you would like to copy from this user. It goes without saying that none of this should ever be pasted anywhere except the team, so <b>be careful</b>.",
        buttons: [
          { caption: "ID", action: () => navigator.clipboard.writeText(user._id) },
          { caption: "Username", action: () => navigator.clipboard.writeText(user.username) },
          { caption: "Email address", action: () => navigator.clipboard.writeText(user.email) },
          { caption: "Preferences", action: () => navigator.clipboard.writeText(JSON.stringify(user.preferences, null, 2)) },
          { caption: "Cancel", action: () => {}, suggested: true },
        ],
        image: "ElevationIcon",
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );
  }
</script>

{#if !user}
  <p class="error-text">USER_NOT_FOUND</p>
{:else}
  <div class="leftpanel">
    <Identity {user} {redacted} />
    <Filesystem {user} {process} />
    <Shares {user} {process} />
    <Reports {user} {reports} {process} />
  </div>
  <div class="rightpanel">
    <div class="statistics" class:centered={!statistics || !process.admin.canAccess(AdminScopes.adminStats)}>
      {#if statistics}
        {#each Object.entries(statistics) as [what, count]}
          <div class="statistic">
            <h1>{what}</h1>
            <p class="big-value">{count}</p>
          </div>
        {/each}
      {:else if !process.admin.canAccess(AdminScopes.adminStats)}
        <p class="error-text">NO_BUGHUNT_STAT_PERMISSION</p>
      {:else}
        <Spinner height={32} />
      {/if}
    </div>
    <div class="split">
      <div class="resets">
        <ChangeEmail {process} {user} />
        <ChangePassword {process} {user} />
        <ChangeQuota {process} {user} />
        <TwoFactor {process} {user} />
      </div>
      <div class="quick-actions">
        <button
          class="lucide icon-log-out"
          aria-label="Log out"
          onclick={logout}
          disabled={!user.approved || !process.admin.canAccess(AdminScopes.adminTokensPurgeUserDelete)}
          title="Log user out"
        ></button>
        <button class="lucide icon-copy" aria-label="Copy..." onclick={copy} title="Copy..."></button>
        <button
          class="lucide icon-user-minus"
          class:icon-user-plus={!user.approved}
          aria-label={user.approved ? "Disapprove" : "Approve"}
          onclick={toggleApproved}
          title={user.approved ? "Disapprove" : "Approve"}
          disabled={!process.admin.canAccess(user.approved ? AdminScopes.adminUsersDisapprove : AdminScopes.adminUsersApprove)}
        ></button>
        <button
          class="lucide icon-shield-minus"
          class:icon-shield-plus={!user.admin}
          aria-label={user.admin ? "Revoke admin" : "Grant admin"}
          title={user.admin ? "Revoke admin" : "Grant admin"}
          onclick={toggleAdmin}
          disabled={!user.approved || !process.admin.canAccess(user.admin ? AdminScopes.adminRevoke : AdminScopes.adminGrant)}
        ></button>
        <button
          class="clr-red lucide icon-trash-2"
          aria-label="Delete user"
          title="Delete user"
          onclick={deleteUser}
          disabled={!process.admin.canAccess(AdminScopes.adminUsersDelete)}
        ></button>
      </div>
    </div>
  </div>
{/if}
