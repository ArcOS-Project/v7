<script lang="ts">
  import type { MediaPlayerRuntime } from "../runtime";

  const { process }: { process: MediaPlayerRuntime } = $props();
  const { windowTitle, windowIcon } = process;
</script>

<div class="file">
  <img src={$windowIcon} alt="" />
  <span>{$windowTitle.split("-")[0]}</span>
</div>
