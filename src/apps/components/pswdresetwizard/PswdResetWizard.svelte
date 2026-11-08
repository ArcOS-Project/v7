<script lang="ts">
  import type { IPswdResetWizardRuntime } from "$interfaces/runtimes/IPswdResetWizardRuntime";
  import Spinner from "$lib/Spinner.svelte";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";

  let { process }: { process: IPswdResetWizardRuntime } = $props();

  const { CurrentPage, Loading } = process;
  const Component = $derived($CurrentPage?.component);
</script>

<div class="top">
  <div class="header">
    <h1>Account Recovery</h1>
    <p>Follow these steps to reset your password.</p>
  </div>
  <div class="page">
    {#if Component}
      <Component {process} />
    {/if}
  </div>
  {#if $Loading}
    <div class="loading-overlay">
      <Spinner height={32} />
    </div>
  {/if}
</div>
<ActionBar>
  {#snippet rightContent()}
    {#if $CurrentPage}
      {#each $CurrentPage.buttons as button (button.caption)}
        <ActionButton suggested={button.suggested} disabled={button.disabled || $Loading} onclick={() => button.action()}>
          {button.caption}
        </ActionButton>
      {/each}
    {/if}
  {/snippet}
</ActionBar>
