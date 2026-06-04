<script lang="ts">
  import { CalendarHelper } from "$ts/helpers/calendar";
</script>

<div class="header">
  {#each CalendarHelper.shortWeekDays as day}
    <div class="day">{day}</div>
  {/each}
</div>
