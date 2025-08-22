<script lang="ts">
  import { QuestionIcon } from "$ts/images/dialog";
  import type { BugHuntRuntime } from "../../runtime";
  const { process }: { process: BugHuntRuntime } = $props();
</script>

<div class="center-notice">
  <img src={QuestionIcon} alt="" />
  <h1>Report not found!</h1>
  <p>The report you're trying to view could not be found. You might want to refresh the cache.</p>
  <button onclick={() => process.invalidateCaches()}>Refresh cache</button>
</div>
