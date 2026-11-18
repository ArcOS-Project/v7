<script lang="ts">
  import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";

  let { process, i }: { process: INewExecuteQueryRuntime; i: number } = $props();
  const { whereClauses, selectedCollection } = process;
</script>

<label for="">
  <input type="checkbox" bind:checked={$whereClauses[$selectedCollection][i].value as boolean} />
  <span>{!!$whereClauses[$selectedCollection][i].value}</span>
</label>
