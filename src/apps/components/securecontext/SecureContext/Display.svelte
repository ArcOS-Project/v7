<script lang="ts">
  import type { ElevationData } from "$types/elevation";

  const { data }: { data: ElevationData } = $props();
</script>

<div class="display">
  <img src={data.image} alt={data.title} />
  <div class="context">
    <p class="title">{data.title}</p>
    <p class="description">{data.description}</p>
  </div>
</div>
