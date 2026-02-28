<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import { Daemon } from "$ts/daemon";
  import { onMount } from "svelte";
  import type { NewFileRuntime } from "./runtime";

  const { process }: { process: NewFileRuntime } = $props();
  const { newFile } = process;

  let icon = $state<string>(process.getIconCached("DefaultMimeIcon"));

  onMount(() => {
    newFile.subscribe((v) => {
      const info = Daemon?.assoc?.getFileAssociation(v);
      icon = info?.icon || process.getIconCached("DefaultMimeIcon");
    });
  });
</script>

<div class="top">
  <img src={icon} alt="" />
  <div class="right">
    <h1>New file</h1>
    <p>Think of a wonderful name for this new file:</p>
    <input type="text" bind:value={$newFile} />
  </div>
</div>

<ActionBar>
  {#snippet rightContent()}
    <ActionButton onclick={() => process.closeWindow()}>Cancel</ActionButton>
    <ActionButton suggested disabled={!$newFile} onclick={() => process.createFile()}>Create</ActionButton>
  {/snippet}
</ActionBar>
