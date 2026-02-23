<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import { Daemon } from "$ts/daemon";
  import type { GlobalDispatchClient } from "$types/dispatch";
  import { onMount } from "svelte";
  import type { AdvSysSetRuntime } from "../runtime";

  const { process }: { process: AdvSysSetRuntime } = $props();

  let clients = $state<GlobalDispatchClient[]>([]);
  let loading = $state<boolean>(false);

  onMount(update);

  async function update() {
    loading = true;
    clients = (await Daemon?.globalDispatch?.getClients()) || [];
    loading = false;
  }

  async function disconnectClient(clientId: string) {
    await Daemon?.globalDispatch?.disconnectClient(clientId);
    update();
  }
</script>

<p>
  Below is a list of Global Dispatch clients currently connected to your account. You can disconnect one by clicking the button.
</p>
<div class="list">
  {#if !loading}
    <div class="row head">
      <div class="segment ip">IP address</div>
      <div class="segment authorized">Authorized</div>
      <button class="lucide icon-rotate-cw" title="Refresh list" disabled={loading} aria-label="Refresh" onclick={update}
      ></button>
    </div>
    {#each clients as client (client.socketId)}
      <div class="row" title={client.socketId}>
        <div class="segment ip">
          {client.ip}
          {#if client.socketId === Daemon?.globalDispatch?.client?.id}(you){/if}
        </div>
        <div class="segment authorized">{client.authorized ? "Yes" : "No"}</div>
        <button
          class="lucide icon-link-2-off"
          onclick={() => disconnectClient(client.socketId)}
          aria-label="Kick client"
          title="Kick client"
          disabled={client.socketId === Daemon?.globalDispatch?.client?.id}
        ></button>
      </div>
    {/each}
  {:else}
    <div class="loading">
      <Spinner height={32} />
    </div>
  {/if}
</div>
