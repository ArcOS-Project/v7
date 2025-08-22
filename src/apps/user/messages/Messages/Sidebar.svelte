<script lang="ts">
  import type { MessagingAppRuntime } from "../runtime";
  import List from "./Sidebar/List.svelte";
  import Pages from "./Sidebar/Pages.svelte";

  const { process }: { process: MessagingAppRuntime } = $props();
  const { buffer } = process;
</script>

<div class="sidebar">
  <Pages {process} />
  <List {process} />
</div>
