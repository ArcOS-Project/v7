<script lang="ts">
  import type { IAppStoreRuntime } from "$interfaces/runtimes/IAppStoreRuntime";
  import type { PartialStoreItem } from "$types/package";
  import PackageGrid from "../AppStore/PackageGrid.svelte";

  const { official, process }: { official: PartialStoreItem[]; process: IAppStoreRuntime } = $props();
</script>

{#if official?.length}
  <PackageGrid items={official} name="Official Apps" {process} />
  <p class="end">Looks like you've reached the end.</p>
{:else}
  <div class="empty">
    <span class="lucide icon-circle-slash"></span>
    <h1>No packages!</h1>
    <p>That's odd... There aren't any packages here. Maybe come back later?</p>
  </div>
{/if}
