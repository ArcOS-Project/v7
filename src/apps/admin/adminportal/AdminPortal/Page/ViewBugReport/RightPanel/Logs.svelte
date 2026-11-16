<script lang="ts">
  import { stringifyLogs } from "$ts/util/admin";
  import type { BugReport } from "$types/server/bughunt";

  let { props }: { props: { report: BugReport } } = $props();
</script>

<div class="value logs">
  {#if props.report?.logs?.length}
    {stringifyLogs(props.report.logs)}
  {:else}
    <p class="error-text">No logs</p>
  {/if}
</div>
