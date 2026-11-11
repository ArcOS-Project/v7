<script lang="ts">
	import type { Snippet } from 'svelte';

	export let children: Snippet | undefined = undefined;
	export let className: string = '';
	export let unimportant = false;
	export let empty = false;
</script>

<td class="data-table-column {className}" class:unimportant={unimportant || empty}>
	<div class="data-table-column-content">
		{#if empty}
			<span>-</span>
		{:else if children}
			{@render children()}
		{/if}
	</div>
</td>
