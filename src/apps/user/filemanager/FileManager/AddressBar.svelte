<script lang="ts">
  import type { FileManagerRuntime } from "../runtime";
  import Address from "./AddressBar/Address.svelte";
  import CutCopyPaste from "./AddressBar/CutCopyPaste.svelte";
  import UpDownLoad from "./AddressBar/UpDownLoad.svelte";

  const { process }: { process: FileManagerRuntime } = $props();
</script>

<div class="address-bar">
  <div class="portion address">
    <button
      class="parent lucide icon-arrow-up"
      aria-label="Parent Directory"
      onclick={() => process.parentDir()}
    ></button>
    <Address {process} />
  </div>
  <div class="sep"></div>
  <CutCopyPaste {process} />
  <div class="sep"></div>
  <UpDownLoad {process} />
</div>
