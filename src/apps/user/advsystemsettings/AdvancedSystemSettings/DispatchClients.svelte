<script lang="ts">
  import type { GlobalDispatchClient } from "$types/dispatch";
  import { onMount } from "svelte";
  import type { AdvSysSetRuntime } from "../runtime";

  const { process }: { process: AdvSysSetRuntime } = $props();

  let clients = $state<GlobalDispatchClient[]>([]);

  onMount(update);

  async function update() {
    clients = await process.userDaemon!.globalDispatch!.getClients();
  }

  async function disconnectClient(clientId: string) {
    await process.userDaemon?.globalDispatch?.disconnectClient(clientId);
    update();
  }
</script>

<p>Below follows a list of Global Dispatch clients currently connected to your account.</p>
<div class="list">
  <div class="row head">
    <div class="segment ip">IP address</div>
    <div class="segment authorized">Authorized</div>
  </div>
  {#each clients as client (client.socketId)}
    <div class="row" title={client.socketId}>
      <div class="segment ip">{client.ip}</div>
      <div class="segment authorized">{client.authorized ? "Yes" : "No"}</div>
      <button class="lucide icon-link-2-off" onclick={() => disconnectClient(client.socketId)} aria-label="Kick client"></button>
    </div>
  {/each}
</div>
