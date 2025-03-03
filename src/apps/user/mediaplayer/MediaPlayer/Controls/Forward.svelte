<script lang="ts">
  import type { MediaPlayerRuntime } from "../../runtime";

  const { process }: { process: MediaPlayerRuntime } = $props();

  function forward() {
    process.Seek(+10);
  }
</script>

<button class="material-icons-round forward" onclick={forward}>
  fast_forward
</button>
