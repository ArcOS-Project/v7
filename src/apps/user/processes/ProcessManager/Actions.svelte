<script lang="ts">
  import { AppProcess } from "$ts/apps/process";
  import { KernelStack } from "$ts/env";
  import { Process } from "$ts/process/instance";
  import { Plural } from "$ts/util";
  import type { ProcessManagerRuntime } from "../runtime";

  const { process }: { process: ProcessManagerRuntime } = $props();
  const { running, selected } = process;

  let proc = $state<Process>();

  selected.subscribe((v) => {
    proc = KernelStack().getProcess(v);
  });

  function appInfo() {
    process.spawnOverlayApp("AppInfo", +process.env.get("shell_pid"), (proc as AppProcess).app.id);
  }

  function processInfo() {
    process.spawnOverlayApp("ProcessInfoApp", +process.env.get("shell_pid"), proc);
  }
</script>

<div class="actions">
  <p class="running">
    {$running} running {Plural("task", $running)}
  </p>
  <div class="buttons">
    <button class="app-info" disabled={!proc || !(proc instanceof AppProcess)} onclick={appInfo}> App Info </button>
    <button class="process-info" disabled={!proc} onclick={processInfo}> Process Info </button>
    <button
      disabled={!proc || !(proc instanceof AppProcess) || proc.app.data.overlay}
      onclick={() => proc && KernelStack().renderer?.focusedPid.set(proc.pid)}
    >
      Focus
    </button>
    <div class="sep"></div>
    <button class="suggested" onclick={() => proc && process.kill(proc)} disabled={!proc}>
      Kill {proc && proc instanceof AppProcess ? "App" : "Process"}
    </button>
  </div>
</div>
