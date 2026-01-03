<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import { Permissions } from "$ts/permissions";
  import type { AppPermissionsRuntime } from "../runtime";

  const { process, permissionId }: { process: AppPermissionsRuntime; permissionId: string } = $props();
</script>

<InfoBlock>
  <InfoRow className="actions">
    <button onclick={() => Permissions.resetPermissionsById(permissionId)}>Reset all</button>
    <button class="suggested" onclick={() => process.closeWindow()}>Close</button>
  </InfoRow>
</InfoBlock>
