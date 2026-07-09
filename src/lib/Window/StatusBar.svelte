<script lang="ts">
  import type { Snippet } from "svelte";

  const {
    leftContent,
    rightContent,
    className = "",
  }: { leftContent?: Snippet; rightContent?: Snippet; className?: string } = $props();
</script>

<div class={`window-status-bar ${className}`.trim()}>
  {#if leftContent}
    <div class="status-bar-left">
      {@render leftContent()}
    </div>
  {/if}
  {#if rightContent}
    <div class="status-bar-right">
      {@render rightContent()}
    </div>
  {/if}
</div>
