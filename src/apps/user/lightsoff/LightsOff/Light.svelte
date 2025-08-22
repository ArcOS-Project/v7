<script lang="ts">
  import type { LightsOffRuntime } from "../runtime";

  const { light, x, y, process }: { light: boolean; x: number; y: number; process: LightsOffRuntime } = $props();

  function toggle() {
    process.ToggleLight(x, y);
  }
</script>

<button id="pos-{x}x{y}" class="light" class:lit={light} onclick={toggle} aria-label="{x}x{y}"></button>

<style scoped>
  button.light.lit {
    background-color: var(--accent) !important;
  }
</style>
