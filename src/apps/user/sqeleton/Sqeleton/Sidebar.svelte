<script lang="ts">
  import type { SqeletonRuntime } from "../runtime";
  import Queries from "./Sidebar/Queries.svelte";
  import Tables from "./Sidebar/Tables.svelte";

  const { process }: { process: SqeletonRuntime } = $props();
</script>

<div class="sidebar">
  <Tables {process} />
  <Queries {process} />
</div>
