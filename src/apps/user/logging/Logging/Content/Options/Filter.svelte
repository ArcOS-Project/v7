<script lang="ts">
  import type { ILoggingRuntime } from "$interfaces/runtimes/ILoggingRuntime";
  import { FilterIcons, FilterLevels } from "$apps/user/logging/store";
  import { LogLevel } from "$types/logging";

  const { process }: { process: ILoggingRuntime } = $props();
  const { selectedLevel } = process;
</script>

<div class="filter-options">
  <button
    class="lucide icon-circle-dashed"
    onclick={() => ($selectedLevel = "all")}
    class:suggested={$selectedLevel == "all"}
    aria-label="All logs"
    title="All logs"
  ></button>
  {#each FilterLevels as level}
    <button
      class="option level-{LogLevel[level as LogLevel]} icon-{FilterIcons.get(level)}"
      onclick={() => ($selectedLevel = level)}
      class:suggested={$selectedLevel == level}
      aria-label={level.toString()}
      title={level.toString()}
    >
    </button>
  {/each}
</div>
