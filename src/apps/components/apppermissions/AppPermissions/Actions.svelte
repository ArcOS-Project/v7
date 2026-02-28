<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import { Permissions } from "$ts/permissions";
  import type { AppPermissionsRuntime } from "../runtime";

  const { process, permissionId }: { process: AppPermissionsRuntime; permissionId: string } = $props();
</script>

<ActionBar floating>
  {#snippet leftContent()}
    <ActionButton onclick={() => Permissions.resetPermissionsById(permissionId)} disabled={!permissionId}>Reset all</ActionButton>
  {/snippet}
  {#snippet rightContent()}
    <ActionButton suggested onclick={() => process.closeWindow()}>Close</ActionButton>
  {/snippet}
</ActionBar>
