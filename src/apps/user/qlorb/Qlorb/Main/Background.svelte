<script lang="ts">
  import { tsParticles } from "@tsparticles/engine";
  import { loadFirePreset } from "@tsparticles/preset-fire";
  import { onMount } from "svelte";

  onMount(async () => {
    await loadFirePreset(tsParticles);
    await tsParticles.load({
      id: "__qlorb-bg",
      options: {
        preset: "fire",
        background: {
          opacity: 0,
        },
        backgroundMode: false,
        particles: {
          number: {
            limit: {
              value: 500,
            },
          },
          color: {
            value: "#888",
          },
          opacity: {
            value: 0.15,
          },
        },
      },
    });
  });
</script>

<div class="bg fullscreen" id="__qlorb-bg"></div>
