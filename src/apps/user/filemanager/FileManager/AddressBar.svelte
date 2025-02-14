<script lang="ts">
  import type { FileManagerRuntime } from "../runtime";
  import Address from "./AddressBar/Address.svelte";
  import CutCopyPaste from "./AddressBar/CutCopyPaste.svelte";
  import NewMenu from "./AddressBar/NewMenu.svelte";
  import UpDownLoad from "./AddressBar/UpDownLoad.svelte";

  const { process }: { process: FileManagerRuntime } = $props();
</script>

<div class="address-bar">
  <button class="parent lucide icon-arrow-up" aria-label="Parent Directory"
  ></button>
  <Address {process} />
  <div class="sep"></div>
  <CutCopyPaste {process} />
  <div class="sep"></div>
  <NewMenu {process} />
  <div class="sep"></div>
  <UpDownLoad {process} />
</div>
