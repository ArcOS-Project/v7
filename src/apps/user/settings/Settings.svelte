<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import type { Component } from "svelte";
  import type { SettingsRuntime } from "./runtime";
  import Sidebar from "./Settings/Sidebar.svelte";
  import { settingsPageStore } from "./store";
  import { Sleep } from "$ts/sleep";
  import Slide from "./Settings/Slide.svelte";
  import type { SettingsPage } from "./types";
  import { SettingsIcon } from "$ts/images/general";

  const { process }: { process: SettingsRuntime } = $props();
  const { currentPage, slideVisible } = process;

  let hide = $state(true);
  let className = $state("");
  let pageData = $state<SettingsPage>();

  $effect(() => {
    const sub = currentPage.subscribe(async (v) => {
      $slideVisible = false;
      hide = true;
      await Sleep(300);

      pageData = settingsPageStore.get(v);
      Page = pageData?.content;
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
  <CustomTitlebar {process}>
    {#if $slideVisible}
      <button
        class="lucide icon-arrow-left"
        aria-label="Go back"
        onclick={() => ($slideVisible = false)}
      ></button>
    {/if}
    <img src={pageData?.icon || SettingsIcon} alt="" />
    <span>{pageData?.name || "Settings"}</span>
  </CustomTitlebar>
  <div class="page-content" class:hide>
    {#if Page}
      <Page {process} />
    {/if}
  </div>
  <Slide {process} />
</div>
