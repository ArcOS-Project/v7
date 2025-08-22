<script lang="ts">
  import Bottom from "./FsProgress/Bottom.svelte";
  import Top from "./FsProgress/Top.svelte";
  import type { FsProgressRuntime } from "./runtime";

  const { process }: { process: FsProgressRuntime } = $props();
  const { Progress } = process;
</script>

{#if $Progress}
  <Top {process} />
  <Bottom {process} />
{/if}
