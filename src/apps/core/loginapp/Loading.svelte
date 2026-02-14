<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import type { ReadableStore } from "$types/writable";

  const { loadingStatus }: { loadingStatus: ReadableStore<string> } = $props();
</script>

<p class="loading">
  <Spinner height={24} />
  <span>{@html $loadingStatus}</span>
</p>
