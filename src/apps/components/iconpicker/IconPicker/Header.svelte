<script lang="ts">
  import type { IconPickerRuntime } from "../runtime";

  const { process }: { process: IconPickerRuntime } = $props();
  const { forWhat, selected, store } = process;
</script>

<div class="header">
  <h1>Pick an icon for {forWhat}</h1>
  <div class="what">
    <img src={store[$selected] || process.getIconCached("UnknownFileIcon")} alt="" />
    <span>{forWhat}</span>
  </div>
</div>
