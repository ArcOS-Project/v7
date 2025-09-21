<script lang="ts">
  import type { IconEditDialogRuntime } from "../runtime";

  const { process }: { process: IconEditDialogRuntime } = $props();
  const { type } = process;
</script>

<div class="mode-toggle">
  <button class:selected={$type === "@app"} onclick={() => ($type = "@app")}>App</button>
  <button class:selected={$type === "@fs"} onclick={() => ($type = "@fs")}>File</button>
  <button class:selected={$type === "@builtin"} onclick={() => ($type = "@builtin")}>Built-in</button>
</div>
