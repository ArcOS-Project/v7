<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import type { SearchItem } from "$types/search";
  import type { FuseResult } from "fuse.js";

  const { result, i, process }: { result: FuseResult<SearchItem>; i: number; process: IShellRuntime } = $props();
  const { SelectionIndex } = process;
</script>

<button
  class="list-item"
  title={result.item.description}
  onclick={() => process.Trigger(result.item)}
  class:selected={i == $SelectionIndex}
>
  <img src={result.item.image} alt="" />
  <span class="name">
    <p>{result.item.caption}</p>
    <p class="description">{result.item.description}</p>
  </span>
</button>
