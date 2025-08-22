<script lang="ts">
  import type { FsProgressRuntime } from "../runtime";
  import Bar from "./Top/Bar.svelte";

  const { process }: { process: FsProgressRuntime } = $props();
  const { Progress } = process;
</script>

<div class="top">
  <div class="display">
    <img src={$Progress.icon} alt="" />
    <div class="context">
      <p class="caption">{$Progress.caption}</p>
      <p class="subtitle">{$Progress.subtitle}</p>
    </div>
  </div>
  <Bar {process} />
</div>
