<script lang="ts">
  import type { QlorbRuntime } from "$apps/user/qlorb/runtime";

  const { process }: { process: QlorbRuntime } = $props();

  function back() {
    process.switchPage("intro");
  }

  function reset() {
    process.flushStores();
  }
</script>

<button style="outline: none;" class="material-icons-round" onclick={back}> arrow_back_ios_new </button>
<button style="outline: none;" class="material-icons-round" onclick={reset}> refresh </button>
