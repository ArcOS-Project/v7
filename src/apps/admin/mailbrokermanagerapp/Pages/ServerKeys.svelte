<script lang="ts">
  import type { IMailbrokerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
  import { Plural } from "$ts/util";
  import { Store } from "$ts/writable";
  import type { Mailbroker } from "$types/server/mailbroker";
  import type { Unsubscriber } from "$types/shared/writable";
  import { onDestroy, onMount } from "svelte";
  import ServerKeyOption from "./ServerKeys/ServerKeyOption.svelte";
  import dayjs from "dayjs";

  let { process, data }: { process: IMailbrokerRuntime; data: Mailbroker.MailKey[] } = $props();

  const searchValue = Store<string>("");

  let filteredKeys = $state<Mailbroker.MailKey[]>(data);
  let unsubscribe: Unsubscriber;

  onMount(() => {
    unsubscribe = searchValue.subscribe((v) => {
      const query = v.toLowerCase().trim();

      if (!query) {
        filteredKeys = data;
        return;
      }

      filteredKeys = data.filter((key) => {
        if (key.serverName.toLowerCase().includes(query)) return true;
        if (key._id.toLowerCase().includes(query)) return true;

        return false;
      });
    });
  });

  onDestroy(() => {
    unsubscribe?.();
  });
</script>

<div class="listing-header">
  <h1>{data.length} {Plural("server key", data.length)}</h1>
  <div class="search-bar">
    <span class="lucide icon-search"></span>
    <input type="text" placeholder="Search server keys" />
  </div>
  <button
    class="suggested"
    disabled={!process.admin.canAccess(AdminScopes.adminMailbrokerKeysWrite)}
    onclick={() => process.spawnOverlay("NewKeyOverlay")}>New key</button
  >
</div>

<div class="server-keys">
  {#each filteredKeys as serverKey (serverKey._id)}
    <ServerKeyOption {process} {serverKey} />
  {/each}

  {#if !filteredKeys.length}
    <p class="empty-notice">
      <span>There are no sent records that match the criteria.</span>
    </p>
  {/if}
</div>
