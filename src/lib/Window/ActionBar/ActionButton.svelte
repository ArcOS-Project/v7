<script lang="ts">
  import type { Snippet } from "svelte";

  const {
    onclick,
    children,
    icon = "",
    className = "",
    suggested = false,
    disabled = false,
    title = "",
  }: {
    onclick?: (e: MouseEvent) => void;
    children: Snippet;
    icon?: string;
    className?: string;
    suggested?: boolean;
    disabled?: boolean;
    title?: string;
  } = $props();
</script>

<button class="action-bar-button {className}" class:has-icon={!!icon} aria-label={title} {title} {disabled} class:suggested {onclick}>
  {#if icon}
    <span class="lucide icon-{icon}"></span>
    <span>
      {@render children()}
    </span>
  {:else}
    {@render children()}
  {/if}
</button>
