<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import type { Component } from "svelte";
  import type { SettingsRuntime } from "./runtime";
  import Sidebar from "./Settings/Sidebar.svelte";
  import { settingsPageStore } from "./store";
  import { Sleep } from "$ts/sleep";

  const { process }: { process: SettingsRuntime } = $props();
  const { currentPage } = process;

  let hide = $state(true);
  let className = $state("");

  $effect(() => {
    const sub = currentPage.subscribe(async (v) => {
      hide = true;
      await Sleep(300);

      Page = settingsPageStore.get(v)?.content;
      className = v;

      await Sleep(10);
      hide = false;
    });

    return () => sub();
  });

  let Page: Component | undefined = $state();
</script>

<Sidebar {process} />
<div class="container {className}">
  <CustomTitlebar {process}><span></span></CustomTitlebar>
  <div class="page-content" class:hide>
    {#if Page}
      <Page {process} />
    {/if}
  </div>
</div>
