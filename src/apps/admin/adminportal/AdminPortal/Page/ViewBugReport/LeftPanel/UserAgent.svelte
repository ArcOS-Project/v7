<script lang="ts">
  import type { BugReport } from "$types/bughunt";

  const { report }: { report: BugReport } = $props();
</script>

<div class="property useragent">
  <p class="key">UserAgent</p>
  <p class="value">{report.userAgent || "no user agent"}</p>
</div>
