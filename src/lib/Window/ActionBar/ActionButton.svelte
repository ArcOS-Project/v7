<script lang="ts">
  import HtmlSpinner from "$lib/HtmlSpinner.svelte";
  import type { Snippet } from "svelte";

  const {
    onclick,
    children,
    icon = "",
    className = "",
    suggested = false,
    disabled = false,
    loading = false,
    title = "",
  }: {
    onclick?: (e: MouseEvent) => void;
    children: Snippet;
    icon?: string;
    className?: string;
    suggested?: boolean;
    disabled?: boolean;
    loading?: boolean;
    title?: string;
  } = $props();
</script>

<button
  class="action-bar-button {className}"
  class:has-icon={!!icon}
  aria-label={title}
  {title}
  disabled={disabled || loading}
  class:suggested
  {onclick}
>
  <div class="button-content" class:hide={loading}>
    {#if icon}
      <span class="lucide icon-{icon}"></span>
      <span>
        {@render children()}
      </span>
    {:else}
      {@render children()}
    {/if}
  </div>
  {#if loading}
    <div class="spinner-wrapper">
      <HtmlSpinner height={16} thickness={3} />
    </div>
  {/if}
</button>
