<script lang="ts">
  import { onMount } from "svelte";
  import type { NewFileRuntime } from "./runtime";

  const { process }: { process: NewFileRuntime } = $props();
  const { newFile } = process;

  let icon = $state<string>(process.getIconCached("DefaultMimeIcon"));

  onMount(() => {
    newFile.subscribe((v) => {
      const info = process.userDaemon?.assoc?.getFileAssociation(v);
      icon = info?.icon || process.getIconCached("DefaultMimeIcon");
    });
  });
</script>

<div class="top">
  <img src={icon} alt="" />
  <div class="right">
    <h1>%apps.FsNewFile.title%</h1>
    <p>%apps.FsNewFile.subtitle%</p>
    <input type="text" bind:value={$newFile} />
  </div>
</div>
<div class="bottom">
  <button onclick={() => process.closeWindow()}>%general.cancel%</button>
  <button class="suggested" disabled={!$newFile} onclick={() => process.createFile()}> %apps.FsNewFile.create% </button>
</div>
