<script lang="ts">
  import type { MediaPlayerRuntime } from "../../runtime";
  import { LoopMode } from "../../types";

  const { process }: { process: MediaPlayerRuntime } = $props();
  const { Loaded, State, loopMode } = process;

  function toggleLoopOne() {
    switch (process.loopMode()) {
      case LoopMode.None:
        process.SetLoopAll();
        break;
      case LoopMode.All:
        process.SetLoopOne();
        break;
      case LoopMode.One:
        process.SetLoopNone();
        break;
    }
    process.updateState();
  }

  function getLoopTitle() {
    switch ($loopMode) {
      case LoopMode.None:
        return "Loop None";
      case LoopMode.All:
        return "Loop All";
      case LoopMode.One:
        return "Loop One";
      default:
        return "Loop mode toggle";
    }
  }
</script>

<button
  class="lucide loop-toggle icon-repeat"
  class:icon-repeat-2={$loopMode == LoopMode.None}
  class:icon-repeat={$loopMode == LoopMode.All}
  class:icon-repeat-1={$loopMode == LoopMode.One}
  onclick={toggleLoopOne}
  disabled={!$Loaded || !$State.duration}
  aria-label={getLoopTitle()}
  title={getLoopTitle()}
>
</button>
