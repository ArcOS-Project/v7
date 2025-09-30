<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";

  const { process }: { process: ShellRuntime } = $props();
  const { calendarOpened } = process;
</script>

<div class="calendar-popup" class:opened={$calendarOpened}>calendar</div>
