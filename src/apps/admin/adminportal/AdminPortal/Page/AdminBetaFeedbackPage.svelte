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
<div class="table-wrapper beta-container shrink" class:loading>
  {#if loading}
    <Spinner height={32} />
  {:else if selectedItem}
    <ItemDetails item={selectedItem} bind:selectedItem {process} />
  {:else}
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Title</th>
          <th>Server</th>
          <th>Date</th>
          <th>Read?</th>
        </tr>
      </thead>
      <colgroup>
        <col width="10%" />
        <col width="30%" />
        <col width="20%" />
        <col width="30%" />
        <col width="1%" />
      </colgroup>
      <tbody>
        {#each items as item (item.id)}
          <tr onclick={() => (selectedItem = item)}>
            <td>{item.username}</td>
            <td>{item.title}</td>
            <td>{item.serverName}</td>
            <td>{dayjs(item.created).format("DD-MM-YYYY, HH:mm:ss")}</td>
            <td class="icon-col">
              {#if item.read}
                <span class="lucide icon-check-check"></span>
              {/if}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>
