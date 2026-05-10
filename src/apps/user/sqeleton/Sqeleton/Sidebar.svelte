<script lang="ts">
  import type { ISqeletonRuntime } from "$interfaces/runtimes/ISqeletonRuntime";
  import Queries from "./Sidebar/Queries.svelte";
  import Tables from "./Sidebar/Tables.svelte";

  const { process }: { process: ISqeletonRuntime } = $props();
</script>

<div class="sidebar">
  <Tables {process} />
  <Queries {process} />
</div>
