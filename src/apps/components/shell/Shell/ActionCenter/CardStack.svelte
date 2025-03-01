<script lang="ts">
  import { Sleep } from "$ts/sleep";
  import type { UserPreferencesStore } from "$types/user";
  import type { ShellRuntime } from "../../runtime";
  import Gallery from "./CardStack/Cards/Gallery.svelte";
  import Notes from "./CardStack/Cards/Notes.svelte";
  import Weather from "./CardStack/Cards/Weather.svelte";
  import Indicator from "./CardStack/Indicator.svelte";

  const {
    userPreferences,
    process,
  }: { userPreferences: UserPreferencesStore; process: ShellRuntime } =
    $props();

  const { userDaemon } = process;

  let changing = $state(false);
  const scrollThreshold = 500;
  let accumulatedScroll = 0;

  async function onwheel(e: WheelEvent) {
    if (changing) return;

    accumulatedScroll += e.deltaY;

    let { cardIndex } = $userPreferences.shell.actionCenter;

    if (Math.abs(accumulatedScroll) < scrollThreshold) return;

    if (accumulatedScroll > 0) {
      if (cardIndex >= max - 1) return;
      cardIndex++;
    } else {
      if (cardIndex <= 0) return;
      cardIndex--;
    }

    changing = true;

    $userPreferences.shell.actionCenter.cardIndex = cardIndex;

    await Sleep(150);

    changing = false;
    accumulatedScroll = 0;
  }

  let max = 3;
</script>

<div class="card-stack" {onwheel} class:changing>
  <Indicator {max} index={$userPreferences.shell.actionCenter.cardIndex} />
  <div
    class="cards"
    style="--index: {$userPreferences.shell.actionCenter.cardIndex};"
  >
    {#if userDaemon}
      <Weather {process} />
      <Notes {userPreferences} />
      <Gallery {userPreferences} {process} />
    {:else}
      <div class="card">
        <span class="error-text">ERR_NO_DAEMON</span>
      </div>
      <div class="card">
        <span class="error-text">ERR_NO_DAEMON</span>
      </div>
      <div class="card">
        <span class="error-text">ERR_NO_DAEMON</span>
      </div>
    {/if}
  </div>
</div>
