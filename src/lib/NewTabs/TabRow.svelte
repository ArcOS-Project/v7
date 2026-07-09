<script
  lang="ts"
  generics="A extends IAppProcess = IAppProcess, R extends IBaseTab<A> = IBaseTab<A>, T extends ITabHandler<A, R> = ITabHandler<A, R>"
>
  import type { IAppProcess } from "$interfaces/IAppProcess";
  import type { IBaseTab, ITabHandler } from "$interfaces/ITabHandler";
  import type { Unsubscriber } from "$types/shared/writable";
  import { onMount } from "svelte";

  export let handler: T;
  export let pinned = false;
  export let temporary = false;

  let unsub: Unsubscriber;

  let tabs: R[] = [];

  onMount(() => {
    handler.dispatch.subscribe("changed", () => {
      tabs = handler.tabs;
    });
  });
</script>

<div class="window-tab-row">
  {#each tabs as tab (tab.identifier)}
    <Tab {handler} {tab} {pinned} {temporary} />
  {/each}
</div>
