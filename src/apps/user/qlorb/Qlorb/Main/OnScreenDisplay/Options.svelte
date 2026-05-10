<script lang="ts">
  import type { IQlorbRuntime } from "$interfaces/runtimes/IQlorbRuntime";

  const { process }: { process: IQlorbRuntime } = $props();

  function back() {
    process.switchPage("intro");
  }

  function reset() {
    process.flushStores();
  }
</script>

<button class="material-icons-round" onclick={back}> arrow_back_ios_new </button>
<button class="material-icons-round" onclick={reset}> refresh </button>
