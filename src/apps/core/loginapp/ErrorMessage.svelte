<script lang="ts">
  import type { ReadableStore } from "$types/writable";

  const { errorMessage }: { errorMessage: ReadableStore<string> } = $props();
</script>

<p class="error-message">
  {@html $errorMessage}
</p>
<button onclick={() => ($errorMessage = "")}>Okay</button>
