<script lang="ts">
  import type { ReadableStore } from "$types/shared/writable";

  let { search }: { search: ReadableStore<string> } = $props();
</script>

<div class="search">
  <span class="lucide icon-search"></span>
  <input type="text" placeholder="Find apps..." bind:value={$search} />
</div>
