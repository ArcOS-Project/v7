<script lang="ts">
  import type { Dayjs } from "dayjs";
  import dayjs from "dayjs";

  let { date = $bindable(), update }: { date: Dayjs; update: () => void } = $props();

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
</script>

<div class="controls">
  <p class="selected-date">{date.format("MMMM YYYY")}</p>
  <div class="buttons">
    <button class="lucide icon-arrow-left" aria-label="Previous month" title="Previous month" onclick={previousMonth}></button>
    <button class="today" onclick={reset}>Today</button>
    <button class="lucide icon-arrow-right" aria-label="Next month" title="Next month" onclick={nextMonth}></button>
  </div>
</div>
