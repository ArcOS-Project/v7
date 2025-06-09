<script lang="ts">
  import type { FileManagerRuntime } from "../runtime";
  import Address from "./AddressBar/Address.svelte";
  import CutCopyPaste from "./AddressBar/CutCopyPaste.svelte";
  import UpDownLoad from "./AddressBar/UpDownLoad.svelte";

  const { process }: { process: FileManagerRuntime } = $props();
  const { virtual } = process;
</script>

<div class="address-bar">
  <div class="portion address" class:virtual={$virtual}>
    <button
      class="parent lucide icon-arrow-up"
      aria-label="Parent Directory"
      title="Parent directory"
      onclick={() => process.parentDir()}
      disabled={!!$virtual}
    ></button>
    <Address {process} />
  </div>
  {#if !$virtual}
    {#if !process.loadSave}
      <div class="sep"></div>
      <CutCopyPaste {process} />
      <div class="sep"></div>
    {/if}
    <UpDownLoad {process} />
  {/if}
</div>
