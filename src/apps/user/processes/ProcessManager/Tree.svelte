<script lang="ts">
  import type { Process } from "$ts/process/instance";
  import { onMount } from "svelte";
  import type { ProcessManagerRuntime } from "../runtime";
  import Row from "./Tree/Row.svelte";
  import { Sleep } from "$ts/sleep";

  const { process }: { process: ProcessManagerRuntime } = $props();
  const { handler, running } = process;

  let map = $state<Map<number, Process>>(new Map());

  onMount(() => {
    handler.store.subscribe(async (v) => {
      map = new Map();
      map = v;
      $running = [...map].filter(([_, proc]) => !proc._disposed).length;
    });
  });
</script>

<div class="process-tree">
  {#each [...map] as [pid, proc], i (`${i}-${pid} ${proc.name}`)}
    {#if !proc.parentPid || !handler.getProcess(proc.parentPid)}
      <Row {proc} {pid} {process} orphan={!handler.getProcess(proc.parentPid) && proc.pid !== 1} />
    {/if}
  {/each}
</div>
