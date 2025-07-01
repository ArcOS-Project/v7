<script lang="ts">
  import type { PartialStoreItem } from "$types/package";
  import PackageGrid from "../AppStore/PackageGrid.svelte";
  import type { AppStoreRuntime } from "../runtime";

  const { recent, process }: { recent: PartialStoreItem[]; process: AppStoreRuntime } = $props();
</script>

{#if recent.length}
  <PackageGrid items={recent} name="Recently Added" {process} />
  <p class="end">Looks like you've reached the end.</p>
{:else}
  <div class="empty">
    <span class="lucide icon-circle-slash"></span>
    <h1>No packages!</h1>
    <p>There haven't been any new packages published in the last week. Maybe you'll be the first?</p>
  </div>
{/if}
