<script lang="ts">
  import { Carta, Markdown } from "carta-md";

  const { source }: { source: string } = $props();
  const carta = new Carta({
    sanitizer: false,
    extensions: [],
    shikiOptions: {},
  });
</script>

<div class="markdown-body">
  <Markdown value={source} {carta} />
</div>
