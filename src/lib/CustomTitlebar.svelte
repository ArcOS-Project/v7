<script lang="ts">
  import { AppProcess } from "$ts/apps/process";
  import type { AppRenderer } from "$ts/apps/renderer";
  import { contextProps } from "$ts/context/actions.svelte";
  import { ComponentIcon } from "$ts/images/general";
  import { onMount, type Snippet } from "svelte";
  import AltMenu from "./CustomTitlebar/AltMenu.svelte";

  const { process, children, className = "" }: { process: AppProcess; children?: Snippet; className?: string } = $props();
  const { windowTitle, windowIcon } = process;
  const { data } = process.app;

  let renderer: AppRenderer | undefined;

  onMount(() => {
    renderer = process.handler.renderer;
  });

  function maximize() {
    renderer?.toggleMaximize(process.pid);
  }

  function minimize() {
    renderer?.toggleMinimize(process.pid);
  }

  function close() {
    process.closeWindow();
  }

  function unsnap() {
    renderer?.unsnapWindow(process.pid);
  }
</script>

<div class="titlebar custom {className}" data-contextmenu="_window-titlebar" use:contextProps={[process]}>
  <div class="window-title nodrag">
    {#if children}
      {@render children()}
    {:else}
      <img src={$windowIcon || ComponentIcon} alt="" />
      <span>{$windowTitle}</span>
    {/if}
  </div>
  <AltMenu {process} />
  <div class="controls">
    {#if data.controls.minimize && !data.overlay}
      <button class="minimize icon-chevron-down" aria-label="minimize" onclick={minimize}></button>
    {/if}
    <button class="unsnap icon-arrow-down-left" aria-label="unsnal" onclick={unsnap}></button>
    {#if data.controls.maximize && !data.overlay}
      <button class="maximize icon-chevron-up" aria-label="maximize" onclick={maximize}></button>
    {/if}
    {#if data.controls.close}
      <button class="close icon-x" aria-label="close" onclick={close}></button>
    {/if}
  </div>
</div>
