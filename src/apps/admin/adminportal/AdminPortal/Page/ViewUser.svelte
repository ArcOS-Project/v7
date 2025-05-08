<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import type { UserStatistics } from "$types/admin";
  import { onMount } from "svelte";
  import type { AdminPortalRuntime } from "../../runtime";
  import type { ViewUserData } from "../../types";
  import Filesystem from "./ViewUser/Filesystem.svelte";
  import Identity from "./ViewUser/Identity.svelte";
  import Shares from "./ViewUser/Shares.svelte";
  import ChangeEmail from "./ViewUser/ChangeEmail.svelte";
  import ChangePassword from "./ViewUser/ChangePassword.svelte";

  const { process, data }: { process: AdminPortalRuntime; data: ViewUserData } = $props();
  const { user } = data;

  let statistics: UserStatistics | undefined = $state();

  onMount(async () => {
    statistics = await process.admin.getStatisticsOf(user._id);
  });
</script>

<div class="leftpanel">
  <Identity {user} />
  <Filesystem {user} {process} />
  <Shares {user} {process} />
</div>
<div class="rightpanel">
  <div class="statistics">
    {#if statistics}
      {#each Object.entries(statistics) as [what, count]}
        <div class="statistic">
          <h1>{what}</h1>
          <p class="big-value">{count}</p>
        </div>
      {/each}
    {:else}
      <Spinner height={32} />
    {/if}
  </div>
  <div class="split">
    <div class="resets">
      <ChangeEmail {process} {user} />
      <ChangePassword {process} {user} />
    </div>
    <div class="quick-actions">
      <button class="lucide icon-log-out" aria-label="Log out"></button>
      <button class="lucide icon-user-minus" aria-label="Disapprove"></button>
      <button class="lucide icon-shield-plus" aria-label="Grant admin"></button>
    </div>
  </div>
</div>
