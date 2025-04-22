<script lang="ts">
  import type { UserPreferencesStore } from "$types/user";
  import dayjs from "dayjs";
  import { onMount } from "svelte";

  const { userPreferences }: { userPreferences: UserPreferencesStore } = $props();

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

<div class="clock" data-contextmenu="taskbar-clock">
  {text}
</div>
