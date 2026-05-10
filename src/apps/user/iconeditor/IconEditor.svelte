<script lang="ts">
  import type { IIconEditorRuntime } from "$interfaces/runtimes/IIconEditorRuntime";
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import ActionBar from "./IconEditor/ActionBar.svelte";
  import IconGrid from "./IconEditor/IconGrid.svelte";
  import Sidebar from "./IconEditor/Sidebar.svelte";

  const { process }: { process: IIconEditorRuntime } = $props();
</script>

<Sidebar {process} />
<div class="container">
  <CustomTitlebar {process} />
  <div class="content">
    <IconGrid {process} />
    <ActionBar {process} />
  </div>
</div>
