<script lang="ts">
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
  import { Daemon } from "$ts/env";
  import type { UserPreferencesStore } from "$types/user";
  import dayjs from "dayjs";
  import { onDestroy, onMount } from "svelte";
  import Calendar from "./Calendar.svelte";

  const { process, userPreferences }: { process: IShellRuntime; userPreferences: UserPreferencesStore } = $props();
  const { calendarOpened } = process;

  let text = $state("");
  let interval: NodeJS.Timeout;

  onMount(() => {
    interval = setInterval(() => {
      const tb = $userPreferences.shell.taskbar;

      const secs = tb.clockSecs ? ":ss" : "";
      const date = tb.clockDate ? "MMM D, " : "";
      const time = tb.clock12hr ? `h:mm${secs} A` : `HH:mm${secs}`;

      text = dayjs().format(`${date}${time}`);
    });
  });

  onDestroy(() => {
    if (interval) clearInterval(interval);
  })
</script>

<div class="clock">
  <Calendar {process} />
  <button
    class="menu-trigger clock-button"
    class:active={$calendarOpened && !Daemon.safeMode}
    disabled={Daemon.safeMode}
    data-contextmenu="taskbar-clock"
    onclick={() => ($calendarOpened = true)}
  >
    {text}
  </button>
</div>
