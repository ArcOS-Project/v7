<script lang="ts">
  import type { IIconPickerRuntime } from "$interfaces/runtimes/IIconPickerRuntime";
  import Icon from "$lib/Icon.svelte";

  const { process }: { process: IIconPickerRuntime } = $props();
  const { forWhat, selected, store } = process;
</script>

<div class="header">
  <h1>Pick an icon for {forWhat}</h1>
  <div class="what">
    <Icon icon={store[$selected] ?? "UnknownFileIcon"} />
    <span>{forWhat}</span>
  </div>
</div>
