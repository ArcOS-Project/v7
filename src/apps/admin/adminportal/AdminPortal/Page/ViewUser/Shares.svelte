<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/admin";
  import Spinner from "$lib/Spinner.svelte";
  import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
  import { Store } from "$ts/writable";
  import type { SharedDriveType } from "$types/shares";
  import type { ExpandedUserInfo } from "$types/user";
  import { onMount } from "svelte";
  import ShareRow from "./Shares/ShareRow.svelte";

  const { process, user }: { process: IAdminPortalRuntime; user: ExpandedUserInfo } = $props();
  const selection = Store<string>();

  let shares: SharedDriveType[] = $state([]);
  let loading = $state(true);

  onMount(async () => {
    shares = await process.admin.getSharesOf(user._id);
    loading = false;
  });
</script>

{#if process.admin.canAccess(AdminScopes.adminShareListUser)}
  <div class="section shares">
    <h1>Shares</h1>
    <div class="share-list" class:centered={loading || !shares.length}>
      {#if loading}
        <Spinner height={16} />
      {:else if shares.length}
        <div class="share-row header">
          <div class="segment icon">
            <span class="lucide icon-hard-drive"></span>
          </div>
          <div class="segment name">Share name</div>
          <div class="segment size">Size</div>
          <div class="segment members">ACC</div>
          <div class="segment locked">LCK</div>
        </div>
        {#each shares as share (share._id)}
          <ShareRow {process} {selection} {share} />
        {/each}
      {:else}
        <p class="error-text">NO_SHARES</p>
      {/if}
    </div>
  </div>
{/if}
