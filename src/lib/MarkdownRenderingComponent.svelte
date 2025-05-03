<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";

  const { source }: { source: string } = $props();
</script>

<div class="markdown-body">
  <SvelteMarkdown {source}></SvelteMarkdown>
</div>
