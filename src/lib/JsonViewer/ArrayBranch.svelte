<script lang="ts">
  let { value }: { value: any[] } = $props();
</script>

<details>
  <summary>Array[{value.length}]</summary>

  {#if value.length}
    <ul>
      {#each value as item, i}
        <li>{i}: {item}</li>
      {/each}
    </ul>
  {:else}
    <p class="empty">(empty)</p>
  {/if}
</details>
