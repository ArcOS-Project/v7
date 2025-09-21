<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import ActionBar from "./IconEditor/ActionBar.svelte";
  import IconGrid from "./IconEditor/IconGrid.svelte";
  import Sidebar from "./IconEditor/Sidebar.svelte";
  import type { IconEditorRuntime } from "./runtime";

  const { process }: { process: IconEditorRuntime } = $props();
</script>

<Sidebar {process} />
<div class="container">
  <CustomTitlebar {process} />
  <div class="content">
    <IconGrid {process} />
    <ActionBar {process} />
  </div>
</div>
