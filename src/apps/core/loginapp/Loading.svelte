<script lang="ts">
  import type { ReadableStore } from "$ts/writable";
  import Spinner from "../../../lib/Spinner.svelte";

  const { loadingStatus }: { loadingStatus: ReadableStore<string> } = $props();
</script>

<p class="loading">
  <Spinner height={24} />
  <span>{$loadingStatus}</span>
</p>
