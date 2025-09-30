<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import type { UserPreferencesStore } from "$types/user";
  import dayjs from "dayjs";
  import { onMount } from "svelte";
  import Calendar from "./Calendar.svelte";

  const { process, userPreferences }: { process: ShellRuntime; userPreferences: UserPreferencesStore } = $props();
  const { calendarOpened } = process;

  let text = $state("");

  onMount(() => {
    setInterval(() => {
      const tb = $userPreferences.shell.taskbar;

      const secs = tb.clockSecs ? ":ss" : "";
      const date = tb.clockDate ? "MMM D, " : "";
      const time = tb.clock12hr ? `h:mm${secs} A` : `HH:mm${secs}`;

      text = dayjs().format(`${date}${time}`);
    });
  });
</script>

<div class="clock">
  <Calendar {process} />
  <button class="clock-button" data-contextmenu="taskbar-clock" onclick={() => ($calendarOpened = true)}>
    {text}
  </button>
</div>
