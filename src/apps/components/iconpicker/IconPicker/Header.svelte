<script lang="ts">
  import { UnknownFileIcon } from "$ts/images/mime";
  import type { IconPickerRuntime } from "../runtime";

  const { process }: { process: IconPickerRuntime } = $props();
  const { forWhat, selected, store } = process;
</script>

<div class="header">
  <h1>Pick an icon for {forWhat}</h1>
  <div class="what">
    <img src={store[$selected] || UnknownFileIcon} alt="" />
    <span>{forWhat}</span>
  </div>
</div>
