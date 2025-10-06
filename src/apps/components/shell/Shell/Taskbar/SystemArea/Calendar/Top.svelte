<script lang="ts">
  import dayjs from "dayjs";
  import { onMount } from "svelte";

  let timeStr = $state("");
  let dateStr = $state("");
  let weekNumber = $state(0);

  const { h12 }: { h12?: boolean } = $props();

  onMount(() => {
    setInterval(() => {
      timeStr = dayjs().format(h12 ? `h:mm A` : `HH:mm`);
      dateStr = dayjs().format(`D MMMM`);
      weekNumber = dayjs().week();
    }, 500);
  });
</script>

<div class="top">
  <h1 class="time">{timeStr}</h1>
  <div>
    <h1 class="date">{dateStr}</h1>
    <p class="week">Week {weekNumber}</p>
  </div>
</div>
