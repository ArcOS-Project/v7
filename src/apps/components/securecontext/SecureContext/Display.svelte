<script lang="ts">
  import type { ElevationData } from "$types/elevation";
  import type { SecureContextRuntime } from "../runtime";

  const { data, process }: { data: ElevationData; process: SecureContextRuntime } = $props();
</script>

<div class="display">
  <img src={process.getIconCached(data.image) || data.image} alt={data.title} />
  <div class="context">
    <p class="title">{data.title}</p>
    <p class="description">{data.description}</p>
  </div>
</div>
