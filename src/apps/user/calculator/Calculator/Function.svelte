<script lang="ts">
  import type { CalculatorRuntime } from "../runtime";
  import type { CalculatorKey } from "../types";

  const { key, process }: { key: CalculatorKey; process: CalculatorRuntime } = $props();
</script>

<button onclick={process.Functions[key[0]!][1]} class={process.Functions[key[1]!][2]}>
  {process.Functions[key[1]!][0]}
</button>
