<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import Spinner from "$lib/Spinner.svelte";
  import { Store } from "$ts/writable";
  import type { BetaFeedback } from "$types/system/beta";
  import dayjs from "dayjs";
  import { onMount } from "svelte";
  import type { BetaFeedbackData } from "../../types";
  import ItemDetails from "./BetaFeedback/ItemDetails.svelte";

  const {
    process,
    data,
  }: {
    process: IAdminPortalRuntime;
    data: BetaFeedbackData;
  } = $props();

  let selectedVersion = Store<string>();
  let selectedItem = $state<BetaFeedback | undefined>();
  let loading = $state<boolean>(false);
  let items = $state<BetaFeedback[]>([]);

  onMount(async () => {
    selectedVersion.subscribe(async (v) => {
      if (!v) return;
      await refresh();
    });
  });

  async function refresh() {
    loading = true;
    selectedItem = undefined;
    items = (await process.admin.getBetaFeedbackFor($selectedVersion)).result ?? [];
    loading = false;
  }
</script>

<div class="versions">
  <div class="header">
    <p>BETA FEEDBACK</p>
  </div>
  {#each Object.entries(data.versions) as [version, amount]}
    <button class="version" class:selected={version === $selectedVersion} onclick={() => ($selectedVersion = version)}>
      Beta v{version} ({amount})
    </button>
  {/each}
</div>
<div class="beta-container" class:loading>
  {#if loading}
    <Spinner height={32} />
  {:else if selectedItem}
    <ItemDetails item={selectedItem} bind:selectedItem {process} />
  {:else}
    <div class="beta-list">
      <div class="beta-row header">
        <div class="segment username">Username</div>
        <div class="segment title">Title</div>
        <div class="segment server">Server</div>
        <div class="segment date">Date</div>
        <div class="segment read">Read?</div>
      </div>
      {#each items as item (item.id)}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="beta-row" onclick={() => (selectedItem = item)}>
          <div class="segment username">{item.username}</div>
          <div class="segment title">{item.title}</div>
          <div class="segment server">{item.serverName}</div>
          <div class="segment date">{dayjs(item.created).format("DD-MM-YYYY, HH:mm:ss")}</div>
          <div class="segment read">
            {#if item.read}
              <span class="lucide icon-check-check"></span>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
