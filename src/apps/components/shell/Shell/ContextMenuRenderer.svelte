<script lang="ts">
  import { Sleep } from "$ts/sleep";
  import type { ContextMenuInstance } from "$types/app";
  import { onMount } from "svelte";
  import type { ShellRuntime } from "../runtime";
  import Item from "./ContextMenuRenderer/Item.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { userPreferences } = process;
  let data: ContextMenuInstance | null = $state(null);
  let menu: HTMLDivElement;
  let x = $state(0);
  let y = $state(0);
  let visible = $state(false);
  let mW = $state(0);
  let mH = $state(0);

  onMount(() => {
    // DON'T USE $effect HERE, IT CREATES AN INFINITE LOOP
    process.contextData.subscribe(async (v) => {
      console.trace("bruh)");
      const current = visible;

      visible = false;

      if (!v) return;

      await Sleep(data && v && current ? 200 : 0);

      data = null;
      await Sleep();
      data = v;
      await Sleep();

      if (!menu) return;

      mW = menu.offsetWidth;
      mH = menu.offsetHeight;

      [x, y] = process.composePosition(v.x, v.y, mW, mH);

      await Sleep();

      visible = !!data;
    });
  });
</script>

<div
  class="context-menu shell-colored"
  class:compact={$userPreferences.shell.visuals.compactContext}
  class:colored={$userPreferences.shell.taskbar.colored}
  class:show={visible}
  style="top: {y}px; left: {x}px;"
  bind:this={menu}
>
  {#if data}
    {#each data.items as item}
      <Item
        data={item}
        shell={process}
        process={data.process}
        props={data.props || []}
        {mW}
        {x}
      />
    {/each}
  {/if}
</div>
