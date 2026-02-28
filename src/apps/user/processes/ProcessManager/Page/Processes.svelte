<script lang="ts">
  import type { IAppProcess } from "$interfaces/app";
  import type { IProcess } from "$interfaces/process";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import ActionSeparator from "$lib/Window/ActionBar/ActionSeparator.svelte";
  import ActionSubtle from "$lib/Window/ActionBar/ActionSubtle.svelte";
  import { AppProcess } from "$ts/apps/process";
  import { Stack } from "$ts/env";
  import { Plural } from "$ts/util";
  import type { ProcessManagerRuntime } from "../../runtime";
  import Header from "./Processes/Header.svelte";
  import Tree from "./Processes/Tree.svelte";

  const { process }: { process: ProcessManagerRuntime } = $props();
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
    <ActionButton disabled={!proc || !(proc instanceof AppProcess)} onclick={() => process.appInfoFor(proc as IAppProcess)}>
      App Info
    </ActionButton>
    <ActionButton disabled={!proc} onclick={() => process.processInfoFor(proc!)}>Process Info</ActionButton>
    <ActionButton
      disabled={!proc || !(proc instanceof AppProcess) || proc.app.data.overlay}
      onclick={() => proc && Stack.renderer?.focusPid(proc.pid)}
    >
      Focus
    </ActionButton>
    <ActionSeparator />
    <ActionButton suggested onclick={() => proc && process.kill(proc)} disabled={!proc}>
      Kill {proc && proc instanceof AppProcess ? "App" : "Process"}
    </ActionButton>
  {/snippet}
</ActionBar>
