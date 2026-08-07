<script lang="ts">
  import type { IFsProgressFailRuntime } from "$interfaces/runtimes/IFsProgressFailRuntime";
  import Icon from "$lib/Icon.svelte";

  const { process }: { process: IFsProgressFailRuntime } = $props();
  const { title, icon, errors } = process;
</script>

<div class="header">
  <Icon {icon} />
  <h1>{title}</h1>
  <p>%apps.FsProgressFail.subtitle%</p>
</div>
<div class="errors">
  {#each errors as error}
    <div class="error">
      <Icon icon="BadStatusIcon" />
      <span>{error}</span>
    </div>
  {/each}
</div>
<button class="suggested" onclick={() => process.closeWindow()}>%general.okay%</button>
