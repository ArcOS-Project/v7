<script lang="ts">
  import { AppProcess } from "$ts/apps/process";
  import { Stack } from "$ts/env";
  import { Plural } from "$ts/util";
  import type { IProcess } from "../../../../interfaces/process";
  import type { ProcessManagerRuntime } from "../runtime";

  const { process }: { process: ProcessManagerRuntime } = $props();
  const { running, selected } = process;

  let proc = $state<IProcess>();

  selected.subscribe((v) => {
    proc = Stack.getProcess(+v.replace("proc#", ""));
  });
</script>

<div class="actions">
  <p class="running">
    {$running} running {Plural("task", $running)}
  </p>
  <div class="buttons">
    <button
      class="app-info"
      disabled={!proc || !(proc instanceof AppProcess)}
      onclick={() => process.appInfoFor(proc as AppProcess)}
    >
      App Info
    </button>
    <button class="process-info" disabled={!proc} onclick={() => process.processInfoFor(proc!)}> Process Info </button>
    <button
      disabled={!proc || !(proc instanceof AppProcess) || proc.app.data.overlay}
      onclick={() => proc && Stack.renderer?.focusedPid.set(proc.pid)}
    >
      Focus
    </button>
    <div class="sep"></div>
    <button class="suggested" onclick={() => proc && process.kill(proc)} disabled={!proc}>
      Kill {proc && proc instanceof AppProcess ? "App" : "Process"}
    </button>
  </div>
</div>
