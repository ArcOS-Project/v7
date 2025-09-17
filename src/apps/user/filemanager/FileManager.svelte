<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import type { AppComponentProps } from "$types/app";
  import AddressBar from "./FileManager/AddressBar.svelte";
  import BottomBar from "./FileManager/BottomBar.svelte";
  import DirectoryListing from "./FileManager/DirectoryListing.svelte";
  import LoadSaveBottomBar from "./FileManager/LoadSaveBottomBar.svelte";
  import Sidebar from "./FileManager/Sidebar.svelte";
  import Splash from "./FileManager/Splash.svelte";
  import VirtualRenderer from "./FileManager/VirtualRenderer.svelte";
  import type { FileManagerRuntime } from "./runtime";

  const { process }: AppComponentProps<FileManagerRuntime> = $props();
  const { starting, virtual } = process;
</script>

{#if !$starting}
  <Sidebar {process} />
  <div class="container" class:load-save={process.loadSave}>
    <CustomTitlebar {process} />
    <div class="main-content">
      <AddressBar {process} />
      {#if !$virtual}
        <DirectoryListing {process} />
      {:else}
        <VirtualRenderer {process} />
      {/if}
      {#if !process.loadSave}
        <BottomBar {process} />
      {:else}
        <LoadSaveBottomBar {process} />
      {/if}
    </div>
  </div>
{:else}
  <Splash {process} />
{/if}
