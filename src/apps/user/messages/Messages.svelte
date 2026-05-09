<script lang="ts">
  import type { IMessagingAppRuntime } from "$interfaces/runtimes/IMessagingAppRuntime";
  import Container from "./Messages/Container.svelte";
  import Sidebar from "./Messages/Sidebar.svelte";

  const { process }: { process: IMessagingAppRuntime } = $props();
  const { messageWindow } = process;
</script>

{#if !messageWindow}
  <Sidebar {process} />
{/if}
<Container {process} />
