<script lang="ts">
  import { onMount } from "svelte";
  import type { NewFileRuntime } from "./runtime";
  import { Daemon } from "$ts/server/user/daemon";

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
<div class="bottom">
  <button onclick={() => process.closeWindow()}>Cancel</button>
  <button class="suggested" disabled={!$newFile} onclick={() => process.createFile()}> Create </button>
</div>
