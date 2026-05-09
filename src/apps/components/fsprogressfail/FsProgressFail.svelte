<script lang="ts">
  import type { IFsProgressFailRuntime } from "$interfaces/runtimes/IFsProgressFailRuntime";

  const { process }: { process: IFsProgressFailRuntime } = $props();
  const { title, icon, errors } = process;
</script>

<div class="header">
  <img src={icon} alt="" />
  <h1>{title}</h1>
  <p>This file operation encountered an error.</p>
</div>
<div class="errors">
  {#each errors as error}
    <div class="error">
      <img src={process.getIconCached("BadStatusIcon")} alt="" />
      <span>{error}</span>
    </div>
  {/each}
</div>
<button class="suggested" onclick={() => process.closeWindow()}>Okay</button>
