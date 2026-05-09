<script lang="ts">
  import type { IMessagingAppRuntime } from "$interfaces/runtimes/IMessagingAppRuntime";
  import List from "./Sidebar/List.svelte";
  import Pages from "./Sidebar/Pages.svelte";

  const { process }: { process: IMessagingAppRuntime } = $props();
</script>

<div class="sidebar">
  <Pages {process} />
  <List {process} />
</div>
