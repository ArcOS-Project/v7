<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import type { BugHuntUserDataRuntime } from "./runtime";

  const { process }: { process: BugHuntUserDataRuntime } = $props();
  const { html } = process;
</script>

<CustomTitlebar {process}></CustomTitlebar>
<div class="user-data code-editor-wrapper">
  <pre><code class="hljs">{@html html}</code></pre>
</div>
