<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import type { ItemInfoRuntime } from "../../runtime";

  const { process }: { process: ItemInfoRuntime } = $props();
</script>

<InfoBlock className="actions">
  <InfoRow>
    <button onclick={() => process.open()}>Open</button>
    <button class="suggested" onclick={() => process.closeWindow()}> Okay </button>
  </InfoRow>
</InfoBlock>
