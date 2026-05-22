<script lang="ts">
  import type { IFirstRunRuntime } from "$interfaces/runtimes/IFirstRunRuntime";

  const { process }: { process: IFirstRunRuntime } = $props();
</script>

<img src={process.getIconCached("GoodStatusIcon")} alt="" />
<h1>You're all set!</h1>
<p>Enjoy using ArcOS! If you have any questions or concerns, feel free to talk about them in the Discord.</p>
