<script lang="ts">
  import { Plural } from "$ts/util";
  import { Store } from "$ts/writable";
  import type { Mailbroker } from "$types/server/mailbroker";
  import type { Unsubscriber } from "$types/shared/writable";
  import { onDestroy, onMount } from "svelte";
  import SentListingOption from "./Sent/SentListingOption.svelte";
  import type { IMailbrokerManagerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";

  let { data, process }: { data: Mailbroker.SentMail[]; process: IMailbrokerManagerRuntime } = $props();

  const searchValue = Store<string>("");

  let filteredSent = $state<Mailbroker.SentMail[]>(data);
  let unsubscribe: Unsubscriber;

  onMount(() => {
    unsubscribe = searchValue.subscribe((v) => {
      const query = v.toLowerCase().trim();

      if (!query) {
        filteredSent = data;
        return;
      }

      filteredSent = data.filter((sent) => {
        if (sent.to.email.toLowerCase().includes(query)) return true;
        if (sent.to.serverName?.toLowerCase().includes(query)) return true;
        if (sent.to.username?.toLowerCase().includes(query)) return true;
        if (sent.subject.toLowerCase().includes(query)) return true;
        if (sent._id.toLowerCase().includes(query)) return true;

        return false;
      });
    });
  });

  onDestroy(() => {
    unsubscribe?.();
  });
</script>

<div class="listing-header">
  <h1>{data.length} {Plural("sent email", data.length)}</h1>
  <div class="search-bar">
    <span class="lucide icon-search"> </span>
    <input type="text" bind:value={$searchValue} placeholder="Search sent records" />
  </div>
</div>

<div class="sent-emails">
  {#each filteredSent.toReversed() as sentRecord (sentRecord._id)}
    <SentListingOption {process} {sentRecord} />
  {/each}

  {#if !filteredSent.length}
    <p class="empty-notice">
      <span>There are no sent records that match the criteria.</span>
    </p>
  {/if}
</div>
