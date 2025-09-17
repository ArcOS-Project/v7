<script lang="ts">
  import type { BugHuntRuntime } from "../../runtime";
  const { process }: { process: BugHuntRuntime } = $props();
</script>

<div class="center-notice">
  <img src={process.getIconCached("BugReportIcon")} alt="" />
  <h1>Bug Hunt</h1>
  <p>Click on a report to view information about it.</p>
</div>
