<script lang="ts">
  import type { AppProcess } from "$ts/apps/process";
  import { Sleep } from "$ts/sleep";
  import type { App, ContextMenuItem, ThirdPartyApp } from "$types/app";
  import type { ShellRuntime } from "../../runtime";
  import SubItems from "./Item/SubItems.svelte";

  interface Props {
    window: ((App | ThirdPartyApp) & { originId?: string }) | undefined;
    scope: string;
    scopeMap: DOMStringMap | undefined;
    data: ContextMenuItem;
    shell: ShellRuntime;
    process?: AppProcess;
    mW: number;
    x: number;
  }

  const { window, scope, scopeMap, data, shell, process, mW, x }: Props =
    $props();

  let active = $state(false);
  let disabled = $state(false);
  let showSub = $state(false);
  let inactiveTimer: NodeJS.Timeout;

  async function trigger() {
    if (data.subItems) return;

    if (data.action) data.action(window, scopeMap, scope);

    await Sleep(50);

    shell.contextData.set(null);

    update();
  }

  async function update() {
    if (!data.isActive) return (active = false);

    active = await data.isActive(window, scopeMap, scope);
  }

  function mouseEnter() {
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
      <SubItems
        {data}
        {scopeMap}
        {scope}
        {window}
        {showSub}
        {mW}
        {x}
        {process}
        {shell}
      />
    {/if}
  </button>
{/if}
