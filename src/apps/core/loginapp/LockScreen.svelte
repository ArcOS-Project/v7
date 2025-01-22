<script lang="ts">
  import type { ReadableStore } from "$ts/writable";
  import dayjs from "dayjs";
  import advancedFormat from "dayjs/plugin/advancedFormat";

  const { hideLockscreen }: { hideLockscreen: ReadableStore<boolean> } =
    $props();

  dayjs.extend(advancedFormat);

  let currentTime = $state("");
  let currentDate = $state("");

  function updateTime() {
    currentTime = dayjs().format("HH:mm");
    currentDate = dayjs().format("dddd D MMMM");
  }

  $effect(() => {
    const interval = setInterval(updateTime, 500);

    return () => clearInterval(interval);
  });

  function hide() {
    if ($hideLockscreen) return;
    $hideLockscreen = true;
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="lock-screen" onclick={hide} class:hide={$hideLockscreen}>
  <h1 class="time">{@html currentTime || "&nbsp;"}</h1>
  <p class="date">{@html currentDate || "&nbsp;"}</p>
</div>
