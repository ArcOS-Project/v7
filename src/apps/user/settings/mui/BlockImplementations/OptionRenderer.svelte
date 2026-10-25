<script lang="ts">
  import type { IMuiRenderer } from "$interfaces/IMuiRenderer";
  import MuiRendererBranch from "$lib/ModularUi/MuiRendererBranch.svelte";
  import type { SettingsOptionBlock } from "$types/system/mui/settings";
  import Option from "../../Settings/Section/Option.svelte";

  let { block, renderer }: { block: SettingsOptionBlock; renderer: IMuiRenderer } = $props();
  let isDisabled = $derived(renderer.ConditionsMet(block.disabledIf ?? []));
</script>

<Option
  caption={block.caption}
  chevron={block.chevron}
  onclick={() => renderer.PerformAction(block.onclick)}
  image={block.image}
  disabled={$isDisabled}
>
  {#if block.input}
  <MuiRendererBranch {renderer} blocks={[block.input]}/>
  {/if}
</Option>
