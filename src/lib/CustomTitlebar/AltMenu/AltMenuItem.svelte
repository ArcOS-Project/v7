<script lang="ts">
  import type { ContextMenuRuntime } from "$apps/components/contextmenu/runtime";
  import type { IAppProcess } from "$interfaces/app";
  import { Env, Stack } from "$ts/env";
  import { UUID } from "$ts/uuid";
  import type { ContextMenuItem } from "$types/app";
  import { onMount } from "svelte";

  const { process, menu }: { process: IAppProcess; menu: ContextMenuItem } = $props();

  let selected = $state<boolean>(false);
  let button: HTMLButtonElement | undefined = $state();
  let uuid = UUID();

  const contextMenuPid = Env.get("contextmenu_pid");
  const contextMenu = Stack.getProcess<ContextMenuRuntime>(+contextMenuPid);

  onMount(() => {
    contextMenu?.currentMenu.subscribe((v) => {
      selected = !!(v && v === uuid);
    });
  });

  async function action() {
    if (!menu.subItems) {
      if (menu.action) return await menu.action(process);

      return;
    }

    if (contextMenu?.currentMenu() === uuid) return;

    const rect = button?.getBoundingClientRect();
    if (!rect || !contextMenu) return;

    contextMenu.currentMenu.set(uuid);
    contextMenu.createContextMenu({
      items: menu.subItems || [],
      x: rect.x,
      y: rect.y + rect.height + 5,
    });
  }
</script>

{#if !menu.sep}
  <button class="menu-item" onclick={action} bind:this={button} class:selected>
    {menu.caption}
  </button>
{:else}
  <div class="sep"></div>
{/if}
