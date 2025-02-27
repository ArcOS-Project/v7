<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    title: string;
    help?: () => any;
    right?: boolean;
    className?: string;
    children: Snippet;
  }

  const {
    title,
    help,
    right = false,
    className = "",
    children,
  }: Props = $props();
</script>

<div class="segment {className}" class:right>
  <p class="title">
    {title}
    {#if help}
      <button class="lucide icon-hand-helping" aria-label="What's this?"
      ></button>
    {/if}
  </p>
  <p class="value">
    {@render children()}
  </p>
</div>
