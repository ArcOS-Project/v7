<script lang="ts">
  import { onMount } from "svelte";
  import type { QlorbRuntime } from "../runtime";
  import Background from "./Main/Background.svelte";
  import OnScreenDisplay from "./Main/OnScreenDisplay.svelte";
  import Game from "./Main/Game.svelte";

  const { process }: { process: QlorbRuntime } = $props();
  const { Score } = process;
  const { CurrentPage } = process;

  let level = $state<number>(0);

  Score.subscribe((v) => (level = Math.floor(v / 100)));

  onMount(() => {
    process.flushStores();
  });
</script>

{#if $CurrentPage === "game"}
  <div class="game level-{level}">
    <Background />
    <OnScreenDisplay {process} />
    <Game {process} />
  </div>
{/if}
