<script lang="ts">
  import type { ICalculatorRuntime } from "$interfaces/runtimes/ICalculatorRuntime";
  import type { CalculatorKey } from "../types";

  const { key, process }: { key: CalculatorKey; process: ICalculatorRuntime } = $props();
</script>

<button
  onclick={() => process.processKey(key[1]!)}
  class:empty={!key[0]}
  class:alt={process.Store.altClasses.includes(key[1]!)}
  class="shell-colored"
>
  {key[0]}
</button>
