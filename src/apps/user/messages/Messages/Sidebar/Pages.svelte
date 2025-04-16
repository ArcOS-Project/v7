<script lang="ts">
  import type { MessagingAppRuntime } from "../../runtime";
  import { messagingPages } from "../../store";

  const { process }: { process: MessagingAppRuntime } = $props();
  const { pageId } = process;
</script>

<div class="pages">
  {#each Object.entries(messagingPages) as [id, page] (id)}
    <button
      class="lucide icon-{page.icon}"
      onclick={() => process.switchPage(id)}
      title={page.name}
      aria-label={page.name}
      class:active={$pageId === id}
    >
    </button>
  {/each}
</div>
