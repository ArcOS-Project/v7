<script lang="ts">
  import type { IMuiRenderer } from "$interfaces/IMuiRenderer";
  import MuiRendererBranch from "$lib/ModularUi/MuiRendererBranch.svelte";
  import type { SettingsLayoutBlock } from "$types/system/mui/settings";

  let { block, renderer }: { block: SettingsLayoutBlock; renderer: IMuiRenderer } = $props();
</script>

<div class="layout {block.variant}-layout">
  <MuiRendererBranch {renderer} blocks={block.children} />
</div>
