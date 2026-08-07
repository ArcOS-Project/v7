<script lang="ts">
  import type { INewFileRuntime } from "$interfaces/runtimes/INewFileRuntime";
  import Icon from "$lib/Icon.svelte";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import { Daemon } from "$ts/env";
  import { onMount } from "svelte";

  const { process }: { process: INewFileRuntime } = $props();
  const { newFile } = process;

  let icon = $state<string>("DefaultMimeIcon");

  onMount(() => {
    newFile.subscribe((v) => {
      const info = Daemon?.assoc?.getFileAssociation(v);
      icon = info?.icon || "DefaultMimeIcon";
    });
  });
</script>

<div class="top">
  <Icon {icon} />
  <div class="right">
    <h1>%apps.FsNewFile.title%</h1>
    <p>%apps.FsNewFile.subtitle%</p>
    <input type="text" bind:value={$newFile} />
  </div>
</div>

<ActionBar>
  {#snippet rightContent()}
    <ActionButton onclick={() => process.closeWindow()}>%general.cancel%</ActionButton>
    <ActionButton suggested disabled={!$newFile} onclick={() => process.createFile()}>%apps.FsNewFile.create%</ActionButton>
  {/snippet}
</ActionBar>
