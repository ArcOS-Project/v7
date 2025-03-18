<script lang="ts">
  import type { LoggingRuntime } from "../../runtime";
  import Item from "./List/Item.svelte";

  const { process }: { process: LoggingRuntime } = $props();
  const { currentSource, selectedLevel, groups } = process;
  const { Logs } = process.kernel;
</script>

<table class="log-list">
  <thead>
    <tr>
      <th class="icon"></th>
      <th class="source">Source</th>
      <th class="timeout">Timestamp</th>
      <th class="message">Message</th>
    </tr>
  </thead>
  <tbody>
    {#each $groups.get($currentSource) || [] as item, i (`${i}-${item.kernelTime}-${item.message}-${item.source}`)}
      {#if $selectedLevel == "all" || item.level === $selectedLevel}
        <Item {item} />
      {/if}
    {/each}
  </tbody>
</table>
