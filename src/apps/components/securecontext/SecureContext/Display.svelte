<script lang="ts">
  import Icon from "$lib/Icon.svelte";
  import type { ElevationData } from "$types/elevation";
<<<<<<< HEAD

  const { data }: { data: ElevationData } = $props();
=======
  import type { ISecureContextRuntime } from "$interfaces/runtimes/ISecureContextRuntime";

  const { data, process }: { data: ElevationData; process: ISecureContextRuntime } = $props();
>>>>>>> development
</script>

<div class="display">
  <Icon icon={data.image} />
  <div class="context">
    <p class="title">{data.title}</p>
    <p class="description">{data.description}</p>
  </div>
</div>
