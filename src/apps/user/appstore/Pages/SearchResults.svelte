<script lang="ts">
  import type { IAppStoreRuntime } from "$interfaces/runtimes/IAppStoreRuntime";
  import type { PartialStoreItem } from "$types/package";
  import PackageGrid from "../AppStore/PackageGrid.svelte";

  const { process, results, query }: { process: IAppStoreRuntime; results: PartialStoreItem[]; query: string } = $props();
</script>

{#if results && query}
  <PackageGrid {process} items={results} name="Searching for '{query}'" />
{/if}
