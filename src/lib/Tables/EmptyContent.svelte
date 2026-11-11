<script lang="ts">
	let {
		icon,
		title,
		message,
		actionText = '',
		action
	}: {
		icon: string;
		title: string;
		message: string;
		actionText?: string;
		action?: () => void;
	} = $props();
</script>

<div class="empty-content">
	<span class="lucide icon-{icon}"></span>
	<h1>{title}</h1>
	<p class="message">{message}</p>
	{#if actionText && action}
		<button class="action-button suggested" onclick={action}>{actionText}</button>
	{/if}
</div>
