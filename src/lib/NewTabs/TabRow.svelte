<script
  lang="ts"
  generics="Proc extends IAppProcess = IAppProcess, TabType extends IBaseTab<Proc> = IBaseTab<Proc>, HandlerType extends ITabHandler<Proc, TabType> = ITabHandler<Proc, TabType>"
>
  import type { IAppProcess } from "$interfaces/IAppProcess";
  import type { IBaseTab, ITabHandler } from "$interfaces/ITabHandler";
  import Tab from "./Tab.svelte";
  import { TabState } from "$types/shared/tabs";

  export let handler: HandlerType;
  export let stateFilter: TabState = TabState.Normal;

  const { tabs } = handler;
</script>

<div class="window-tab-row">
  {#each $tabs as tab (tab.identifier)}
    {#if tab.state === stateFilter}
      <Tab {handler} {tab} />
    {/if}
  {/each}
</div>
