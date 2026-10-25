<script lang="ts">
  import type { IJuiRenderer } from "$interfaces/IJuiRenderer";
  import JuiRendererBranch from "$lib/JoltUi/JoltRendererBranch.svelte";
  import type { JoltSettingsLayoutBlock } from "$types/system/jui/settings";

  let { block, renderer }: { block: JoltSettingsLayoutBlock; renderer: IJuiRenderer } = $props();
</script>

<div class="layout {block.variant}-layout">
  <JuiRendererBranch {renderer} blocks={block.children} />
</div>
