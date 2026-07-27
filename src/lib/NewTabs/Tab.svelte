<script
  lang="ts"
  generics="A extends IAppProcess = IAppProcess, R extends IBaseTab<A> = IBaseTab<A>, T extends ITabHandler<A, R> = ITabHandler<A, R>"
>
  import type { IAppProcess } from "$interfaces/IAppProcess";
  import type { IBaseTab, ITabHandler } from "$interfaces/ITabHandler";
  import { TabState } from "$types/shared/tabs";

  export let handler: T;
  export let tab: R;

  const { icon, title, modified, readOnly, loading } = tab;
</script>

<div
  class="window-tab"
  class:pinned={tab.state === TabState.Pinned}
  class:temporary={tab.state === TabState.Temporary}
  class:modified={$modified}
  class:loading={$loading}
  class:readOnly={$readOnly}
>
  {#if tab.state === TabState.Temporary}
    <button
      class="lucide icon-corner-up-left"
      onclick={() => handler.changeTabState(tab.identifier, TabState.Normal)}
      title="Make permanent"
      aria-label="Make permanent"
    ></button>
  {/if}
  <button class="trigger">
    {#if $icon}
      <span class="lucide icon-{$icon}"></span>
    {/if}
    <span class="tab-title">{$title}</span>
    {#if tab.state === TabState.Pinned}
      <span class="lucide icon-push-pin pinned-indicator"></span>
    {/if}
  </button>
  <div class="close-button-wrapper">
    {#if $modified}
      <div class="modified-dot"></div>
    {/if}

    <button class="lucide icon-x" title="Close tab" aria-label="Close tab" onclick={() => handler.closeTab(tab.identifier)}
    ></button>
  </div>
</div>
