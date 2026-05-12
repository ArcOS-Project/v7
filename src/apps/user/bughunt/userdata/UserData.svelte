<script lang="ts">
  import type { IBugHuntUserDataRuntime } from "$interfaces/runtimes/IBugHuntUserDataRuntime";
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";

  const { process }: { process: IBugHuntUserDataRuntime } = $props();
  const { html } = process;
</script>

<CustomTitlebar {process}></CustomTitlebar>
<div class="user-data code-editor-wrapper">
  <pre><code class="hljs">{@html html}</code></pre>
</div>
