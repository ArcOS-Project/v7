<script lang="ts">
  import type { INewFolderRuntime } from "$interfaces/runtimes/INewFolderRuntime";
  import Icon from "$lib/Icon.svelte";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";

  const { process }: { process: INewFolderRuntime } = $props();
  const { newFolder } = process;
</script>

<div class="top">
  <Icon icon="FolderIcon" />
  <div class="right">
    <h1>%apps.FsNewFolder.title%</h1>
    <p>%apps.FsNewFile.subtitle%</p>
    <input type="text" bind:value={$newFolder} />
  </div>
</div>

<ActionBar>
  {#snippet rightContent()}
    <ActionButton onclick={() => process.closeWindow()}>%general.cancel%</ActionButton>
    <ActionButton suggested disabled={!$newFolder} onclick={() => process.createFolder()}>%apps.FsNewFolder.create%</ActionButton>
  {/snippet}
</ActionBar>
