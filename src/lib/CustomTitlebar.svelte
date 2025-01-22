<script lang="ts">
  import type { AppManager } from "$ts/apps/manager";
  import { AppProcess } from "$ts/apps/process";
  import { ComponentIcon } from "$ts/images/general";
  import { type Snippet } from "svelte";

  const { process, children }: { process: AppProcess; children?: Snippet } =
    $props();
  const { windowTitle, windowIcon } = process;
  const { data } = process.app;

  let renderer: AppManager | undefined;

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

<div class="titlebar custom">
  {#if children}
    {@render children()}
  {:else}
    <div class="window-title">
      <img src={$windowIcon || ComponentIcon} alt="" />
      <span>{$windowTitle}</span>
    </div>
  {/if}
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
