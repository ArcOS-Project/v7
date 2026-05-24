<script lang="ts">
  import type { IFsProgressRuntime } from "$interfaces/runtimes/IFsProgressRuntime";
<<<<<<< HEAD
  import Icon from "$lib/Icon.svelte";
=======
>>>>>>> development
  import Bar from "./Top/Bar.svelte";

  const { process }: { process: IFsProgressRuntime } = $props();
  const { Progress } = process;
</script>

<div class="top">
  <div class="display">
    <Icon icon={$Progress.icon} />
    <div class="context">
      <p class="caption">{$Progress.caption}</p>
      <p class="subtitle">{$Progress.subtitle}</p>
    </div>
  </div>
  <Bar {process} />
</div>
