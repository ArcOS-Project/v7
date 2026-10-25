<script lang="ts">
  import type { IJuiRenderer } from "$interfaces/IJuiRenderer";
  import JuiRendererBranch from "$lib/JoltUi/JoltRendererBranch.svelte";
  import type { JoltSettingsOptionBlock } from "$types/system/jui/settings";
  import Option from "../../Settings/Section/Option.svelte";

  let { block, renderer }: { block: JoltSettingsOptionBlock; renderer: IJuiRenderer } = $props();
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
    <JuiRendererBranch {renderer} blocks={[block.input]} />
  {/if}
</Option>
