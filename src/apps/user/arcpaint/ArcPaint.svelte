<script lang="ts">
  import { onMount } from "svelte";
  import type { ArcPaintRuntime } from "./runtime";

  const { process }: { process: ArcPaintRuntime } = $props();
  const { ctx, points } = process;

  let canvas = $state<HTMLCanvasElement>();
  let dragging = $state(false);
  let color = $state("black");

  const add = (x: number, y: number, c: string) =>
    points.update((p) => {
      p.push([x, y, c, 5]);
      return p;
    });

  const stuff = (ev: PointerEvent) => {
    if (!dragging) return;

    const rect = canvas!.getBoundingClientRect();

    const x = (ev.clientX - rect.left) * (canvas!.width / rect.width);
    const y = (ev.clientY - rect.top) * (canvas!.height / rect.height);

    add(x, y, color);
  };

  onMount(() => process.frame());
  $effect(() => {
    if (canvas) ctx.set(canvas.getContext("2d") ?? undefined);
  });
</script>

<div class="topbar">
  <button onclick={() => process.clear()}>clear</button>
  <button onclick={() => process.export()}>export</button>
  <input type="color" bind:value={color} />
</div>

<canvas
  bind:this={canvas}
  onpointerdown={(ev) => {
    dragging = true;
    stuff(ev);
  }}
  onpointermove={(ev) => stuff(ev)}
  onpointerup={() => (dragging = false)}
></canvas>

<style>
  .topbar {
    padding: 0.5em;
  }

  canvas {
    width: 100%;
    height: 100%;
    cursor: crosshair;
  }
</style>
