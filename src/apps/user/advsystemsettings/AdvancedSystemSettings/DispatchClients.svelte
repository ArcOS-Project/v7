<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import { Daemon } from "$ts/env";
  import type { GlobalDispatchClient } from "$types/system/dispatch";
  import { onMount } from "svelte";

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
<div class="table-wrapper">
  {#if !loading}
    <table>
      <thead>
        <tr>
          <th>IP address</th>
          <th>Authorized</th>
          <th class="action">
            <button class="lucide icon-rotate-cw" title="Refresh list" disabled={loading} aria-label="Refresh" onclick={update}
            ></button>
          </th>
        </tr>
      </thead>
      <tbody>
        {#each clients as client (client.socketId)}
          <tr title={client.socketId}>
            <td class="ip">
              {client.ip}
              {#if client.socketId === Daemon?.globalDispatch?.client?.id}(you){/if}
            </td>
            <td class="authorized">{client.authorized ? "Yes" : "No"}</td>
            <td class="action">
              <button
                class="lucide icon-link-2-off"
                onclick={() => disconnectClient(client.socketId)}
                aria-label="Kick client"
                title="Kick client"
                disabled={client.socketId === Daemon.globalDispatch?.client?.id}
              ></button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <div class="loading">
      <Spinner height={32} />
    </div>
  {/if}
</div>
