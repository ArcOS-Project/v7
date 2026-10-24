<script
  lang="ts"
  generics="TRenderer extends IMuiRenderer = IMuiRenderer, TProcess extends IProcess = IProcess, TBlock extends ModularBlock = BaseLeafBlock, TPage extends ModularPage<TBlock> = ModularPage<TBlock>"
>
  import type { Constructs } from "$interfaces/common";
  import type { IMuiRenderer } from "$interfaces/IMuiRenderer";
  import type { IProcess } from "$interfaces/IProcess";
  import type { ModularPage, ModularBlock, BaseLeafBlock } from "$types/system/mui";
  import { onMount } from "svelte";
  import MuiRendererBranch from "./MuiRendererBranch.svelte";

  let {
    rendererConstructor,
    process,
    page: pageContext,
  }: { rendererConstructor: Constructs<TRenderer>; process: TProcess; page: TPage } = $props();

  let renderer = $state<IMuiRenderer>();
  let blocks = $state<TBlock[]>([]);

  onMount(() => {
    renderer = new rendererConstructor(process);
    blocks = pageContext.page;
  });
</script>

{#if renderer}
  <MuiRendererBranch {renderer} {blocks} />
{/if}
