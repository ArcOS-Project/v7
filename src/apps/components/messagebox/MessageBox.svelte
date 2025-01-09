<script lang="ts">
  import type { AppComponentProps } from "$types/app";
  import Button from "./MessageBox/Button.svelte";
  import type { MessageBoxRuntime } from "./runtime";

  const { process }: AppComponentProps<MessageBoxRuntime> = $props();
  const { data } = process;
</script>

{#if data}
  <div class="top">
    <div class="left">
      <img src={data.image} alt="" />
    </div>
    <div class="right">
      <h1>{data?.title}</h1>
      <p>{@html data.message}</p>
    </div>
  </div>
  <div class="bottom">
    {#each data.buttons as button}
      <Button {button} {process} />
    {/each}
  </div>
{/if}
