<script lang="ts">
  import type { FirstRunRuntime } from "../../runtime";
  const { process }: { process: FirstRunRuntime } = $props();
</script>

<img src={process.getIconCached("AppStoreIcon")} alt="" />
<h1>%thirdParty.title%</h1>
<p>%thirdParty.subtitle%</p>
