<script lang="ts">
  import type { FileManagerRuntime } from "../runtime";
  import AddressEdit from "./AddressBar/AddressEdit.svelte";
  import BreadCrumbs from "./AddressBar/BreadCrumbs.svelte";

  const { process }: { process: FileManagerRuntime } = $props();
  const { editingAddress, currentTabUuid, tabs } = process;
</script>

<div class="address-bar">
  <button class="lucide icon-chevron-up" aria-label="Parent Directory"></button>
  <div class="bar">
    {#if $editingAddress}
      <AddressEdit {process} />
    {:else}
      <BreadCrumbs {process} />
    {/if}
  </div>
  <div class="search">
    <input type="text" />
    <span class="lucide icon-search"></span>
  </div>
</div>
