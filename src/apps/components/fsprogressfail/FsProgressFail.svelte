<script lang="ts">
  import type { FsProgressFailRuntime } from "./runtime";

  const { process }: { process: FsProgressFailRuntime } = $props();
  const { title, icon, errors } = process;
</script>

<div class="header">
  <img src={icon} alt="" />
  <h1>{title}</h1>
  <p>%apps.FsProgressFail.subtitle%</p>
</div>
<div class="errors">
  {#each errors as error}
    <div class="error">
      <img src={process.getIconCached("BadStatusIcon")} alt="" />
      <span>{error}</span>
    </div>
  {/each}
</div>
<button class="suggested" onclick={() => process.closeWindow()}>%general.okay%</button>
