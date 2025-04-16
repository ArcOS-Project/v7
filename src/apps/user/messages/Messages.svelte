<script lang="ts">
  import Container from "./Messages/Container.svelte";
  import Sidebar from "./Messages/Sidebar.svelte";
  import type { MessagingAppRuntime } from "./runtime";

  const { process }: { process: MessagingAppRuntime } = $props();
</script>

<Sidebar {process} />
<Container {process} />
