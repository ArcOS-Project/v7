<script lang="ts">
  import type { ProcessManagerRuntime } from "../../runtime";
  import Actions from "../Actions.svelte";
  import Header from "../Header.svelte";
  import Tree from "../Tree.svelte";

  const { process }: { process: ProcessManagerRuntime } = $props();
</script>

<div class="top">
  <Header />
  <Tree {process} />
</div>
<Actions {process} />
