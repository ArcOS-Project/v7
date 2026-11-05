<script lang="ts">
  import type { BugReport } from "$types/server/bughunt";

  let { props }: { props: { report: BugReport } } = $props();
</script>

<div class="value location">
  {JSON.stringify(props.report.location, null, 2)}
</div>
