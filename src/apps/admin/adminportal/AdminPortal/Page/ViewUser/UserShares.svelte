<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import Spinner from "$lib/Spinner.svelte";
  import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
  import { Store } from "$ts/writable";
  import type { SharedDriveType } from "$types/server/shares";
  import type { ExpandedUserInfo } from "$types/user";
  import { onMount } from "svelte";
  import UserShareRow from "./UserShares/UserShareRow.svelte";
  import type { BugReport } from "$types/server/bughunt";

  const {
    process,
    props,
  }: {
    process: IAdminPortalRuntime;
    props: { user: ExpandedUserInfo; reports: BugReport[] };
  } = $props();
  const selection = Store<string>();

  let shares: SharedDriveType[] = $state([]);
  let loading = $state(true);

  onMount(async () => {
    shares = await process.admin.getSharesOf(props.user._id);
    loading = false;
  });
</script>

{#if process.admin.canAccess(AdminScopes.adminShareListUser)}
  <div class="table-wrapper share-list shrink" class:centered={loading}>
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
          <col width="70%" />
          <col width="17%" />
          <col width="1%" />
          <col width="1%" />
        </colgroup>
        <tbody>
          {#each shares as share (share._id)}
            <UserShareRow {process} {selection} {share} />
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
{/if}
