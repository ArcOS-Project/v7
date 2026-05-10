<script lang="ts">
  import type { ILoggingRuntime } from "$interfaces/runtimes/ILoggingRuntime";
  import Content from "./Logging/Content.svelte";
  import Sidebar from "./Logging/Sidebar.svelte";

  const { process }: { process: ILoggingRuntime } = $props();
  const { groups, currentSource, sources } = process;
</script>

{#if $groups}
  <Sidebar sources={$sources} {currentSource} />
  <Content {process} />
{/if}
