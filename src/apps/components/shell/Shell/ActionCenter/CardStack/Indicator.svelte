<script lang="ts">
  const { max, index } = $props();
</script>

<div class="indicator">
  {#each new Array(max).fill(0) as _, i}
    <div class="dot" class:active={index === i}></div>
  {/each}
</div>
