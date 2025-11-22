<script lang="ts">
  import type { AppComponentProps } from "$types/app";
  import Button from "./MessageBox/Button.svelte";
  import type { MessageBoxRuntime } from "./runtime";

  const { process }: AppComponentProps<MessageBoxRuntime> = $props();
  const { data } = process;
  const Component = data?.content;

  let disabled = $state<boolean>(false);
</script>

{#if data}
  <div class="top">
    <div class="left">
      <img src={process.getIconCached(data.image || "ComponentIcon") || data.image} alt="" />
    </div>
    <div class="right">
      <h1>{data?.title}</h1>
      {#if data.message}
        <p>{@html data.message}</p>
      {:else if Component}
        <div class="component">
          <Component {process} {data} bind:disabled />
        </div>
      {/if}
    </div>
  </div>
  <div class="bottom">
    {#each data.buttons as button}
      <Button {button} {process} suggestedDisabled={disabled} />
    {/each}
  </div>
{/if}
