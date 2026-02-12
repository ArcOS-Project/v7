<script lang="ts">
  import type { AppProcess } from "$ts/apps/process";
  import { Sleep } from "$ts/sleep";
  import type { ContextMenuItem } from "$types/app";
  import { onMount } from "svelte";
  import type { ContextMenuRuntime } from "../runtime";
  import SubItems from "./Item/SubItems.svelte";
  import type { ReadableStore } from "$types/writable";

  interface Props {
    data: ContextMenuItem;
    shell: ContextMenuRuntime;
    process?: AppProcess;
    mW: number;
    x: number;
    props: any[];
    hideSubs: ReadableStore<boolean>;
  }

  const { data, shell, process, mW, x, props, hideSubs }: Props = $props();

  let active = $state(false);
  let disabled = $state(false);
  let showSub = $state(false);
  let inactiveTimer: NodeJS.Timeout;

  onMount(async () => {
    update();

    hideSubs.subscribe((v) => v && (showSub = false));

    disabled = data.disabled ? await data.disabled(...props) : false;
  });

  async function trigger() {
    if (data.subItems) return;

    if (data.action) data.action(...props);

    await Sleep(50);

    shell.closeContextMenu();

    update();
  }

  async function update() {
    if (!data.isActive) return (active = false);

    active = await data.isActive(...props);
  }

  function mouseEnter() {
    $hideSubs = true;
    clearTimeout(inactiveTimer);
    showSub = true;
  }

  async function mouseLeave() {
    inactiveTimer = setTimeout(() => {
      showSub = false;
    }, 1000);
  }
</script>

{#if data.sep}
  <hr />
{:else}
  <button
    class="menu-item"
    onclick={trigger}
    class:active={active && !data.subItems}
    class:subitems={data.subItems && data.subItems.length}
    class:accelerator={data.accelerator}
    onmouseenter={mouseEnter}
    onmouseleave={mouseLeave}
    {disabled}
  >
    <div class="inner">
      {#if data.icon}
        <span class="icon lucide icon-{data.icon}"></span>
      {:else if data.image}
        <img class="icon" src={shell.getIconCached(data.image)} alt={data.caption} />
      {:else}
        <span class="icon"></span>
      {/if}
      <span>
        {data.caption}
      </span>
      <span class="lucide icon-check is-active" class:show={active}></span>
      {#if data.subItems && data.subItems.length && !disabled}
        <span class="lucide icon-chevron-right has-subitems"></span>
      {/if}
      {#if data.accelerator}
        <span class="accelerator">{data.accelerator}</span>
      {/if}
    </div>
    {#if !disabled}
      <SubItems {data} {showSub} {mW} {x} {process} {shell} {props} />
    {/if}
  </button>
{/if}
