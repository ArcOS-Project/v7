<script lang="ts">
  import { AppProcess } from "$ts/apps/process";
  import type { AppRenderer } from "$ts/apps/renderer";
  import { contextProps } from "$ts/context/actions.svelte";
  import { BETA, Stack } from "$ts/env";
  import { Daemon } from "$ts/server/user/daemon";
  import { onMount, type Snippet } from "svelte";
  import AltMenu from "./CustomTitlebar/AltMenu.svelte";

  const { process, children, className = "" }: { process: AppProcess; children?: Snippet; className?: string } = $props();
  const { windowTitle, windowIcon } = process;
  const { data } = process.app;

  let renderer: AppRenderer | undefined;

  onMount(() => {
    renderer = Stack.renderer;
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

<div
  class="titlebar custom {className}"
  data-contextmenu={process.app.data.overlay ? "" : "_window-titlebar"}
  use:contextProps={[process]}
>
  <div class="window-title">
    {#if children}
      {@render children()}
    {:else}
      <img src={process.getIconCached($windowIcon) || $windowIcon || process.getIconCached("ComponentIcon")} alt="" />
      <span>{$windowTitle}</span>
    {/if}
    {#if BETA && !process.app.data.entrypoint && !process.app.data.workingDirectory && !process.app.data.thirdParty}
      <span class="beta-pill">BETA</span>
    {/if}
    <AltMenu {process} />
  </div>
  {#if BETA}
    <button class="link feedback" onclick={() => Daemon?.helpers?.iHaveFeedback(process)}>Feedback?</button>
  {/if}
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
