<script lang="ts">
  import type { SqeletonRuntime } from "../runtime";
  import Tab from "./Tabs/Tab.svelte";

  const { process }: { process: SqeletonRuntime } = $props();
  const { tabs, maximizeBottom } = process;
</script>

<div class="tabs">
  {#each Object.entries(tabs) as [id, data]}
    <Tab {data} {id} {process} />
  {/each}
  <button
    class="maximize lucide"
    class:icon-maximize-2={!$maximizeBottom}
    class:icon-minimize-2={$maximizeBottom}
    onclick={() => ($maximizeBottom = !$maximizeBottom)}
    title={$maximizeBottom ? "Unmaximize" : "Maximize"}
    aria-label={$maximizeBottom ? "Unmaximize" : "Maximize"}
  ></button>
</div>
