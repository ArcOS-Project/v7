<script lang="ts">
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

  function onwheel(e: WheelEvent) {
    let { cardIndex } = $userPreferences.shell.actionCenter;

    if (e.deltaY >= 0) {
      if (cardIndex >= max - 1) return;

      cardIndex++;
    } else {
      if ($userPreferences.shell.actionCenter.cardIndex <= 0) return;

      cardIndex--;
    }

    $userPreferences.shell.actionCenter.cardIndex = cardIndex;
  }

  let max = 3;
</script>

<div class="card-stack" {onwheel}>
  <Indicator {max} index={$userPreferences.shell.actionCenter.cardIndex} />
  <div
    class="cards"
    style="--index: {$userPreferences.shell.actionCenter.cardIndex};"
  >
    <Weather {process} />
    <Notes {userPreferences} />
    <Gallery {userPreferences} {process} />
  </div>
</div>
