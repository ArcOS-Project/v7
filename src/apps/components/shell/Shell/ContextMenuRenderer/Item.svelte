<script lang="ts">
  import type { AppProcess } from "$ts/apps/process";
  import type { ReadableStore } from "$ts/writable";
  import type { ContextMenuItem } from "$types/app";
  import { onMount } from "svelte";
  import type { ShellRuntime } from "../../runtime";
  import SubItems from "./Item/SubItems.svelte";
  import { Sleep } from "$ts/sleep";

  interface Props {
    data: ContextMenuItem;
    shell: ShellRuntime;
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
        <img class="icon" src={data.image} alt={data.caption} />
      {:else}
        <span class="icon"></span>
      {/if}
      <span>
        {data.caption}
      </span>
      {#if data.accelerator}
        <span class="accelerator">{data.accelerator}</span>
      {/if}
      {#if active}
        <span class="lucide icon-check is-active"></span>
      {/if}
      {#if data.subItems && data.subItems.length && !disabled}
        <span class="lucide icon-chevron-right has-subitems"></span>
      {/if}
    </div>
    {#if !disabled}
      <SubItems {data} {showSub} {mW} {x} {process} {shell} {props} />
    {/if}
  </button>
{/if}
