<script lang="ts">
  import { TimeFrames } from "$ts/user/store";
  import type { PartialStoreItem, StoreItem } from "$types/package";
  import PackageGrid from "../AppStore/PackageGrid.svelte";
  import type { AppStoreRuntime } from "../runtime";

  const { groups, all, process }: { groups: Record<string, StoreItem[]>; all: PartialStoreItem[]; process: AppStoreRuntime } =
    $props();
</script>

{#if all?.length && groups && Object.entries(groups).length}
  {#each Object.entries(groups) as [frame, items]}
    {#if items.length}
      <PackageGrid {items} name={TimeFrames[frame]} {process} />
    {/if}
  {/each}
  <p class="end">Looks like you've reached the end.</p>
{:else}
  <div class="empty">
    <span class="lucide icon-circle-slash"></span>
    <h1>No packages!</h1>
    <p>Nobody has published a package yet! Maybe you'll be the first?</p>
  </div>
{/if}
