<script lang="ts">
  import type { FirstRunRuntime } from "../../runtime";
  const { process }: { process: FirstRunRuntime } = $props();
</script>

<img src={process.getIconCached("WaveIcon")} alt="" />
<h1>Welcome to ArcOS!</h1>
<p>Let's customize your account.</p>
