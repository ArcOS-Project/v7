<script lang="ts">
  import css from "highlight.js/lib/languages/css";
  import ini from "highlight.js/lib/languages/ini";
  import javascript from "highlight.js/lib/languages/javascript";
  import json from "highlight.js/lib/languages/json";
  import markdown from "highlight.js/lib/languages/markdown";
  import plaintext from "highlight.js/lib/languages/plaintext";
  import xml from "highlight.js/lib/languages/xml";
  import yaml from "highlight.js/lib/languages/yaml";
  import sql from "highlight.js/lib/languages/sql";
  import hljs from "highlight.js";
  import { onMount } from "svelte";

  const { src, language, className = "" }: { src: string; language: string; className?: string } = $props();
  let highlight = $state<string>("");

  onMount(() => {
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("css", css);
    hljs.registerLanguage("json", json);
    hljs.registerLanguage("ini", ini);
    hljs.registerLanguage("markdown", markdown);
    hljs.registerLanguage("yaml", yaml);
    hljs.registerLanguage("xml", xml);
    hljs.registerLanguage("plaintext", plaintext);
    hljs.registerLanguage("sql", sql);

    highlight = hljs.highlight(src, { language }).value;
  });
</script>

<span class={`hljs-component ${className}`.trim()}>{@html highlight}</span>
