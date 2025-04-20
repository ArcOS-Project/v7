<script lang="ts">
  import type { QlorbRuntime } from "../../runtime";
  import Options from "./OnScreenDisplay/Options.svelte";
  import Score from "./OnScreenDisplay/Score.svelte";

  const { process }: { process: QlorbRuntime } = $props();
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
