<script lang="ts">
  import type { IMuiRenderer } from "$interfaces/IMuiRenderer";
  import MuiRendererBranch from "$lib/ModularUi/MuiRendererBranch.svelte";
  import type { SettingsSectionBlock } from "$types/system/mui/settings";
  import Section from "../../Settings/Section.svelte";

  let { block, renderer }: { block: SettingsSectionBlock; renderer: IMuiRenderer } = $props();
</script>

<Section caption={block.title} className={block.className}>
  <MuiRendererBranch {renderer} blocks={block.children} />
</Section>
