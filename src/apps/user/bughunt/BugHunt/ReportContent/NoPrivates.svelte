<script lang="ts">
  import { BugReportIcon } from "$ts/images/general";
  import type { BugHuntRuntime } from "../../runtime";
  const { process }: { process: BugHuntRuntime } = $props();
</script>

<div class="center-notice">
  <img src={BugReportIcon} alt="" />
  <h1>No bug reports!</h1>
  <p>There are no bug reports in your account! If you want, you can submit your first one here:</p>
  <button onclick={() => process.newReport()}>Submit a bug</button>
</div>
