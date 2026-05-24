<script lang="ts">
  import type { IFsProgressFailRuntime } from "$interfaces/runtimes/IFsProgressFailRuntime";
<<<<<<< HEAD
  import Icon from "$lib/Icon.svelte";
=======
>>>>>>> development

  const { process }: { process: IFsProgressFailRuntime } = $props();
  const { title, icon, errors } = process;
</script>

<div class="header">
  <Icon {icon} />
  <h1>{title}</h1>
  <p>This file operation encountered an error.</p>
</div>
<div class="errors">
  {#each errors as error}
    <div class="error">
      <Icon icon="BadStatusIcon" />
      <span>{error}</span>
    </div>
  {/each}
</div>
<button class="suggested" onclick={() => process.closeWindow()}>Okay</button>
