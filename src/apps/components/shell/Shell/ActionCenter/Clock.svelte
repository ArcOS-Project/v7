<script lang="ts">
  import dayjs from "dayjs";

  let timeStr = $state("");
  let dateStr = $state("");

  $effect(() => {
    setInterval(() => {
      timeStr = dayjs().format(`HH:mm`);
      dateStr = dayjs().format(`dddd, D MMMM`);
    }, 500);
  });
</script>

<div class="clock" data-contextmenu="clockcontext">
  <h1>{timeStr}</h1>
  <p class="date">{dateStr}</p>
</div>
