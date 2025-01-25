<script lang="ts">
  import type { Component } from "svelte";
  import type { SettingsRuntime } from "../runtime";
  import { SlideStore } from "../store/slides";
  import { Sleep } from "$ts/sleep";

  const { process }: { process: SettingsRuntime } = $props();
  const { slideVisible, currentSlide } = process;

  let Slide: Component | undefined = $state();

  $effect(() => {
    const sub = currentSlide.subscribe((v) => {
      Slide = SlideStore.get(v);
    });

    const sub2 = slideVisible.subscribe(async (v) => {
      if (v) return;
      await Sleep(200);
      $currentSlide = "";
      Slide = undefined;
    });

    return () => {
      sub();
      sub2();
    };
  });
</script>

<div class="slide-wrapper" class:visible={$slideVisible}>
  <div class="slide {$currentSlide}">
    {#if Slide}
      <Slide {process} />
    {/if}
  </div>
</div>
