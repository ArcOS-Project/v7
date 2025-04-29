<script lang="ts">
  import type { BugReport } from "$types/bughunt";

  const { report }: { report: BugReport } = $props();
</script>

<div class="property provided">
  <p class="key">Options</p>
  <div class="value">
    <div class="item" class:active={report.public}>Public</div>
    <div class="item" class:active={report.resolved}>Resolved</div>
    <div class="item" class:active={report.closed}>Closed</div>
    <div class="item" class:active={report.userData}>User data</div>
  </div>
</div>
