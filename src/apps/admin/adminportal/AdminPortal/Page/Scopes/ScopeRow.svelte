<script lang="ts">
  import { AdminPortalPageStore } from "$apps/admin/adminportal/store";
  import type { AdminPortalPage } from "$apps/admin/adminportal/types";
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
  import type { ExpandedUserInfo } from "$types/user";
  import { onMount } from "svelte";
  import UsernameDisplay from "../../UsernameDisplay.svelte";

  const { process, admin }: { process: IAdminPortalRuntime; admin: ExpandedUserInfo } = $props();
  let pages = $state<AdminPortalPage[]>([]);

  onMount(() => {
    pages = [...AdminPortalPageStore].filter(([_, p]) => process.admin.canAccessP(admin, ...(p.scopes || []))).map(([_, p]) => p);
  });
</script>

<tr onclick={() => process.switchPage("viewScopes", { admin })}>
  <td>
    <UsernameDisplay user={admin} {process} />
  </td>
  <td>
    <div class="pages">
      {#each pages as page}
        {#if !page.hidden}
          <div class="page">
            <span class="lucide page-icon icon-{page.icon}" title={page.name}></span>
            <span>{page.name}</span>
          </div>
        {/if}
      {/each}
    </div>
  </td>
  <td>{admin.adminScopes.length}</td>
  <td class:clr-red={process.admin.canAccessP(admin, AdminScopes.adminGod)}>
    {process.admin.canAccessP(admin, AdminScopes.adminGod) ? "Yes" : "No"}
  </td>
</tr>
