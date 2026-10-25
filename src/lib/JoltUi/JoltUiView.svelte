<script
  lang="ts"
  generics="TRenderer extends IJuiRenderer = IJuiRenderer, TProcess extends IProcess = IProcess, TBlock extends JoltBlock = JoltBaseLeafBlock, TPage extends JoltUiPage<any> = JoltUiPage<any>"
>
  import type { Constructs } from "$interfaces/common";
  import type { IJuiRenderer } from "$interfaces/IJuiRenderer";
  import type { IProcess } from "$interfaces/IProcess";
  import type { JoltBaseLeafBlock, JoltBlock, JoltUiPage } from "$types/system/jui";
  import { onMount } from "svelte";
  import JuiRendererBranch from "./JoltRendererBranch.svelte";
  import { Sleep } from "$ts/sleep";

  let {
    rendererConstructor,
    process,
    page: pageContext,
  }: { rendererConstructor: Constructs<TRenderer>; process: TProcess; page: TPage } = $props();

  let renderer = $state<IJuiRenderer>();
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
  <JuiRendererBranch {renderer} {blocks} />
{/if}
