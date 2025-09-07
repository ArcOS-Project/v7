<script lang="ts">
  import type { SqeletonRuntime } from "../runtime";
  import Tab from "./Tabs/Tab.svelte";

  const { process }: { process: SqeletonRuntime } = $props();
  const { tabs } = process;
</script>

<div class="tabs">
  {#each Object.entries(tabs) as [id, data]}
    <Tab {data} {id} {process} />
  {/each}
</div>
