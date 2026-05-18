<script lang="ts">
  import type { Snippet } from "svelte";

  const {
    leftContent,
    rightContent,
    className = "",
    floating = false,
  }: { leftContent?: Snippet; rightContent?: Snippet; className?: string; floating?: boolean } = $props();
</script>

<div class={`window-action-bar ${className}`.trim()} class:floating>
  <div class="left">
    {#if leftContent}
      {@render leftContent()}
    {/if}
  </div>
  <div class="right">
    {#if rightContent}
      {@render rightContent()}
    {/if}
  </div>
</div>
