<script lang="ts">
  const {
    height,
    thickness = 5,
    stopped = false,
  }: { height: number; thickness?: number; stopped?: boolean } = $props();
</script>

<!-- svelte-ignore element_invalid_self_closing_tag -->
<div
  class="html-spinner"
  style="--size: {height}px; --thickness: {thickness}px;"
  class:going={!stopped}
/>
