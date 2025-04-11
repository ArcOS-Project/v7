<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import type { BugHuntRuntime } from "../runtime";

  const { process }: { process: BugHuntRuntime } = $props();
  const { currentTab, loading, store, selectedReport } = process;
</script>

<div class="sidebar">
  <div class="tabs">
    <button class="tab private" onclick={() => process.changeTab("private")} class:suggested={$currentTab === "private"}>
      Yours
    </button>
    <button class="tab public" onclick={() => process.changeTab("public")} class:suggested={$currentTab === "public"}>
      Public
    </button>
  </div>
  <div class="selector">
    {#if !$loading}
      {#each $store as report (report._id)}
        <button class="report" onclick={() => ($selectedReport = report._id!)} class:selected={$selectedReport === report._id}>
          <span class="lucide icon-bug"></span>
          <div>
            <h1>{report.title}</h1>
            <p>{report.createdAt}</p>
          </div>
        </button>
      {/each}
    {:else}
      <Spinner height={32} />
    {/if}
  </div>
</div>
