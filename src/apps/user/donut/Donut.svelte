<script lang="ts">
  import type { DonutAppRuntime } from "./runtime";

  const { process }: { process: DonutAppRuntime } = $props();

  const { Buffer } = process;
</script>
<pre>
    {$Buffer}
</pre>
