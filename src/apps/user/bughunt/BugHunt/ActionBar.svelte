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
      ></button>
      <button
        class="lucide icon-braces"
        aria-label="View user data"
        disabled={!report.userData}
        onclick={() => process.userData()}
      ></button>
      <button
        class="lucide icon-file-text"
        aria-label="View body"
        disabled={!report.body}
        onclick={() => process.notImplemented("Viewing report body")}
      ></button>
      <div class="sep"></div>
      <button class="lucide icon-save" aria-label="Save JSON" onclick={() => process.notImplemented("Exporting reports")}
      ></button>
      <button class="lucide icon-refresh-cw" aria-label="Refresh" onclick={() => process.invalidateCaches(true)}></button>
    </div>
  {/if}
</div>
