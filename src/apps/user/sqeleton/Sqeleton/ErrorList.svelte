<script lang="ts">
  import type { ISqeletonRuntime } from "$interfaces/runtimes/ISqeletonRuntime";
  import { sortByKey } from "$ts/util";
  import Error from "./ErrorList/Error.svelte";

  const { process }: { process: ISqeletonRuntime } = $props();
  const { errors } = process;
</script>

{#each sortByKey($errors, "timestamp").reverse() as error (error.uuid)}
  <Error {error} />
{/each}
{#if !$errors?.length}
  <p class="empty">No errors yet</p>
{/if}
