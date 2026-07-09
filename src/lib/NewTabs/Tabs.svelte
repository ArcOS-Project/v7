<script lang="ts" generics="T extends IAppProcess = IAppProcess, R extends IBaseTab = IBaseTab">
  import type { IAppProcess } from "$interfaces/IAppProcess";
  import type { IBaseTab, ITabHandler } from "$interfaces/ITabHandler";
  import TabRow from "./TabRow.svelte";

  export let handler: ITabHandler<T, R>;

  const { hasPinned, hasNormal, hasTemporary } = handler;
</script>

<div class="window-tabs">
  {#if $hasPinned}
    <TabRow pinned {handler}></TabRow>
  {/if}
</div>
