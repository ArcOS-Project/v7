<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    caption: string;
    sub?: string;
    children?: Snippet;
    className?: string;
  }

  const { caption, sub = "", children, className = "" }: Props = $props();
</script>

<div class="setting {className}">
  <div class="left">
    <p class="caption">{caption}</p>
    <p class="sub">{sub}</p>
  </div>
  {#if children}
    <div class="slot">{@render children()}</div>
  {/if}
</div>
