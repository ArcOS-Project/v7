<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import type { UserPreferencesStore } from "$types/user";
  import dayjs from "dayjs";
  import { onMount } from "svelte";

  const {
    userPreferences,
    process,
  }: { userPreferences: UserPreferencesStore; process: ShellRuntime } =
    $props();
  const { safe } = process;

  let text = $state("");

  onMount(() => {
    setInterval(() => {
      const tb = $userPreferences.shell.taskbar;

      const secs = tb.clockSecs ? ":ss" : "";
      const date = tb.clockDate ? "MMM D, " : "";
      const time = tb.clock12hr ? `hh:mm${secs} A` : `HH:mm${secs}`;

      text = dayjs().format(`${date}${time}`);
    });
  });
</script>

<div class="clock">
  {text}
</div>
