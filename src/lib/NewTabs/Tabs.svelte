<script lang="ts" generics="T extends IAppProcess = IAppProcess, R extends IBaseTab = IBaseTab">
  import type { IAppProcess } from "$interfaces/IAppProcess";
  import type { IBaseTab, ITabHandler } from "$interfaces/ITabHandler";
  import { TabState } from "$types/shared/tabs";
  import TabPane from "./TabPane.svelte";
  import TabRow from "./TabRow.svelte";

  export let handler: ITabHandler<T, R>;

  const { hasPinned, hasNormal, hasTemporary, tabs } = handler;
</script>

<div class="window-tabs">
  <div class="window-tab-rows">
    {#if $hasPinned}
      <TabRow stateFilter={TabState.Pinned} {handler} />
    {/if}
    {#if $hasNormal}
      <TabRow stateFilter={TabState.Normal} {handler} />
    {/if}
    {#if $hasTemporary}
      <TabRow stateFilter={TabState.Temporary} {handler} />
    {/if}
  </div>
  <div class="window-tab-renderer">
    {#each $tabs as tab (tab.identifier)}
      <TabPane {tab} {handler} />
    {/each}
  </div>
</div>
