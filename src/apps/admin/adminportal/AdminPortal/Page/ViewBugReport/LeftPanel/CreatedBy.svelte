<script lang="ts">
  import type { BugReport } from "$types/bughunt";
  import dayjs from "dayjs";

  const { report }: { report: BugReport } = $props();
  let timestamp = dayjs(report.createdAt).format("MMMM D, YYYY hh:mm A");
</script>

<div class="property createdby">
  <p class="key">Created By</p>
  <p class="value">{report.userData?.username || "no user"} on {timestamp}</p>
</div>
