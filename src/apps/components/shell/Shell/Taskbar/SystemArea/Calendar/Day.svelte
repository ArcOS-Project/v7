<script lang="ts">
  import type { CalendarDay } from "$apps/components/shell/types";

  const {
    past = false,
    future = false,
    className = "",
    day,
  }: { past?: boolean; future?: boolean; className?: string; day: CalendarDay } = $props();
</script>

<div class="day {className}" class:past class:future class:today={day.isToday}>
  <p class="day-number">{day.dayOfMonth}</p>
</div>
