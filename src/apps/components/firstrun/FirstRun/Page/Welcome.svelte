<script lang="ts">
  import type { FirstRunRuntime } from "../../runtime";
  const { process }: { process: FirstRunRuntime } = $props();
</script>

<img src={process.getIconCached("WaveIcon")} alt="" />
<h1>%welcome._name%</h1>
<p>%welcome.subtitle%</p>
