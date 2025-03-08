<script lang="ts">
  import { onMount, type Snippet } from "svelte";

  let {
    tabs,
    current = $bindable(),
    right,
    renderer,
  }: {
    tabs: string[];
    current: string;
    right?: Snippet;
    renderer: Snippet;
  } = $props();

  onMount(() => {
    current = tabs.length ? tabs[0] : "";
  });
</script>

<div class="tab-interface">
  <div class="tabs">
    {#each tabs as tab}
      <button class="tab" class:suggested={current == tab} onclick={() => (current = tab)}>
        {tab}
      </button>
    {/each}
    {#if right}
      <div class="right">
        {@render right()}
      </div>
    {/if}
  </div>
  {@render renderer()}
</div>
