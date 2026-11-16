<script lang="ts" generics="TProc extends IAppProcess = IAppProcess, TProps extends object = object">
  import type { IAppProcess } from "$interfaces/IAppProcess";
  import { executeOnSingleOrMultiple } from "@tsparticles/engine";
  import type { Component, Snippet } from "svelte";

  interface Props {
    tabs: Record<string, Component<any>>;
    initialTab?: string;
    BeforeTabs?: Snippet;
    AfterTabs?: Snippet;
    TabButtonContent?: Snippet<[string, TProc?, TProps?]>;
    process?: TProc;
    className?: string;
    fullHeight?: boolean;
    padded?: boolean;
    paddedTop?: boolean;
    noSides?: boolean;
    props?: TProps;
    flexContent?: boolean;
  }

  let {
    /** */
    tabs,
    initialTab,
    BeforeTabs,
    AfterTabs,
    TabButtonContent,
    process,
    className,
    fullHeight,
    padded,
    paddedTop,
    noSides,
    props,
    flexContent,
  }: Props = $props();

  initialTab ||= Object.keys(tabs)[0];
  let selectedTab = $state<string>(initialTab);

  function createClassNameForTab(tabName: string) {
    return tabName.replaceAll(/[ ._]/g, "-").replaceAll(/[()]/g, "").toLowerCase();
  }
</script>

<div
  class="window-tabs {className}"
  class:full-height={fullHeight}
  class:padded
  class:padded-top={paddedTop}
  class:no-sides={noSides}
  class:flex-content={flexContent}
>
  <div class="tab-bar">
    {#if BeforeTabs}
      {@render BeforeTabs()}
    {/if}
    <div class="tabs">
      {#each Object.keys(tabs) as tabName, i}
        <button
          class="tab-button {createClassNameForTab(tabName)}"
          id="idx_{i}"
          onclick={() => (selectedTab = tabName)}
          class:selected={tabName === selectedTab}
        >
          {#if TabButtonContent}
            {@render TabButtonContent(tabName, process, props)}
          {:else}
            {tabName}
          {/if}
        </button>
      {/each}
    </div>
    {#if AfterTabs}
      {@render AfterTabs()}
    {/if}
  </div>
  <div class="tab-content {createClassNameForTab(selectedTab)}">
    {#if selectedTab && tabs[selectedTab]}
      {@const Tab = tabs[selectedTab]}
      <Tab {process} {props} />
    {/if}
  </div>
</div>
