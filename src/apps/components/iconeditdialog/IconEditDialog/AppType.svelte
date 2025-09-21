<script lang="ts">
  import type { IconEditDialogRuntime } from "../runtime";

  const { process }: { process: IconEditDialogRuntime } = $props();
  const { values, type } = process;
  const apps = process.appStore().buffer();
</script>

<div class="edit type-app">
  <h2>App:</h2>
  <div class="input">
    <select bind:value={$values[$type]}>
      {#each apps as app (app.id)}
        <option value={app.id}>{app.metadata.name} by {app.metadata.author}</option>
      {/each}
    </select>
  </div>
</div>
