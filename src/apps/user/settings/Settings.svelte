<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import { SettingsIcon } from "$ts/images/general";
  import { Sleep } from "$ts/sleep";
  import { onMount, type Component } from "svelte";
  import type { SettingsRuntime } from "./runtime";
  import Sidebar from "./Settings/Sidebar.svelte";
  import Slide from "./Settings/Slide.svelte";
  import { settingsPageStore } from "./store";
  import type { SettingsPage } from "./types";

  const { process }: { process: SettingsRuntime } = $props();
  const { currentPage, slideVisible, userPreferences } = process;

  let hide = $state(true);
  let className = $state("");
  let pageData = $state<SettingsPage>();

  onMount(() => {
    const sub = currentPage.subscribe(async (v) => {
      $slideVisible = false;
      hide = true;
      await Sleep(userPreferences().shell.visuals.noAnimations ? 0 : 300);

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
  <CustomTitlebar {process} className={$slideVisible ? "sliding" : ""}>
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
