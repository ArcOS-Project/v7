<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import type { AppComponentProps } from "$types/app";
  import AddressBar from "./FileManager/AddressBar.svelte";
  import DirectoryListing from "./FileManager/DirectoryListing.svelte";
  import Sidebar from "./FileManager/Sidebar.svelte";
  import type { FileManagerRuntime } from "./runtime";

  const { process }: AppComponentProps<FileManagerRuntime> = $props();
</script>

<Sidebar {process} />
<div class="container">
  <CustomTitlebar {process} />
  <div class="main-content">
    <AddressBar {process} />
    <DirectoryListing {process} />
  </div>
</div>
