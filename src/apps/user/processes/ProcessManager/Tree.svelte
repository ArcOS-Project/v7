<script lang="ts">
  import { KernelStack } from "$ts/process/handler";
  import type { Process } from "$ts/process/instance";
  import { onMount } from "svelte";
  import type { ProcessManagerRuntime } from "../runtime";
  import Row from "./Tree/Row.svelte";

  const { process }: { process: ProcessManagerRuntime } = $props();
  const { running } = process;

  let map = $state<Map<number, Process>>(new Map());

  onMount(() => {
    KernelStack().store.subscribe(async (v) => {
      map = new Map();
      map = v;
      $running = [...map].filter(([_, proc]) => !proc._disposed).length;
    });
  });
</script>

<div class="process-tree">
  {#each [...map] as [pid, proc], i (`${i}-${pid} ${proc.name}`)}
    {#if !proc.parentPid || !KernelStack().getProcess(proc.parentPid)}
      <Row {proc} {pid} {process} orphan={!KernelStack().getProcess(proc.parentPid) && proc.pid !== 1} />
    {/if}
  {/each}
</div>
