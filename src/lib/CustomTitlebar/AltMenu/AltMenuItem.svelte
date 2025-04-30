<script lang="ts">
  import type { ContextMenuRuntime } from "$apps/components/contextmenu/runtime";
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import type { AppProcess } from "$ts/apps/process";
  import type { ContextMenuItem } from "$types/app";

  const { process, menu }: { process: AppProcess; menu: ContextMenuItem } = $props();

  let button: HTMLButtonElement | undefined = $state();

  async function action() {
    if (!menu.subItems) {
      if (menu.action) return await menu.action(process);

      return;
    }

    const rect = button?.getBoundingClientRect();

    if (!rect) return;

    const contextMenuPid = process.env.get("contextmenu_pid");
    if (!contextMenuPid) return;

    const contextMenu = process.handler.getProcess<ContextMenuRuntime>(+contextMenuPid);
    if (!contextMenu) return;

    contextMenu.createContextMenu({
      items: menu.subItems || [],
      x: rect.x,
      y: rect.y + rect.height + 5,
    });
  }
</script>

{#if !menu.sep}
  <button class="menu-item" onclick={action} bind:this={button}>
    {menu.caption}
  </button>
{:else}
  <div class="sep"></div>
{/if}
