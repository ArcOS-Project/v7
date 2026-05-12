<script lang="ts">
  import type { IFirstRunRuntime } from "$interfaces/runtimes/IFirstRunRuntime";
  const { process }: { process: IFirstRunRuntime } = $props();
</script>

<img src={process.getIconCached("WaveIcon")} alt="" />
<h1>Welcome to ArcOS!</h1>
<p>Let's customize your account.</p>
