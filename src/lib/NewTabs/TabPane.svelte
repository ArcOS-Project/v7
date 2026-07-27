<script
  lang="ts"
  generics="Proc extends IAppProcess = IAppProcess, TabType extends IBaseTab<Proc> = IBaseTab<Proc>, HandlerType extends ITabHandler<Proc, TabType> = ITabHandler<Proc, TabType>"
>
  import type { IAppProcess } from "$interfaces/IAppProcess";
  import type { IBaseTab, ITabHandler } from "$interfaces/ITabHandler";

  export let handler: HandlerType;
  export let tab: TabType;

  const { activeTab } = handler;
  const { loading, component: TabComponent } = tab;
</script>

<div class="window-tab-pane" id="tab${tab.identifier}" class:visible={$activeTab === tab.identifier}>
  {#if $loading}
    <div class="tab-loading-bar">
      <div class="loading-bar-inner"></div>
    </div>
  {/if}

  <div class="tab-content">
    <TabComponent {tab} {handler} process={handler.parent} />
  </div>
</div>
