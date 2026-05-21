<script lang="ts">
  import type { IExecuteQueryRuntime } from "$interfaces/runtimes/IExecuteQueryRuntime";

  const { process, i }: { process: IExecuteQueryRuntime; i: number } = $props();
  const { selectedSource, expressions, users } = process;
</script>

<select bind:value={$expressions[$selectedSource][i].comparisonValue} placeholder="Select user...">
  <option value="" disabled selected></option>
  {#each users as user (user._id)}
    <option value={user._id}>{user.username}</option>
  {/each}
</select>
