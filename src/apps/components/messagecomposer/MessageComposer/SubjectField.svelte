<script lang="ts">
  import type { IMessageComposerRuntime } from "$interfaces/runtimes/IMessageComposerRuntime";

  const { process }: { process: IMessageComposerRuntime } = $props();
  const { title, sending } = process;
</script>

<div class="field subject">
  <p class="name">Subject:</p>
  <div class="value">
    <input type="text" bind:value={$title} disabled={$sending} />
  </div>
</div>
