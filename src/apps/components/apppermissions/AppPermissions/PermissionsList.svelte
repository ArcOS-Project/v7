<script lang="ts">
  import { PERMISSIONS } from "$ts/permissions/store";
  import PermissionRow from "./PermissionRow.svelte";

  const { permissionId }: { permissionId: string } = $props();
</script>

<div class="permissions-list" class:empty={!permissionId}>
  {#if permissionId}
    {#each PERMISSIONS as id (id)}
      <PermissionRow {id} {permissionId} />
    {/each}
  {:else}
    <div class="empty-notice">
      <span class="lucide icon-shield-ban"></span>
      <h1>No permissions</h1>
      <p class="graytext">This application hasn't yet asked for permissions.</p>
    </div>
  {/if}
</div>
