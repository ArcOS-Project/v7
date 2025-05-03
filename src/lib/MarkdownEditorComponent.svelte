<script lang="ts">
  import { Carta, MarkdownEditor } from "carta-md";
  const carta = new Carta({
    sanitizer: false,
    extensions: [],
    shikiOptions: {},
  });

  let { value = $bindable() } = $props();
</script>

<MarkdownEditor bind:value mode="tabs" theme="github" scroll="async" {carta} />
