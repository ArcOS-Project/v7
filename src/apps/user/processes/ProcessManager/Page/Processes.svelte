<script lang="ts">
  import type { IAppProcess } from "$interfaces/IAppProcess";
  import type { IProcess } from "$interfaces/IProcess";
  import type { IProcessManagerRuntime } from "$interfaces/runtimes/IProcessManagerRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import ActionSeparator from "$lib/Window/ActionBar/ActionSeparator.svelte";
  import ActionSubtle from "$lib/Window/ActionBar/ActionSubtle.svelte";
  import { Stack } from "$ts/env";
  import { ProcessesHelper } from "$ts/helpers/processes";
  import { Plural } from "$ts/util";
  import AllUsersTree from "./Processes/AllUsersTree.svelte";
  import Header from "./Processes/Header.svelte";
  import Tree from "./Processes/Tree.svelte";

  const { process }: { process: IProcessManagerRuntime } = $props();
  const { running, selected } = process;

  let allUsers = $state(false);
  let proc = $state<IProcess>();
  let refresh = $state<() => void>();

  selected.subscribe((v) => {
    proc = Stack.getProcess(+v.replace("proc#", ""));
  });
</script>

<div class="top">
  <Header />
  {#if allUsers}
    <AllUsersTree {process} />
  {:else}
    <Tree {process} />
  {/if}
</div>

<ActionBar>
  {#snippet leftContent()}
    {#if process.adminBootstrapper}
      <ActionButton icon="shield" onclick={() => (allUsers = !allUsers)}>
        {#if allUsers}
          Show only your processes
        {:else}
          Show processes for all users
        {/if}
      </ActionButton>
    {/if}
    <ActionSubtle text="{$running} running {Plural('task', $running)}"></ActionSubtle>
  {/snippet}
  {#snippet rightContent()}
    {#if !allUsers}
      <ActionButton
        disabled={!proc || !ProcessesHelper.IsAnyAppProcess(proc)}
        onclick={() => process.appInfoFor(proc as IAppProcess)}
      >
        App Info
      </ActionButton>
      <ActionButton disabled={!proc} onclick={() => process.processInfoFor(proc!)}>Process Info</ActionButton>
      <ActionButton
        disabled={!proc || !ProcessesHelper.IsAnyAppProcess(proc) || proc.app.data.overlay}
        onclick={() => proc && Stack.renderer?.focusPid(proc.pid)}
      >
        Focus
      </ActionButton>
      <ActionSeparator />
      <ActionButton suggested onclick={() => proc && process.kill(proc)} disabled={!proc}>
        Kill {proc && ProcessesHelper.IsAnyAppProcess(proc) ? "App" : "Process"}
      </ActionButton>
    {:else}
      <ActionButton>Refresh</ActionButton>
    {/if}
    {#if process.app.data.overlay}
      <ActionSeparator />
      <ActionButton suggested onclick={() => process.closeWindow()}>Close</ActionButton>
    {/if}
  {/snippet}
</ActionBar>
