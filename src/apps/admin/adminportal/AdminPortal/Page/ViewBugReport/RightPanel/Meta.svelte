<script lang="ts">
  import type { BugReport } from "$types/server/bughunt";

  let { props }: { props: { report: BugReport } } = $props();
</script>

<div class="value meta">
  {JSON.stringify(props.report.meta, null, 2)}
</div>
