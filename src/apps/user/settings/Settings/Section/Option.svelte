<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    image?: string;
    caption: string;
    children?: Snippet;
    chevron?: boolean;
    className?: string;
    disabled?: boolean;
    onclick?: () => void;
  }

  const {
    disabled = false,
    image = "",
    caption,
    children = undefined,
    chevron = false,
    className = "",
    onclick = undefined,
  }: Props = $props();

  function click() {
    if (onclick && !disabled) onclick();
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="option {className}" onclick={click} class:clickable={!!onclick} class:chevron class:disabled>
  <div class="name">
    {#if image}
      <img src={image} alt="" />
    {/if}
    <span>{caption}</span>
  </div>
  <div class="right">
    {#if chevron}
      <span class="lucide icon-chevron-right"></span>
    {:else if children}
      {@render children()}
    {/if}
  </div>
</div>
