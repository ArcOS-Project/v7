<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import ActionGroup from "$lib/Window/ActionBar/ActionGroup.svelte";
  import ActionIconButton from "$lib/Window/ActionBar/ActionIconButton.svelte";
  import { Daemon } from "$ts/daemon";
  import { Server } from "$ts/env";
  import MasterOptionButton from "./MasterOptions/MasterOptionButton.svelte";
  import type { MasterOptionsRuntime } from "./runtime";
  import { MasterOptionStore } from "./store";

  const { process }: { process: MasterOptionsRuntime } = $props();
  const { loading } = process;
</script>

<div class="header">
  <img src={process.getIconCached("ElevationIcon")} alt="" />
  <h1>ArcOS Master Options</h1>
</div>
<div class="content">
  <p>Choose one of the following options to continue:</p>
  <div class="options">
    {#each MasterOptionStore as option (option.caption)}
      <MasterOptionButton {process} {option}></MasterOptionButton>
    {/each}
  </div>
  <div class="authorization">
    <p class="username">Logged in as <b>{Daemon.userInfo.username}</b></p>
    <p class="hostname">{Server.hostname ?? "No server"}</p>
  </div>
</div>
<ActionBar>
  {#snippet leftContent()}
    <ActionGroup>
      <ActionIconButton className="restart" icon="rotate-ccw" onclick={() => Daemon.power?.restart(true)} disabled={$loading} />
      <ActionIconButton className="shutdown" icon="power" onclick={() => Daemon.power?.shutdown(true)} disabled={$loading} />
      <ActionIconButton className="logout" icon="log-out" onclick={() => Daemon.power?.logoff(true)} disabled={$loading} />
    </ActionGroup>
  {/snippet}
  {#snippet rightContent()}
    <ActionButton suggested onclick={() => process.closeWindow()} disabled={$loading}>Close</ActionButton>
  {/snippet}
</ActionBar>
