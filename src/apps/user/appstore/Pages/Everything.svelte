<script lang="ts">
  import type { PartialStoreItem } from "$types/package";
  import PackageGrid from "../AppStore/PackageGrid.svelte";
  import type { AppStoreRuntime } from "../runtime";

  const { all, process }: { all: PartialStoreItem[]; process: AppStoreRuntime } = $props();
</script>

{#if all?.length}
  <PackageGrid items={all} name="Everything" {process} />
  <p class="end">Looks like you've reached the end.</p>
{:else}
  <div class="empty">
    <span class="lucide icon-circle-slash"></span>
    <h1>No packages!</h1>
    <p>That's odd... There aren't any packages here. Maybe come back later?</p>
  </div>
{/if}
