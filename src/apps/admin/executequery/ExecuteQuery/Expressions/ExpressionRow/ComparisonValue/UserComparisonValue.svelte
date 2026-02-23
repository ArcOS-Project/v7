<script lang="ts">
  import type { ExecuteQueryRuntime } from "$apps/admin/executequery/runtime";

  const { process, i }: { process: ExecuteQueryRuntime; i: number } = $props();
  const { selectedSource, expressions, users } = process;
</script>

<select bind:value={$expressions[$selectedSource][i].comparisonValue} placeholder="Select user...">
  <option value="" disabled selected></option>
  {#each users as user (user._id)}
    <option value={user._id}>{user.username}</option>
  {/each}
</select>
