<script lang="ts">
  import type { FirstRunRuntime } from "../../runtime";
  const { process }: { process: FirstRunRuntime } = $props();
</script>

<img src={process.getIconCached("GoodStatusIcon")} alt="" />
<h1>%finish.title%</h1>
<p>%finish.subtitle%</p>
