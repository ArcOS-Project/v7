<script lang="ts">
  import type { PartialStoreItem } from "$types/package";
  import PackageGrid from "../AppStore/PackageGrid.svelte";
  import type { AppStoreRuntime } from "../runtime";

  const { process, results, query }: { process: AppStoreRuntime; results: PartialStoreItem[]; query: string } = $props();
</script>

{#if results && query}
  <PackageGrid {process} items={results} name="Searching for '{query}'" />
{/if}
