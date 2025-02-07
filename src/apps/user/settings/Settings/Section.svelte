<script lang="ts">
  import type { Snippet } from "svelte";

  const {
    caption = "",
    children,
    className = "",
  }: { caption?: string; children: Snippet; className?: string } = $props();
</script>

<section class={className}>
  {#if caption}
    <p class="caption">{caption}</p>
  {/if}
  <div class="content">
    {@render children()}
  </div>
</section>
