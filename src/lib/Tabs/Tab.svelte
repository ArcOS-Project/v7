<script lang="ts">
  import type { Snippet } from "svelte";

  const {
    current,
    selector,
    children,
  }: { current: string; selector: string; children: Snippet } = $props();
</script>

<div class="tab" class:visible={current == selector}>
  {@render children()}
</div>
