<script lang="ts">
  import Icon from "$lib/Icon.svelte";
  import type { Snippet } from "svelte";

  const {
    children,
    image = "",
    className = "",
    title = "",
    unimportant = false,
  }: { children: Snippet; image?: string; className?: string; title?: any; unimportant?: boolean } = $props();
</script>

<div class={`status-segment ${className}`.trim()} class:unimportant {title}>
  {#if image}
    <!-- Assuming the process gives a resolved icon URL to this component-->
    <Icon icon={image} />
  {/if}
  <div class="content">
    {@render children()}
  </div>
</div>
