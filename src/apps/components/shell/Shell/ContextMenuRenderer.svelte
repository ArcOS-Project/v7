<script lang="ts">
  import {
    assignContextMenuHooks,
    composePosition,
  } from "$state/Desktop/ts/context";
  import { Sleep } from "$ts/sleep";
  import { UserDataStore } from "$ts/stores/user";
  import { Store } from "$ts/writable";
  import types { ContextMenuInstance } from "$types/app";
  import { onMount } from "svelte";
  import type { ShellRuntime } from "../runtime";
  import Item from "./ContextMenuRenderer/Item.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { contextData, userPreferences } = process;

  let data: ContextMenuInstance = $state();
  let menu: HTMLDivElement;
  let x = $state(0);
  let y = $state(0);
  let visible = $state(false);
  let hideSubs = Store<boolean>(false);
  let [mW, mH] = [0, 0];

  hideSubs.subscribe((v) => {
    v && ($hideSubs = false);
  });

  onMount(() => {
    assignContextMenuHooks();
  });

  contextData.subscribe(async (v) => {
    const current = visible;

    visible = false;

    await Sleep(data && v && current ? 200 : 0);

    if (!v) return;

    data = null;
    await Sleep();
    data = v;
    await Sleep();

    if (!menu) return;

    mW = menu.offsetWidth;
    mH = menu.offsetHeight;

    [x, y] = composePosition(v.x, v.y, mW, mH);

    await Sleep();

    visible = !!data;
  });
</script>

<div
  class="context-menu shell-colored"
  class:compact={$UserDataStore.sh.compactContext}
  class:colored={$UserDataStore.sh.taskbar.colored}
  class:show={visible}
  style="top: {y}px; left: {x}px;"
  bind:this={menu}
>
  {#if data && $hideSubs}
    {#each data.items as item}
      <Item
        window={data.app}
        scope={data.scope}
        scopeMap={data.scopeMap}
        data={item}
        {contextData}
        {userPreferences}
        bind:hideSubs
        {mW}
        {x}
      />
    {/each}
  {/if}
</div>
