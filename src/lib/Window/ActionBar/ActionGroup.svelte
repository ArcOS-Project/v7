<script lang="ts">
  import type { Snippet } from "svelte";

  const { children, className = "" }: { children: Snippet; className?: string } = $props();
</script>

<div class={`icon-action-group ${className}`.trim()}>
  {@render children()}
</div>
