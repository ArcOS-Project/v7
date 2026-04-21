<script lang="ts">
  import { onMount, type Component } from "svelte";
  import type { IFileManagerRuntime } from "$interfaces/runtimes/IFileManagerRuntime";

  const { process }: { process: IFileManagerRuntime } = $props();
  const { virtual, path } = process;

  let Comp = $state<Component>();

  onMount(() => {
    virtual.subscribe((v) => {
      Comp = v?.component;
    });
  });
</script>

<div class="virtual-page {$virtual ? $path.replace('::', '') : ''}">
  {#if Comp}
    <Comp {process} />
  {/if}
</div>
