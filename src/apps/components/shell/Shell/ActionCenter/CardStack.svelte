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
    console.log(
      e.deltaY >= 0 ? "down" : "up",
      $userPreferences.shell.actionCenter.cardIndex,
      $userPreferences.shell.actionCenter.cardIndex >= max,
      $userPreferences.shell.actionCenter.cardIndex <= 0,
      max
    );
    if (e.deltaY >= 0) {
      if ($userPreferences.shell.actionCenter.cardIndex >= max - 1) return;

      $userPreferences.shell.actionCenter.cardIndex++;
    } else {
      if ($userPreferences.shell.actionCenter.cardIndex <= 0) return;

      $userPreferences.shell.actionCenter.cardIndex--;
    }
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
    <Gallery />
  </div>
</div>
