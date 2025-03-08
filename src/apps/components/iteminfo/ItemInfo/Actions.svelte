<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import type { ReadableStore } from "$ts/writable";
  import type { ItemInfoRuntime } from "../runtime";
  import type { ItemInfo } from "../types";

  const { info, process }: { info: ReadableStore<ItemInfo>; process: ItemInfoRuntime } = $props();
</script>

<InfoBlock className="actions">
  <InfoRow>
    <button onclick={() => process.open()}>Open</button>
    <button class="suggested" onclick={() => process.closeWindow()}> Okay </button>
  </InfoRow>
</InfoBlock>
