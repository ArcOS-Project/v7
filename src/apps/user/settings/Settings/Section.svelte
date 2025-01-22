<script lang="ts">
  import type { Snippet } from "svelte";

  const { caption = "", children }: { caption?: string; children: Snippet } =
    $props();
</script>

<section>
  {#if caption}
    <p class="caption">{caption}</p>
  {/if}
  <div class="content">
    {@render children()}
  </div>
</section>
