<script lang="ts">
  import type { FirstRunRuntime } from "../../runtime";
  const { process }: { process: FirstRunRuntime } = $props();
</script>

<img src={process.getIconCached("AppStoreIcon")} alt="" />
<h1>Enable third-party apps?</h1>
<p>Do you want to be able to install apps made by other ArcOS users? You can always turn it off later if you change your mind.</p>
