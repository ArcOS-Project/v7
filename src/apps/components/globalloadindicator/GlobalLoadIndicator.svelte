<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import type { GlobalLoadIndicatorRuntime } from "./runtime";

  const { process }: { process: GlobalLoadIndicatorRuntime } = $props();
  const { caption } = process;
</script>

<p class="caption">{$caption}</p>
<Spinner height={32} />
