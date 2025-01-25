<script lang="ts">
  import type { Component } from "svelte";
  import type { SettingsRuntime } from "../runtime";
  import { SlideStore } from "../store/slides";

  const { process }: { process: SettingsRuntime } = $props();
  const { slideVisible, currentSlide } = process;

  let Slide: Component | undefined = $state();

  $effect(() => {
    const sub = currentSlide.subscribe((v) => {
      Slide = SlideStore.get(v);
    });

    return () => sub();
  });
</script>

<div class="slide-wrapper" class:visible={$slideVisible}>
  <div class="slide {$currentSlide}">
    {#if Slide}
      <Slide {process} />
    {/if}
  </div>
</div>
