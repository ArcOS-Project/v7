<script lang="ts">
  import type { ILoginAppRuntime } from "$interfaces/runtimes/ILoginAppRuntime";
  import type { MessageBoxButton } from "$types/shared/messagebox";

  const { process }: { process: ILoginAppRuntime } = $props();
  const { questionPrompt } = process;

  async function submit(button: MessageBoxButton) {
    await button.action();
    process.questionPrompt.set(undefined);
  }
</script>

{#if $questionPrompt}
  <div class="question-prompt">
    <p class="message">
      {@html $questionPrompt?.message}
    </p>
    <div class="buttons">
      {#each $questionPrompt?.buttons as button (button.caption)}
        <button onclick={() => submit(button)}>{button.caption}</button>
      {/each}
    </div>
  </div>
{/if}
