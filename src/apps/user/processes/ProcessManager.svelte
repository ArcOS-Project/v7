<script lang="ts">
  import Actions from "./ProcessManager/Actions.svelte";
  import Header from "./ProcessManager/Header.svelte";
  import Tree from "./ProcessManager/Tree.svelte";
  import type { ProcessManagerRuntime } from "./runtime";

  const { process }: { process: ProcessManagerRuntime } = $props();
</script>

<div class="top">
  <Header />
  <Tree {process} />
</div>
<Actions {process} />
