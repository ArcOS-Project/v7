<script lang="ts">
  import Content from "./Logging/Content.svelte";
  import Sidebar from "./Logging/Sidebar.svelte";
  import type { LoggingRuntime } from "./runtime";

  const { process }: { process: LoggingRuntime } = $props();
  const { groups, currentSource, sources } = process;
</script>

{#if $groups}
  <Sidebar sources={$sources} {currentSource} />
  <Content {process} />
{/if}
