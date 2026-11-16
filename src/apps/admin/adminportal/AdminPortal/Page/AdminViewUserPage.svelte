<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import type { UserStatistics } from "$types/server/admin";
  import { onMount } from "svelte";
  import type { ViewUserData } from "../../types";
  import UserChangeEmail from "./ViewUser/UserChangeEmail.svelte";
  import UserChangePassword from "./ViewUser/UserChangePassword.svelte";
  import UserChangeQuota from "./ViewUser/UserChangeQuota.svelte";
  import UserFilesystem from "./ViewUser/UserFilesystem.svelte";
  import UserIdentity from "./ViewUser/UserIdentity.svelte";
  import UserQuickActions from "./ViewUser/UserQuickActions.svelte";
  import UserReports from "./ViewUser/UserReports.svelte";
  import UserShares from "./ViewUser/UserShares.svelte";
  import UserStatisticsComponent from "./ViewUser/UserStatistics.svelte";
  import UserTwoFactor from "./ViewUser/UserTwoFactor.svelte";
  import UserVersioning from "./ViewUser/UserVersioning.svelte";
  import NewTabs from "$lib/NewTabs.svelte";

  const { process, data }: { process: IAdminPortalRuntime; data: ViewUserData } = $props();
  const { redacted } = process;
  const { user, reports } = data;

  let statistics: UserStatistics | undefined = $state();

  onMount(async () => {
    if (!user) return;

    statistics = await process.admin.getStatisticsOf(user._id);
  });
</script>

{#if !user}
  <p class="error-text">USER_NOT_FOUND</p>
{:else}
  <div class="leftpanel">
    <UserIdentity {user} {redacted} />
    <UserFilesystem {user} {process} />
    <NewTabs tabs={{ Shares: UserShares, Reports: UserReports }} noSides flexContent props={{ user, reports }} {process} />
  </div>
  <div class="rightpanel">
    <UserStatisticsComponent {process} {statistics} />
    <div class="split">
      <div class="resets">
        <UserVersioning {data} />
        <UserChangeEmail {process} {user} />
        <UserChangePassword {process} {user} />
        <UserChangeQuota {process} {user} />
        <UserTwoFactor {process} {user} />
      </div>
      <UserQuickActions {process} {user} />
    </div>
  </div>
{/if}
