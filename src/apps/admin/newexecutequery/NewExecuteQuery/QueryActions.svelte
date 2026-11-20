<script lang="ts">
  import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import ActionGroup from "$lib/Window/ActionBar/ActionGroup.svelte";
  import ActionIconButton from "$lib/Window/ActionBar/ActionIconButton.svelte";
  import ActionSeparator from "$lib/Window/ActionBar/ActionSeparator.svelte";

  let { process }: { process: INewExecuteQueryRuntime } = $props();
  const { selectedCollection, selectedColumns, refreshing: loading, whereClauses, executing, selectSavedQuery } = process;

  function clear() {
    $whereClauses[$selectedCollection] = [];
    $selectedColumns[$selectedCollection] = [];
  }
</script>

<ActionBar>
  {#snippet leftContent()}
    {#if !$selectSavedQuery}
      <ActionGroup>
        <ActionIconButton icon="folder-open" title="Load query..." onclick={() => ($selectSavedQuery = true)} />
        <ActionIconButton icon="save" title="Save query..." onclick={() => process.DoSaveQueryToFile()} />
      </ActionGroup>
    {:else}
      <ActionButton onclick={() => ($selectSavedQuery = false)}>Cancel</ActionButton>
      <ActionButton onclick={() => process.render({})}>Refresh</ActionButton>
      <ActionSeparator />
      <ActionButton onclick={() => process.DoLoadQueryFromFile()} suggested>From file...</ActionButton>
    {/if}
    <ActionSeparator />
    <label for="">
      <input type="checkbox" name="" id="" />
      Conceal sensitive values
    </label>
  {/snippet}
  {#snippet rightContent()}
    {#if !$loading && $selectedCollection && !$selectSavedQuery}
      <ActionButton onclick={clear} disabled={$executing}>Clear</ActionButton>
      <ActionSeparator />
      <ActionButton
        icon="plus"
        onclick={() => process.AddWhereClause()}
        disabled={!$selectedColumns[$selectedCollection]?.length || $executing}
      >
        Add where
      </ActionButton>
      <ActionButton
        icon="play"
        suggested
        onclick={() => process.Execute()}
        disabled={!$selectedColumns[$selectedCollection]?.length || !$whereClauses[$selectedCollection]}
        loading={$executing}
      >
        Execute
      </ActionButton>
    {/if}
  {/snippet}
</ActionBar>
