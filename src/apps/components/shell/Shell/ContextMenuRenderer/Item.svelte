<script lang="ts">
  import { Sleep } from "$ts/sleep";
  import type { ReadableStore } from "$ts/writable";
  import type { App } from "$types/app";
  import type { ContextMenuInstance, ContextMenuItem } from "$types/context";
  import { onMount } from "svelte";
  import SubItems from "./Item/SubItems.svelte";

  const {
    data,
    scope = "",
    scopeMap,
    window = null,
    hideSubs,
    mW,
    x,
    contextData,
  }: {
    data: ContextMenuItem;
    scope: string;
    scopeMap: DOMStringMap;
    window: App | null;
    hideSubs: ReadableStore<boolean>;
    mW: number;
    x: number;
    contextData: ReadableStore<ContextMenuInstance>;
  } = $props();

  let active = $state(false);
  let disabled = $state(false);
  let showSub = $state(false);

  async function trigger() {
    if (data.subItems) return;

    if (data.action) data.action(window, scopeMap, scope);

    await Sleep(50);

    contextData.set(null);

    update();
  }

  onMount(async () => {
    update();

    hideSubs.subscribe((v) => v && (showSub = false));

    disabled = data.disabled
      ? await data.disabled(window, scopeMap, scope)
      : false;
  });

  async function update() {
    if (!data.isActive) return (active = false);

    active = await data.isActive(window, scopeMap, scope);
  }

  let inactiveTimer: NodeJS.Timeout;

  function mouseEnter() {
    hideSubs.set(true);
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
        <span class="icon material-icons-round">{data.icon}</span>
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
    </div>
    {#if !disabled}
      <SubItems {data} {scopeMap} {scope} {window} {showSub} {mW} {x} />
    {/if}
  </button>
{/if}
