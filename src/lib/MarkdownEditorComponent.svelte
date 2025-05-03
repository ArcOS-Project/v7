<script lang="ts">
  import { Carta, MarkdownEditor } from "carta-md";
  const carta = new Carta({
    sanitizer: false,
    extensions: [],
  });

  let {
    value = $bindable<string>(`This is an example inspired by [GitHub](https://github.com)
\`\`\`js
console.log('Hello, World!');
\`\`\``),
  } = $props();
</script>

<MarkdownEditor bind:value mode="tabs" theme="github" {carta} />
