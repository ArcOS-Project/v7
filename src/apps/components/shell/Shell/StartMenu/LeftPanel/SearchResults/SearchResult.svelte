<script lang="ts">
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
  import Icon from "$lib/Icon.svelte";
  import type { SearchItem } from "$types/services/search";
  import type { FuseResult } from "fuse.js";

  const { result, i, process }: { result: FuseResult<SearchItem>; i: number; process: IShellRuntime } = $props();
  const { SelectionIndex } = process.arcFind! ?? {};
</script>

<button
  class="list-item"
  title={result.item.description}
  onclick={() => process.arcFind?.Trigger(result.item)}
  class:selected={i == $SelectionIndex}
>
  <Icon icon={result.item.image ?? "EmptyMimeIcon"} />
  <span class="name">
    <p>{result.item.caption}</p>
    <p class="description">{result.item.description}</p>
  </span>
</button>
