<script lang="ts">
  import type { IQlorbRuntime } from "$interfaces/runtimes/IQlorbRuntime";
  import Options from "./OnScreenDisplay/Options.svelte";
  import Score from "./OnScreenDisplay/Score.svelte";

  const { process }: { process: IQlorbRuntime } = $props();
</script>

<div class="osd fullscreen">
  <div class="topleft">
    <Options {process} />
  </div>
  <div class="topright"></div>
  <div class="bottomleft">
    <Score {process} />
  </div>
</div>
