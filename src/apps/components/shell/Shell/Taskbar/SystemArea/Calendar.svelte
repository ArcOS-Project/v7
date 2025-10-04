<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import { shortWeekDays, type CalendarMonth } from "$apps/components/shell/types";
  import Spinner from "$lib/Spinner.svelte";
  import dayjs, { Dayjs } from "dayjs";
  import weekOfYear from "dayjs/plugin/weekOfYear";
  import Top from "./Calendar/Top.svelte";
  import Controls from "./Calendar/Controls.svelte";
  import Header from "./Calendar/Header.svelte";
  import Day from "./Calendar/Day.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { calendarOpened, userPreferences } = process;

  dayjs.extend(weekOfYear);

  let date = $state<Dayjs>(dayjs().date(1));
  let month = $state<CalendarMonth>(process.getCalendarMonth());

  function update() {
    month = process.getCalendarMonth(date.format("YYYY-MM-DD"));
  }
</script>

<div class="calendar-popup shell-colored" class:opened={$calendarOpened} class:colored={$userPreferences.shell.taskbar.colored}>
  <Top />
  <div class="bottom">
    {#if month}
      <Controls bind:date {update} />
      <div class="calendar">
        <Header />
        <div class="grid">
          {#each month?.prepended as day (day.fullDate)}
            <Day past {day} />
          {/each}
          {#each month?.current as day (day.fullDate)}
            <Day {day} />
          {/each}
          {#each month?.appended as day (day.fullDate)}
            <Day future {day} />
          {/each}
        </div>
      </div>
    {:else}
      <Spinner height={32} />
    {/if}
  </div>
</div>
