<script lang="ts">
  import dayjs from "dayjs";
  import { onMount } from "svelte";

  let timeStr = $state("");
  let dateStr = $state("");

  onMount(() => {
    setInterval(() => {
      timeStr = dayjs().format(`HH:mm`);
      dateStr = dayjs().format(`dddd, D MMMM`);
    }, 500);
  });
</script>

<div class="clock">
  <h1>{timeStr}</h1>
  <p class="date">{dateStr}</p>
</div>
