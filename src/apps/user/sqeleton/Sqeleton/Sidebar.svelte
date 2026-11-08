<script lang="ts">
  import type { ISqeletonRuntime } from "$interfaces/runtimes/ISqeletonRuntime";
  import Tables from "./Sidebar/Tables.svelte";

  const { process }: { process: ISqeletonRuntime } = $props();
</script>

<div class="sidebar">
  <Tables {process} />
</div>
