<script lang="ts">
  import type { CalculatorRuntime } from "../runtime";
  import type { CalculatorKey } from "../types";

  const { key, process }: { key: CalculatorKey; process: CalculatorRuntime } = $props();
</script>

<button
  onclick={() => process.processKey(key[1]!)}
  class:empty={!key[0]}
  class:alt={process.Store.altClasses.includes(key[1]!)}
  class="shell-colored"
>
  {key[0]}
</button>
