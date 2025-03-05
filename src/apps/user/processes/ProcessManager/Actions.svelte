<script lang="ts">
  import { AppProcess } from "$ts/apps/process";
  import { Process } from "$ts/process/instance";
  import { Plural } from "$ts/util";
  import type { ProcessManagerRuntime } from "../runtime";

  const { process }: { process: ProcessManagerRuntime } = $props();
  const { running, selected } = process;

  let proc = $state<Process>();

  selected.subscribe((v) => {
    proc = process.handler.getProcess(v);
  });

  function info() {
    process.spawnOverlayApp(
      "AppInfo",
      process.pid,
      (proc as AppProcess).app.id
    );
  }
</script>

<div class="actions">
  <p class="running">
    {$running} running {Plural("task", $running)}
  </p>
  <div class="buttons">
    <button
      class="app-info"
      disabled={!proc || !(proc instanceof AppProcess)}
      onclick={info}
    >
      App Info
    </button>
    <button
      class="app-info"
      disabled={!proc || !(proc instanceof AppProcess) || proc.app.data.overlay}
      onclick={() => proc && process.handler.renderer?.focusedPid.set(proc.pid)}
    >
      Focus
    </button>
    <div class="sep"></div>
    <button
      class="suggested"
      onclick={() => proc && process.kill(proc)}
      disabled={!proc}
    >
      Kill {proc && proc instanceof AppProcess ? "App" : "Process"}
    </button>
  </div>
</div>
