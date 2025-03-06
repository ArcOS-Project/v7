<script lang="ts">
  import { contextProps } from "$ts/context/actions.svelte";
  import { draggable, type DragEventData } from "@neodrag/svelte";
  import type { WallpaperRuntime } from "../runtime";
  import { onMount } from "svelte";

  let position = $state({ x: 0, y: 0 });

  interface Props {
    process: WallpaperRuntime;
    caption: string;
    icon: string;
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
    props = [],
  }: Props = $props();

  const { userPreferences } = process;

  function updatePos() {
    if (!$userPreferences.appPreferences.desktopIcons)
      $userPreferences.appPreferences.desktopIcons = {};
    const pos = $userPreferences.appPreferences.desktopIcons[
      `icon$${caption}`
    ] as {
      x: number;
      y: number;
    };

    position = pos || { x: 0, y: 0 };
  }

  function endDrag(e: CustomEvent<DragEventData>) {
    const { offsetX, offsetY } = e.detail;

    $userPreferences.appPreferences.desktopIcons ||= {};
    $userPreferences.appPreferences.desktopIcons[`icon$${caption}`] = {
      x: offsetX,
      y: offsetY,
    };
  }

  onMount(updatePos);
  userPreferences.subscribe(updatePos);
</script>

<!-- svelte-ignore event_directive_deprecated -->
<button
  class="icon {className}"
  title={alt}
  data-contextmenu={contextMenu}
  use:contextProps={props}
  on:dblclick={() => action()}
  use:draggable={{
    grid: $userPreferences.desktop.noIconGrid ? undefined : [40, 42.5],
    bounds: $userPreferences.desktop.noIconGrid
      ? { bottom: 80, left: 10, right: 10, top: 10 }
      : { bottom: 110, left: 0, right: 80, top: 0 },
    threshold: { distance: 50 },
    position,
    disabled: $userPreferences.desktop.lockIcons,
  }}
  on:neodrag:end={endDrag}
>
  <img src={icon} alt="" />
  <p>{caption}</p>
  {#if cornerIcon}
    <span class="lucide icon-{cornerIcon}"></span>
  {/if}
</button>
