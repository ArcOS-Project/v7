<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/admin";
  import { Logo } from "$ts/branding";
  import type { SharedDriveType } from "$types/shares";
  import type { ExpandedUserInfo } from "$types/user";
  import MemberRow from "./Members/MemberRow.svelte";

  const { process, share, members }: { process: IAdminPortalRuntime; share: SharedDriveType; members: ExpandedUserInfo[] } =
    $props();
</script>

<div class="section members">
  <h1>MEMBERS</h1>
  <div class="member-list">
    {#if members.length}
      <div class="member-row header">
        <div class="segment pfp">
          <img src={Logo()} alt="" />
        </div>
        <div class="segment username">Username</div>
        <div class="segment created">Created</div>
        <div class="segment approved">APP</div>
        <div class="segment admin">ADM</div>
        <div class="segment kick">KCK</div>
      </div>
      {#each members as member (member._id)}
        <MemberRow {process} {member} {share} />
      {/each}
    {:else}
      <p class="error-text">No members!</p>
    {/if}
  </div>
</div>
