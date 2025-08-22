<script lang="ts">
  import type { BugReport } from "$types/bughunt";

  const { report }: { report: BugReport } = $props();
</script>

<div class="property server">
  <p class="key">Server</p>
  <p class="value">{report.api || "no server"}</p>
</div>
