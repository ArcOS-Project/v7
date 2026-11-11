<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    leftContent?: Snippet;
    rightContent?: Snippet;
    className?: string;
    floating?: boolean;
    onTop?: boolean;
  }

  const { leftContent, rightContent, className = "", floating = false, onTop = false }: Props = $props();
</script>

<div class={`window-action-bar ${className}`.trim()} class:floating class:on-top={onTop}>
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
