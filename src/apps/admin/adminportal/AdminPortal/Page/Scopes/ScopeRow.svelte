<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import { AdminPortalPageStore } from "$apps/admin/adminportal/store";
  import type { AdminPortalPage } from "$apps/admin/adminportal/types";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { AdminScopes } from "$ts/server/admin/store";
  import type { ExpandedUserInfo } from "$types/user";
  import { onMount } from "svelte";

  const { process, admin }: { process: AdminPortalRuntime; admin: ExpandedUserInfo } = $props();
  let pages = $state<AdminPortalPage[]>([]);

  onMount(() => {
    pages = [...AdminPortalPageStore].filter(([_, p]) => process.admin.canAccessP(admin, ...(p.scopes || []))).map(([_, p]) => p);
  });
</script>

<div class="row">
  <div class="segment pfp">
    <ProfilePicture fallback={admin.profile.profilePicture} height={20} />
  </div>
  <div class="segment username">{admin.username}</div>
  <div class="segment pages">
    {#each pages as page}
      {#if !page.hidden}
        <div class="page">
          <span class="lucide page-icon icon-{page.icon}" title={page.name}></span>
          <span>{page.name}</span>
        </div>
      {/if}
    {/each}
  </div>
  <div class="segment count">{admin.adminScopes.length}</div>
  <div class="segment god">{admin.adminScopes.includes(AdminScopes.adminGod) ? "Yes" : "No"}</div>
</div>
