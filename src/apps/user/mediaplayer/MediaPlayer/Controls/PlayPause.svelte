<script lang="ts">
  import type { MediaPlayerRuntime } from "../../runtime";

  const { process }: { process: MediaPlayerRuntime } = $props();
  const { State } = process;

  function toggle() {
    if ($State.paused) process.Play();
    else process.Pause();
  }
</script>

<div class="group playpause">
  <button class="material-icons-round play suggested" onclick={toggle}>
    {$State.paused ? "play_arrow" : "pause"}
  </button>
</div>
