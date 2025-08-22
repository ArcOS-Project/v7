<script lang="ts">
  import Container from "./Messages/Container.svelte";
  import Sidebar from "./Messages/Sidebar.svelte";
  import type { MessagingAppRuntime } from "./runtime";

  const { process }: { process: MessagingAppRuntime } = $props();
  const { messageWindow } = process;
</script>

{#if !messageWindow}
  <Sidebar {process} />
{/if}
<Container {process} />
