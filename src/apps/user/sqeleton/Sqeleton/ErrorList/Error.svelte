<script lang="ts">
  import HighlightComponent from "$lib/HighlightComponent.svelte";
  import dayjs from "dayjs";
  import type { SqeletonError } from "../../types";

  const { error }: { error: SqeletonError } = $props();
  let expand = $state(false);
</script>

<div class="error-row" class:system={error.system}>
  <div class="text">
    <button
      class="lucide"
      class:icon-chevron-right={!expand}
      class:icon-chevron-down={expand}
      aria-label="Expand error"
      onclick={() => (expand = !expand)}
    ></button>
    <span class="lucide" class:icon-circle-alert={!error.system} class:icon-triangle-alert={error.system}></span>
    <span class="error-text">{error.text}</span>
    <span class="timestamp">{dayjs(error.timestamp).format("DD MMM YYYY - HH:mm:ss")}</span>
  </div>
  {#if expand}
    <div class="sql-query">
      <HighlightComponent language="sql" src={error.sql} />
    </div>
  {/if}
</div>
