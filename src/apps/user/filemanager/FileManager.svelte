<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import type { AppComponentProps } from "$types/app";
  import AddressBar from "./FileManager/AddressBar.svelte";
  import Directory from "./FileManager/Contents/Directory.svelte";
  import Sidebar from "./FileManager/Sidebar.svelte";
  import Tabs from "./FileManager/Tabs.svelte";
  import type { FileManagerRuntime } from "./runtime";

  const { process }: AppComponentProps<FileManagerRuntime> = $props();
  const { LOCATIONS, tabs, currentTabUuid } = process;
</script>

<div class="top">
  <CustomTitlebar {process}>
    <Tabs {process} />
  </CustomTitlebar>
  <AddressBar {process} />
</div>
<div class="container">
  <Sidebar {process} />
  <div class="main-content">
    {#if LOCATIONS[$tabs[$currentTabUuid].location]}
      {$tabs[$currentTabUuid].location}
    {:else}
      <Directory {process} tab={$tabs[$currentTabUuid]} />
    {/if}
  </div>
</div>
