<script lang="ts">
  import css from "highlight.js/lib/languages/css";
  import ini from "highlight.js/lib/languages/ini";
  import javascript from "highlight.js/lib/languages/javascript";
  import json from "highlight.js/lib/languages/json";
  import markdown from "highlight.js/lib/languages/markdown";
  import plaintext from "highlight.js/lib/languages/plaintext";
  import xml from "highlight.js/lib/languages/xml";
  import yaml from "highlight.js/lib/languages/yaml";

  import type { ReadableStore } from "$ts/writable";
  import hljs from "highlight.js";
  import { onMount } from "svelte";

  const {
    value,
    language,
    className = "",
    disabled = false,
  }: { value: ReadableStore<string>; language: string; className?: string; disabled?: boolean } = $props();

  let highlight = $state<string>("");
  let textarea: HTMLTextAreaElement;

  onMount(() => {
    $value ||= "";
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("css", css);
    hljs.registerLanguage("json", json);
    hljs.registerLanguage("ini", ini);
    hljs.registerLanguage("markdown", markdown);
    hljs.registerLanguage("yaml", yaml);
    hljs.registerLanguage("xml", xml);
    hljs.registerLanguage("plaintext", plaintext);

    value.subscribe(update);
    update($value);
  });

  function update(v: string) {
    if (textarea) {
      textarea.style.height = `auto`;
      textarea.style.width = `auto`;
      textarea.style.height = `${textarea.scrollHeight}px`;
      textarea.style.width = `calc(${textarea.scrollWidth}px + 1.5em)`;
    }

    highlight = hljs.highlight(v, { language }).value;
  }

  $effect(() => {
    update($value);
  });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="code-editor-wrapper" onclick={() => textarea?.focus()}>
  <div class="code-editor">
    <div class="highlight">
      <pre><code class="hljs">{@html highlight}</code></pre>
    </div>
    <textarea name="" id="" bind:this={textarea} bind:value={$value}></textarea>
  </div>
</div>
