<script lang="ts">
  import type { AppProcess } from "$ts/apps/process";
  import { Store } from "$ts/writable";
  import type { ContextMenuItem } from "$types/app";
  import type { ContextMenuRuntime } from "../../runtime";
  import Item from "../Item.svelte";

  interface Props {
    data: ContextMenuItem;
    showSub?: boolean;
    mW: number;
    x: number;
    process: AppProcess | undefined;
    shell: ContextMenuRuntime;
    props: any[];
  }

  const hideSubs = Store<boolean>(false);

  hideSubs.subscribe((v) => v && ($hideSubs = false));

  const { data, shell, process, mW, x, showSub = false, props }: Props = $props();

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
      <Item data={item} {mW} {x} {shell} {process} {props} {hideSubs} />
    {/each}
  </div>
{/if}
