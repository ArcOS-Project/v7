<script lang="ts">
  import type { Snippet } from "svelte";

  const { className = "", children }: { className?: string; children: Snippet } = $props();
</script>

<div class="info-block {className}">
  {@render children()}
</div>
