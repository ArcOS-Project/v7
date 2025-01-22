<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import type { Component } from "svelte";
  import type { SettingsRuntime } from "./runtime";
  import Sidebar from "./Settings/Sidebar.svelte";
  import { settingsPageStore } from "./store";

  const { process }: { process: SettingsRuntime } = $props();
  const { currentPage } = process;

  $effect(() => {
    const sub = currentPage.subscribe((v) => {
      Page = settingsPageStore.get(v)?.content;
    });

    return () => sub();
  });

  let Page: Component | undefined = $state();
</script>

<Sidebar {process} />
<div class="container">
  <CustomTitlebar {process}><span></span></CustomTitlebar>
  <div class="page-content">
    {#if Page}
      <Page {process} />
    {/if}
  </div>
</div>
