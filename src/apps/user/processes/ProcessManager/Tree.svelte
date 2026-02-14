<script lang="ts">
  import type { IProcess } from "$interfaces/process";
  import { Stack } from "$ts/env";
  import { onMount } from "svelte";
  import type { ProcessManagerRuntime } from "../runtime";
  import Row from "./Tree/Row.svelte";

  const { process }: { process: ProcessManagerRuntime } = $props();
  const { running } = process;

  let map = $state<Map<number, IProcess>>(new Map());

  onMount(() => {
    Stack.store.subscribe(async (v) => {
      map = new Map();
      map = v;
      $running = [...map].filter(([_, proc]) => !proc._disposed).length;
    });
  });
</script>

<div class="process-tree">
  {#each [...map] as [pid, proc], i (`${i}-${pid} ${proc.name}`)}
    {#if !proc.parentPid || !Stack.getProcess(proc.parentPid)}
      <Row {proc} {pid} {process} orphan={!Stack.getProcess(proc.parentPid) && proc.pid !== 1} />
    {/if}
  {/each}
</div>
