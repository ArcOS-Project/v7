<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import type { AppProcess } from "$ts/apps/process";
  import type { App, ContextMenuItem, ThirdPartyApp } from "$types/app";
  import Item from "../Item.svelte";

  interface Props {
    data: ContextMenuItem;
    scope: string;
    scopeMap: DOMStringMap | undefined;
    window: ((App | ThirdPartyApp) & { originId?: string }) | undefined;
    showSub?: boolean;
    mW: number;
    x: number;
    process: AppProcess | undefined;
    shell: ShellRuntime;
  }

  const {
    window,
    scope,
    scopeMap,
    data,
    shell,
    process,
    mW,
    x,
    showSub = false,
  }: Props = $props();

  const { userPreferences } = shell;

  let style = "";
</script>

{#if data.subItems}
  <div
    class="sub-items shell-colored"
    class:show={showSub}
    class:colored={$userPreferences.shell.taskbar.colored}
    {style}
    class:left={screen.availWidth - 300 < x + mW}
  >
    {#each data.subItems as item}
      <Item
        data={item}
        {scopeMap}
        {scope}
        {window}
        {mW}
        {x}
        {shell}
        {process}
      />
    {/each}
  </div>
{/if}
