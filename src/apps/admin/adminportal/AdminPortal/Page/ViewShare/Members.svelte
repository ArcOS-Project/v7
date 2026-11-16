<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import Icon from "$lib/Icon.svelte";
  import { Logo } from "$ts/branding";
  import type { SharedDriveType } from "$types/server/shares";
  import type { ExpandedUserInfo } from "$types/user";
  import MemberRow from "./Members/MemberRow.svelte";

  const { process, share, members }: { process: IAdminPortalRuntime; share: SharedDriveType; members: ExpandedUserInfo[] } =
    $props();
</script>

<div class="section members">
  <h1>MEMBERS</h1>
  <div class="table-wrapper member-list">
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Created</th>
          <th>Approved</th>
          <th>Admin</th>
          <th class="actions">Actions</th>
        </tr>
      </thead>
      <colgroup>
        <col width="20%" />
        <col width="20%" />
        <col width="1%" />
        <col width="1%" />
        <col width="1%" />
      </colgroup>
      <tbody>
        {#each members as member (member._id)}
          <MemberRow {process} {member} {share} />
        {/each}
        {#if !members.length}
          <tr>
            <td colspan="5">
              <p class="error-text">No members!</p>
            </td>
          </tr>
        {/if}
      </tbody>
    </table>
  </div>
</div>
