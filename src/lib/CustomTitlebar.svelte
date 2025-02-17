<script lang="ts">
  import { AppProcess } from "$ts/apps/process";
  import type { AppRenderer } from "$ts/apps/renderer";
  import { ComponentIcon } from "$ts/images/general";
  import { type Snippet } from "svelte";
  import AltMenu from "./CustomTitlebar/AltMenu.svelte";

  const {
    process,
    children,
    className = "",
  }: { process: AppProcess; children?: Snippet; className?: string } = $props();
  const { windowTitle, windowIcon } = process;
  const { data } = process.app;

  let renderer: AppRenderer | undefined;

  $effect(() => {
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
</script>

<div class="titlebar custom {className}">
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
    {#if data.controls.minimize}
      <button
        class="minimize icon-chevron-down"
        aria-label="minimize"
        onclick={minimize}
      ></button>
    {/if}
    {#if data.controls.maximize}
      <button
        class="maximize icon-chevron-up"
        aria-label="maximize"
        onclick={maximize}
      ></button>
    {/if}
    {#if data.controls.close}
      <button class="close icon-x" aria-label="close" onclick={close}></button>
    {/if}
  </div>
</div>
