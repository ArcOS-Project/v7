<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import { shortWeekDays, type CalendarMonth } from "$apps/components/shell/types";
  import Spinner from "$lib/Spinner.svelte";
  import dayjs, { Dayjs } from "dayjs";
  import weekOfYear from "dayjs/plugin/weekOfYear";
  import { onMount } from "svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { calendarOpened, userPreferences } = process;

  dayjs.extend(weekOfYear);

  let timeStr = $state("");
  let dateStr = $state("");
  let weekNumber = $state(0);
  let date = $state<Dayjs>(dayjs().date(1));
  let month = $state<CalendarMonth>(process.getCalendarMonth());

  function update() {
    month = process.getCalendarMonth(date.format("YYYY-MM-DD"));
  }

  function previousMonth() {
    date = date.subtract(1, "month");
    update();
  }

  function nextMonth() {
    date = date.add(1, "month");
    update();
  }

  function reset() {
    date = dayjs().date(1);

    update();
  }

  onMount(() => {
    setInterval(() => {
      timeStr = dayjs().format(`HH:mm`);
      dateStr = dayjs().format(`D MMMM`);
      weekNumber = dayjs().week();
    }, 500);
  });
</script>

<div class="calendar-popup shell-colored" class:opened={$calendarOpened} class:colored={$userPreferences.shell.taskbar.colored}>
  <div class="top">
    <h1 class="time">{timeStr}</h1>
    <div>
      <h1 class="date">{dateStr}</h1>
      <p class="week">Week {weekNumber}</p>
    </div>
  </div>
  <div class="bottom">
    {#if month}
      <div class="controls">
        <p class="selected-date">{date.format("MMMM YYYY")}</p>
        <div class="buttons">
          <button class="lucide icon-arrow-left" aria-label="Previous month" title="Previous month" onclick={previousMonth}
          ></button>
          <button class="today" onclick={reset}>Today</button>
          <button class="lucide icon-arrow-right" aria-label="Next month" title="Next month" onclick={nextMonth}></button>
        </div>
      </div>
      <div class="calendar">
        <div class="header">
          {#each shortWeekDays as day}
            <div class="day">{day}</div>
          {/each}
        </div>
        <div class="grid">
          {#each month?.prepended as day}
            <div class="day past" class:today={day.isToday}>
              <p class="day-number">{day.dayOfMonth}</p>
            </div>
          {/each}
          {#each month?.current as day}
            <div class="day" class:today={day.isToday}>
              <p class="day-number">{day.dayOfMonth}</p>
            </div>
          {/each}
          {#each month?.appended as day}
            <div class="day future" class:today={day.isToday}>
              <p class="day-number">{day.dayOfMonth}</p>
            </div>
          {/each}
        </div>
      </div>
    {:else}
      <Spinner height={32} />
    {/if}
  </div>
</div>
