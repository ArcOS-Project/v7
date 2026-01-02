<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import type { AppPermissionsRuntime } from "../runtime";

  const { appId, process }: { appId: string, process: AppPermissionsRuntime } = $props();
</script>

<InfoBlock >
  <InfoRow className="actions">
    <p class="id">{appId}</p>
    <button class="suggested" onclick={() => process.closeWindow()}>Close</button>
  </InfoRow>
</InfoBlock>