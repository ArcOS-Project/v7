<script lang="ts">
  import type { Snippet } from "svelte";

  const { key, children, className = "" }: { key: string; children: Snippet; className?: string } = $props();
</script>

<div class={`action-bar-pill ${className}`.trim()}>
  <div class="key">{key}</div>
  <div class="value">
    {@render children()}
  </div>
</div>
