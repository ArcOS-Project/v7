<script
  lang="ts"
  generics="TRenderer extends IMuiRenderer = IMuiRenderer, TProcess extends IProcess = IProcess, TBlock extends ModularBlock = BaseLeafBlock, TPage extends ModularPage<any> = ModularPage<any>"
>
  import type { Constructs } from "$interfaces/common";
  import type { IMuiRenderer } from "$interfaces/IMuiRenderer";
  import type { IProcess } from "$interfaces/IProcess";
  import type { BaseLeafBlock, ModularBlock, ModularPage } from "$types/system/mui";
  import { onMount } from "svelte";
  import MuiRendererBranch from "./MuiRendererBranch.svelte";
  import { Sleep } from "$ts/sleep";

  let {
    rendererConstructor,
    process,
    page: pageContext,
  }: { rendererConstructor: Constructs<TRenderer>; process: TProcess; page: TPage } = $props();

  let renderer = $state<IMuiRenderer>();
  let blocks = $state<TBlock[]>([]);

  onMount(update);
  let pageData = $derived.by(() => pageContext);

  async function update() {
    renderer = undefined;
    await Sleep(0);
    renderer = new rendererConstructor(process);
    await renderer._Initialize();
    blocks = pageData.page;
  }
</script>

{#if renderer}
aas
  <MuiRendererBranch {renderer} {blocks} />
{/if}
