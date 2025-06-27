<script lang="ts">
  import type { PartialStoreItem, StoreItem } from "$types/package";
  import PackageGrid from "../AppStore/PackageGrid.svelte";
  import type { AppStoreRuntime } from "../runtime";

  const { all, process }: { all: PartialStoreItem[]; process: AppStoreRuntime } = $props();
</script>

<PackageGrid items={all} name="Everything" {process} />
<p class="end">Looks like you've reached the end.</p>
