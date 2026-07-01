<script lang="ts">
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
  import type { ITrayHostService } from "$interfaces/services/ITrayHostService";
  import Spinner from "$lib/Spinner.svelte";
  import { IsBeta } from "$ts/util";
  import StatusArea from "./StatusArea.svelte";
  import TrayIcon from "./SystemTray/TrayIcon.svelte";

  const { process, service }: { process: IShellRuntime; service: ITrayHostService } = $props();
  const { trayIcons, loading } = service;
</script>

{#if IsBeta()}
  <button class="beta-feedback-button" onclick={() => process.spawnOverlayApp("SendBetaFeedbackApp", process.pid)}>
    Send beta feedback
  </button>
{/if}
{#if Object.entries($trayIcons).length || $loading}
  <div class="tray-icons">
    {#if $loading}
      <div class="icon">
        <Spinner height={16} />
      </div>
    {/if}
    {#each Object.entries($trayIcons) as [discriminator, icon] (discriminator)}
      <TrayIcon {discriminator} {icon} {process} />
    {/each}
  </div>
{/if}
<StatusArea {process} />
