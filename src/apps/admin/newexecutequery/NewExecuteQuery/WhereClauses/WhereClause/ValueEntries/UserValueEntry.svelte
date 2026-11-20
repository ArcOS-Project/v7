<script lang="ts">
  import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";

  let { process, i }: { process: INewExecuteQueryRuntime; i: number } = $props();
  const { whereClauses, selectedCollection, users } = process;
</script>

<select bind:value={$whereClauses[$selectedCollection][i].value}>
  <option value="" selected disabled>(select user)</option>
  {#each users as user (user._id)}
    <option value={user._id}>{user.username}</option>
  {/each}
</select>
