<script lang="ts">
  import { inspect } from "util";
  import type { TestAppRuntime } from "./runtime";

  const { process }: { process: TestAppRuntime } = $props();
</script>

<code class="block">
  {inspect([...process.handler.store()], true)}
</code>
