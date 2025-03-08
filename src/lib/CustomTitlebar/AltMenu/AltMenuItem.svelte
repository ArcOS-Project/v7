<script lang="ts">
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

    const shellPid = process.env.get("shell_pid");
    if (!shellPid) return;

    const shell = process.handler.getProcess<ShellRuntime>(+shellPid);
    if (!shell) return;

    shell.createContextMenu({
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
