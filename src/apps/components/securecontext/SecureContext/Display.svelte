<script lang="ts">
  import Icon from "$lib/Icon.svelte";
  import type { ElevationData } from "$types/system/elevation";

  const { data }: { data: ElevationData } = $props();
</script>

<div class="display">
  <Icon icon={data.image} />
  <div class="context">
    <p class="title">{data.title}</p>
    <p class="description">{data.description}</p>
  </div>
</div>
