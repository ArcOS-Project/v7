<script lang="ts">
  import AppType from "./IconEditDialog/AppType.svelte";
  import BuiltinType from "./IconEditDialog/BuiltinType.svelte";
  import FileType from "./IconEditDialog/FileType.svelte";
  import ModeToggle from "./IconEditDialog/ModeToggle.svelte";
  import type { IconEditDialogRuntime } from "./runtime";

  const { process }: { process: IconEditDialogRuntime } = $props();
  const { id, type, currentIcon, values } = process;
</script>

<div class="left">
  <div class="top">
    <h1>%title({id})%</h1>
    <ModeToggle {process} />
    {#if $type === "@fs"}
      <FileType {process} />
    {:else if $type === "@app"}
      <AppType {process} />
    {:else if $type === "@builtin"}
      <BuiltinType {process} />
    {/if}
  </div>
  <div class="bottom">
    <button class="default" onclick={() => process.default()} disabled={$type === "@builtin" && $values[$type] === id!}>
      %default%
    </button>
    <button class="cancel" onclick={() => process.closeWindow()}>%general.cancel%</button>
    <button class="save suggested" onclick={() => process.save()}>%general.save%</button>
  </div>
</div>
<div class="right">
  <div class="icon">
    <img src={$currentIcon} alt="" />
  </div>
  <h1>{id}</h1>
</div>
