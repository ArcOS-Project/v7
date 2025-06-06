<script lang="ts">
  import type { BugReport } from "$types/bughunt";
  import type { BugHuntRuntime } from "../runtime";

  const { process, report }: { process: BugHuntRuntime; report: BugReport | undefined } = $props();
</script>

<div class="actionbar">
  <button class="create suggested" onclick={() => process.newReport()}>
    <span class="lucide icon-plus"></span>
    <span>New report...</span>
  </button>
  {#if report}
    <div class="actions">
      <button
        class="lucide icon-scroll-text"
        aria-label="View logs"
        disabled={!report.logs.length}
        onclick={() => process.viewLogs()}
        title="View logs"
      ></button>
      <button
        class="lucide icon-braces"
        aria-label="View user data"
        disabled={!report.userData}
        onclick={() => process.userData()}
        title="View user data"
      ></button>

      <button class="lucide icon-save" aria-label="Save JSON" onclick={() => process.exportReport()} title="Export bug report..."
      ></button>
      <div class="sep"></div>
      <button
        class="lucide icon-refresh-cw"
        aria-label="Refresh"
        onclick={() => process.invalidateCaches(true)}
        title="Refresh caches"
      ></button>
    </div>
  {/if}
</div>
