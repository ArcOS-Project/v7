<script lang="ts">
  import type { IProcessManagerRuntime } from "$interfaces/runtimes/IProcessManagerRuntime";
  import type { GlobalDispatchProcessSummary } from "$types/system/dispatch";
  import type { ExpandedUserInfo } from "$types/user";
  import { onMount } from "svelte";
  import UserRow from "./AllUsersTree/UserRow.svelte";

  const { process }: { process: IProcessManagerRuntime } = $props();

  let summary = $state<GlobalDispatchProcessSummary>();
  let loading = $state<boolean>(false);
  let users: ExpandedUserInfo[] = $state([]);

  onMount(() => {
    refresh();
  });

  export async function refresh() {
    const summaryResult = await process.adminBootstrapper.getDispatchProcessesSummary();
    if (!summaryResult.success) {
      // handle error
    }

    users = await process.adminBootstrapper.getAllUsers();
    summary = summaryResult.result!;
    loading = false;
  }
</script>

<div class="process-tree">
  {#if summary}
    {#each Object.keys(summary) as userId (userId)}
      <UserRow {userId} clients={summary[userId]} user={users.find((u) => u._id === userId)!} />
    {/each}
  {/if}
</div>
