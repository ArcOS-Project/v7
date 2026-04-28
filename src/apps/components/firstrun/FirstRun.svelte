<script lang="ts">
  import type { IFirstRunRuntime } from "$interfaces/runtimes/IFirstRunRuntime";
  import Spinner from "$lib/Spinner.svelte";
  import { onMount, type Snippet } from "svelte";

  const { process }: { process: IFirstRunRuntime } = $props();
  const { currentPage } = process;

  let Component = $state<Snippet | undefined>();

  onMount(() => {
    process.currentPage.subscribe((v) => {
      Component = v?.component;
    });
  });
</script>

<div class="top" class:hero={$currentPage?.hero}>
  {#if Component}
    <Component {process} />
  {:else}
    <div class="loading">
      <Spinner height={32} />
    </div>
  {/if}
</div>
<div class="actions">
  <div class="left">
    {#each $currentPage?.actions.left as button}
      <button class="action" disabled={button.disabled} class:suggested={button.suggested} onclick={() => button.action(process)}>
        {button.caption}
      </button>
    {/each}
  </div>
  <div class="right">
    {#each $currentPage?.actions.right as button}
      <button class="action" disabled={button.disabled} class:suggested={button.suggested} onclick={() => button.action(process)}>
        {button.caption}
      </button>
    {/each}
  </div>
</div>
