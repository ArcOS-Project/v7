<script lang="ts">
  import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";

  let { process, i }: { process: INewExecuteQueryRuntime; i: number } = $props();
  const { whereClauses, selectedCollection } = process;
</script>

<input class="hierarchy-value" bind:value={$whereClauses[$selectedCollection][i].value} placeholder="Value..." />
