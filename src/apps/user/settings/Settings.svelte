<script lang="ts">
  import type { ISettingsRuntime } from "$interfaces/runtimes/ISettingsRuntime";
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import Icon from "$lib/Icon.svelte";
  import { Sleep } from "$ts/sleep";
  import { onMount, type Component } from "svelte";
  import Sidebar from "./Settings/Sidebar.svelte";
  import Slide from "./Settings/Slide.svelte";
  import type { JoltSettingsPage } from "$types/system/jui/settings";
  import ModularUiView from "$lib/JoltUi/JoltUiView.svelte";
  import { SettingsJuiRenderer } from "./jui/renderer";

  const { process }: { process: ISettingsRuntime } = $props();
  const { currentPage, slideVisible, userPreferences } = process;

  let hide = $state(true);
  let className = $state("");
  let pageData = $state<JoltSettingsPage | undefined>();

  onMount(() => {
    const sub = currentPage.subscribe(async (v) => {
      $slideVisible = false;
      hide = true;
      await Sleep(userPreferences().shell.visuals.noAnimations ? 0 : 200);

      pageData = undefined;
      await Sleep(0);
      pageData = process.JuiSupplier.Pages.get(v);
      className = v;

      await Sleep(10);
      hide = false;
    });

    return () => sub();
  });
</script>

<Sidebar {process} />
<div class="container {className}">
  <CustomTitlebar {process} className={$slideVisible ? "sliding" : ""}>
    {#if $slideVisible}
      <button class="lucide icon-arrow-left" title="Go back" aria-label="Go back" onclick={() => ($slideVisible = false)}
      ></button>
    {/if}
    <Icon icon={pageData?.icon || "SettingsIcon"} />
    <span>{pageData?.title || "Settings"}</span>
  </CustomTitlebar>
  <div class="page-content" class:hide>
    <div class="page-wrapper">
      {#if pageData}
        <ModularUiView rendererConstructor={SettingsJuiRenderer} {process} page={pageData}></ModularUiView>
      {/if}
    </div>
  </div>
  <Slide {process} />
</div>
