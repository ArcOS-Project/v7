<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import Spinner from "$lib/Spinner.svelte";
  import type { ReadableStore } from "$ts/writable";
  import type { BugReport } from "$types/bughunt";
  import { onMount } from "svelte";
  import ViewBugReport from "../ViewBugReport.svelte";

  const { process, id, quickView }: { process: AdminPortalRuntime; id: string; quickView: ReadableStore<string> } = $props();
  let report = $state<BugReport>();
  let loading = $state<boolean>(true);

  onMount(async () => {
    report = await process.admin.getBugReport(id);

    loading = false;
  });
</script>

<div class="quick-view viewBugReport">
  <div class="page-content" class:loading>
    {#if loading}
      <Spinner height={32} />
    {:else if report}
      <ViewBugReport {process} data={{ report }} />
    {:else}
      404
    {/if}
  </div>
  <button class="close icon-x" aria-label="Close" onclick={() => ($quickView = "")}></button>
</div>
