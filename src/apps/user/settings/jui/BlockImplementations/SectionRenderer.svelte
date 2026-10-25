<script lang="ts">
  import type { IJuiRenderer } from "$interfaces/IJuiRenderer";
  import JuiRendererBranch from "$lib/JoltUi/JoltRendererBranch.svelte";
  import type { JoltSettingsSectionBlock } from "$types/system/jui/settings";
  import Section from "../../Settings/Section.svelte";

  let { block, renderer }: { block: JoltSettingsSectionBlock; renderer: IJuiRenderer } = $props();
</script>

<Section caption={block.title} className={block.className}>
  <JuiRendererBranch {renderer} blocks={block.children} />
</Section>
