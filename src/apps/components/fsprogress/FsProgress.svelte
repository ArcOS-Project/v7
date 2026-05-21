<script lang="ts">
  import type { IFsProgressRuntime } from "$interfaces/runtimes/IFsProgressRuntime";
  import Bottom from "./FsProgress/Bottom.svelte";
  import Top from "./FsProgress/Top.svelte";

  const { process }: { process: IFsProgressRuntime } = $props();
  const { Progress } = process;
</script>

{#if $Progress}
  <Top {process} />
  <Bottom {process} />
{/if}
