<script lang="ts">
  import type { ReadableStore } from "$types/shared/writable";

  let { filter }: { filter: ReadableStore<string> } = $props();
</script>

<select class="filter" bind:value={$filter}>
  <option value="all">All</option>
  <option value="hidden">Hidden</option>
  <option value="visible">Visible</option>
  <option value="builtin">Built-in</option>
  <option value="thirdparty">Third-party</option>
  <option value="disabled">Disabled</option>
</select>
