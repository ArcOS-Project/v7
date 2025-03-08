<script lang="ts">
  import { contextProps } from "$ts/context/actions.svelte";
  import { Sleep } from "$ts/sleep";
  import { Store } from "$ts/writable";
  import { draggable, type DragEventData } from "@neodrag/svelte";
  import { onMount } from "svelte";
  import type { WallpaperRuntime } from "../runtime";

  let position = $state({ x: 0, y: 0 });
  let moving = Store<boolean>(false);

  interface Props {
    process: WallpaperRuntime;
    caption: string;
    icon: string;
    identifier: string;
    cornerIcon?: string;
    alt?: string;
    className?: string;
    action: () => void;
    contextMenu?: string;
    props?: any[];
  }

  const {
    process,
    caption,
    icon,
    cornerIcon = "",
    alt = "",
    className = "",
    contextMenu = "",
    action,
    identifier,
    props = [],
  }: Props = $props();

  let movingX = $state<number>();
  let movingY = $state<number>();

  const { userPreferences, selected, orphaned } = process;

  async function updatePos() {
    if (!$userPreferences.appPreferences.desktopIcons) $userPreferences.appPreferences.desktopIcons = {};

    const pos = $userPreferences.appPreferences.desktopIcons[`icon$${identifier}`] as {
      x: number;
      y: number;
    };

    if ($orphaned.includes(`icon$${identifier}`)) return;

    position = pos || (await process.findFreeDesktopIconPosition(identifier));
  }

  async function startDrag() {
    $moving = true;
  }

  async function endDrag(e: CustomEvent<DragEventData>) {
    const target = e.target as HTMLButtonElement;

    await Sleep(10);

    const { x, y } = target.getBoundingClientRect();

    if (!$userPreferences.appPreferences.desktopIcons) $userPreferences.appPreferences.desktopIcons = {};

    if (!Object.values($userPreferences.appPreferences.desktopIcons).filter((pos) => pos.x === x && pos.y === y).length) {
      $userPreferences.appPreferences.desktopIcons[`icon$${identifier}`] = {
        x,
        y,
      };
    } else {
      updatePos();
    }

    $moving = false;
  }

  async function dragging(e: CustomEvent<DragEventData>) {
    $moving = true;

    const { clientX, clientY } = e.detail.event;
    const { width, height } = (e.target as HTMLButtonElement).getBoundingClientRect();

    movingX = clientX - ($userPreferences.desktop.noIconGrid ? width / 2 : 0);
    movingY = clientY - ($userPreferences.desktop.noIconGrid ? height / 2 : 0);
  }

  onMount(updatePos);
  userPreferences.subscribe(updatePos);
</script>

<!-- svelte-ignore event_directive_deprecated -->
<button
  class="icon {className}"
  class:moving={$moving}
  class:no-grid={$userPreferences.desktop.noIconGrid}
  class:selected={$selected === identifier}
  title={alt}
  data-contextmenu={contextMenu}
  use:contextProps={props}
  on:dblclick={() => action()}
  on:click={() => ($selected = identifier)}
  draggable={$moving}
  use:draggable={{
    grid: $userPreferences.desktop.noIconGrid ? undefined : [80, 85],
    bounds: $userPreferences.desktop.noIconGrid
      ? { bottom: 70, left: 10, right: 10, top: 10 }
      : { bottom: 150, left: 0, right: 80, top: 0 },
    threshold: { delay: 300 },
    position,
    disabled: $userPreferences.desktop.lockIcons,
  }}
  on:neodrag:start={startDrag}
  on:neodrag:end={endDrag}
  on:neodrag={dragging}
>
  <div class="img">
    <img src={icon} alt="" />
    {#if cornerIcon}
      <span class="lucide icon-{cornerIcon}"></span>
    {/if}
  </div>
  <p>{caption}</p>
</button>
<div class="ghost" style="--top: {movingY}px; --left: {movingX}px;" class:moving={$moving}>
  <div class="img">
    <img src={icon} alt="" />
    {#if cornerIcon}
      <span class="lucide icon-{cornerIcon}"></span>
    {/if}
  </div>
  <p>{caption}</p>
</div>
