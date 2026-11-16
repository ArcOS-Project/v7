<script lang="ts">
  import type { Snippet } from "svelte";
  import PropertyKey from "./PropertyKey.svelte";

  let { key, value, ValueComponent }: { key: string; value: any; ValueComponent: Snippet<[any]> } = $props();
</script>

<summary><PropertyKey {key} /> <span class="complex-datatype"> {@render ValueComponent(value)}</span></summary>
