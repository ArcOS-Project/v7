<script lang="ts">
  import type { SqeletonRuntime } from "../../runtime";
  import type { SqeletonTab } from "../../types";

  const { process, data, id }: { process: SqeletonRuntime; data: SqeletonTab; id: string } = $props();
  const { currentTab } = process;
  const count = data.count;
</script>

<button class:active={$currentTab === id} onclick={() => ($currentTab = id)} class={data.className}>
  <span>{data.name}</span>
  {#if count && $count?.length}
    <span class="count">{$count.length}</span>
  {/if}
</button>
