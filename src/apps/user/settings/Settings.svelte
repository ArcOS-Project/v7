<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import type { SettingsRuntime } from "./runtime";
  import Sidebar from "./Settings/Sidebar.svelte";

  const { process }: { process: SettingsRuntime } = $props();
</script>

<Sidebar />
<div class="container">
  <CustomTitlebar {process} />
  <div class="page-content">page content</div>
</div>
