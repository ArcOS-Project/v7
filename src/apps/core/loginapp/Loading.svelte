<script lang="ts">
  import type { ReadableStore } from "$types/writable";
  import Spinner from "../../../lib/Spinner.svelte";

  const { loadingStatus }: { loadingStatus: ReadableStore<string> } = $props();
</script>

<p class="loading">
  <Spinner height={24} />
  <span>{@html $loadingStatus}</span>
</p>
