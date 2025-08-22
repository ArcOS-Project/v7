<script lang="ts">
  import type { ItemInfoRuntime } from "../runtime";
  import Actions from "./Drive/Actions.svelte";
  import Header from "./Drive/Header.svelte";
  import Meta from "./Drive/Meta.svelte";

  const { process }: { process: ItemInfoRuntime } = $props();
</script>

<Header {process} />
<Meta {process} />
<Actions {process} />
