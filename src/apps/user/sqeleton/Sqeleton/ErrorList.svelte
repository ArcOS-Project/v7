<script lang="ts">
  import type { SqeletonRuntime } from "../runtime";

  const { process }: { process: SqeletonRuntime } = $props();
  const { errors } = process;
</script>

{#each $errors.reverse() as error, i}
  <div class="error-row">
    <span class="lucide icon-circle-alert"></span>
    <span>{error}</span>
    <span class="index">#{$errors.length - i}</span>
  </div>
{/each}
{#if !$errors?.length}
  <p class="empty">No errors yet</p>
{/if}
