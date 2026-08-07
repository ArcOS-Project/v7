<script lang="ts">
  import type { IRenameItemRuntime } from "$interfaces/runtimes/IRenameItemRuntime";
  import Icon from "$lib/Icon.svelte";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";

  const { process }: { process: IRenameItemRuntime } = $props();
  const { newName } = process;
</script>

<div class="top">
  <Icon icon="TextEditorIcon" />
  <div class="right">
    <h1>%apps.FsRenameItem.title%</h1>
    <p>%apps.FsRenameItem.subtitle%</p>
    <input type="text" bind:value={$newName} />
  </div>
</div>

<ActionBar>
  {#snippet rightContent()}
    <ActionButton onclick={() => process.closeWindow()}>%general.cancel%</ActionButton>
    <ActionButton suggested disabled={!$newName} onclick={() => process.rename()}>%apps.FsRenameItem.rename%</ActionButton>
  {/snippet}
</ActionBar>
