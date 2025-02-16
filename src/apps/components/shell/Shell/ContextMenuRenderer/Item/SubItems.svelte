<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import type { AppProcess } from "$ts/apps/process";
  import type { App, ContextMenuItem, ThirdPartyApp } from "$types/app";
  import Item from "../Item.svelte";

  interface Props {
    data: ContextMenuItem;
    showSub?: boolean;
    mW: number;
    x: number;
    process: AppProcess | undefined;
    shell: ShellRuntime;
    props: any[];
  }

  const {
    data,
    shell,
    process,
    mW,
    x,
    showSub = false,
    props,
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
      <Item data={item} {mW} {x} {shell} {process} {props} />
    {/each}
  </div>
{/if}
