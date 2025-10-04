<script lang="ts">
  import { shortWeekDays } from "$apps/components/shell/types";
</script>

<div class="header">
  {#each shortWeekDays as day}
    <div class="day">{day}</div>
  {/each}
</div>
