<script lang="ts">
  import type { ReadableStore } from "$ts/writable";

  const { errorMessage }: { errorMessage: ReadableStore<string> } = $props();
</script>

<p class="error-message">
  {@html $errorMessage}
</p>
<button onclick={() => ($errorMessage = "")}>%general.okay%</button>
