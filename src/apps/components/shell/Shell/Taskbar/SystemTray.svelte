<script lang="ts">
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
  import type { ITrayHostService } from "$interfaces/services/ITrayHostService";
  import StatusArea from "./StatusArea.svelte";
  import TrayIcon from "./SystemTray/TrayIcon.svelte";

  const { process, service }: { process: IShellRuntime; service: ITrayHostService } = $props();
  const { trayIcons } = service;
</script>

{#if Object.entries($trayIcons).length}
  <div class="tray-icons">
    {#each Object.entries($trayIcons) as [discriminator, icon] (discriminator)}
      <TrayIcon {discriminator} {icon} {process} />
    {/each}
  </div>
{/if}
<StatusArea {process} />
