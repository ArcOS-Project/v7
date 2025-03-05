<script lang="ts">
  import { DefaultMimeIcon } from "$ts/images/mime";
  import { onMount } from "svelte";
  import type { NewFileRuntime } from "../../newfile/runtime";

  const { process }: { process: NewFileRuntime } = $props();
  const { newFile } = process;

  let icon = $state<string>(DefaultMimeIcon);

  onMount(() => {
    newFile.subscribe((v) => {
      icon = process.userDaemon?.getMimeIconByFilename(v) || DefaultMimeIcon;
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
  <button
    class="suggested"
    disabled={!$newFile}
    onclick={() => process.createFile()}
  >
    Create
  </button>
</div>
