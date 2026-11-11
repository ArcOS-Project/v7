<script lang="ts" generics="T extends object">
  import type { HeaderItem } from '$types/shared/tables';

	export let item: HeaderItem<T>;
	export let reversed = false;
	export let sortBy: (column: HeaderItem<T>) => void;
	export let sortedColumn: string;

	function sort() {
		if (sortedColumn === item.caption) {
			reversed = !reversed;
			sortBy(item);
			return;
		}

		sortedColumn = item.caption;
		reversed = false;
		sortBy(item);
	}
</script>

<th>
	{#if item.sortable}
		<button class="sort-button" onclick={sort} class:selected={sortedColumn === item.caption}>
			<span class="caption">{item.caption}</span>
			<span
				class="lucide"
				class:icon-arrow-up={item.caption === sortedColumn && reversed}
				class:icon-arrow-down={item.caption === sortedColumn && !reversed}
			></span>
		</button>
	{:else}
		<span>{item.caption}</span>
	{/if}
</th>
