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
  import Header from "./Processes/Header.svelte";
  import Tree from "./Processes/Tree.svelte";

  const { process }: { process: IProcessManagerRuntime } = $props();
  const { running, selected } = process;

  let proc = $state<IProcess>();

  selected.subscribe((v) => {
    proc = Stack.getProcess(+v.replace("proc#", ""));
  });
</script>

<div class="top">
  <Header />
  <Tree {process} />
</div>

<ActionBar>
  {#snippet leftContent()}
    <ActionSubtle text="{$running} running {Plural('task', $running)}"></ActionSubtle>
  {/snippet}
  {#snippet rightContent()}
    <ActionButton disabled={!proc || !ProcessesHelper.IsAnyAppProcess(proc)} onclick={() => process.appInfoFor(proc as IAppProcess)}>
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
    {#if process.app.data.overlay}
      <ActionSeparator />
      <ActionButton suggested onclick={() => process.closeWindow()}>Close</ActionButton>
    {/if}
  {/snippet}
</ActionBar>
