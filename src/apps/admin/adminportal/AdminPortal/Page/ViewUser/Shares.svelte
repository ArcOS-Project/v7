<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import Spinner from "$lib/Spinner.svelte";
  import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
  import { Store } from "$ts/writable";
  import type { SharedDriveType } from "$types/server/shares";
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
  <div class="section shares shrink">
    <h1>Shares</h1>
    <div class="table-wrapper share-list" class:centered={loading || !shares.length}>
      {#if loading}
        <Spinner height={16} />
      {:else}
        <table>
          <thead>
            <tr>
              <th class="icon-col">
                <span class="lucide icon-hard-drive"></span>
              </th>
              <th>Share name</th>
              <th>Size</th>
              <th>DFAs</th>
              <th>Locked</th>
            </tr>
          </thead>
          <colgroup>
            <col width="1%" />
            <col width="20%" />
            <col width="10%" />
            <col width="1%" />
            <col width="1%" />
          </colgroup>
          <tbody>
            {#each shares as share (share._id)}
              <ShareRow {process} {selection} {share} />
            {/each}
            {#if !shares.length}
              <tr>
                <td colspan="5">
                  <p class="error-text">NO_SHARES</p>
                </td>
              </tr>
            {/if}
          </tbody>
        </table>
      {/if}
    </div>
  </div>
{/if}
