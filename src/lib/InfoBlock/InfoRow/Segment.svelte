<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    title: string;
    right?: boolean;
    className?: string;
    children: Snippet;
    grow?: boolean;
    alt?: string;
  }

  const { title, right = false, className = "", alt = "", children, grow }: Props = $props();
</script>

<div class="segment {className}" class:right class:grow>
  <p class="title">{title}</p>
  <p class="value" title={alt}>
    {@render children()}
  </p>
</div>
