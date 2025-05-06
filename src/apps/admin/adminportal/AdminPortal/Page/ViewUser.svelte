<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import type { UserStatistics } from "$types/admin";
  import { onMount } from "svelte";
  import type { AdminPortalRuntime } from "../../runtime";
  import type { ViewUserData } from "../../types";
  import Filesystem from "./ViewUser/Filesystem.svelte";
  import Identity from "./ViewUser/Identity.svelte";
  import Shares from "./ViewUser/Shares.svelte";

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
  <div class="quick-actions">
    <button>Log out</button>
    <button>Disapprove</button>
    <button>Grant Admin</button>
  </div>
  <div class="section username">
    <h1>Rename user</h1>
    <div>
      <input type="text" placeholder={user.username} />
      <div class="buttons">
        <button class="suggested">Change</button>
      </div>
    </div>
  </div>
  <div class="section email">
    <h1>Change email</h1>
    <div>
      <input type="email" placeholder={user.email} />
      <div class="buttons">
        <button class="suggested">Change</button>
      </div>
    </div>
  </div>
  <div class="section password">
    <h1>Change password</h1>
    <div>
      <input type="password" />
      <div class="buttons">
        <button>Generate</button>
        <button class="suggested">Change</button>
      </div>
    </div>
  </div>
</div>
