<script lang="ts">
  import type { IconEditDialogRuntime } from "../runtime";

  const { process }: { process: IconEditDialogRuntime } = $props();
  const { type } = process;
</script>

<div class="mode-toggle">
  <button class:selected={$type === "@app"} onclick={() => ($type = "@app")}>%modeToggle.app%</button>
  <button class:selected={$type === "@fs"} onclick={() => ($type = "@fs")}>%modeToggle.file%</button>
  <button class:selected={$type === "@builtin"} onclick={() => ($type = "@builtin")}>%modeToggle.builtin%</button>
</div>
