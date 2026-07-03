<script lang="ts">
  import type { IOpenWithRuntime } from "$interfaces/runtimes/IOpenWithRuntime";
  import Icon from "$lib/Icon.svelte";
  import type { FileOpenerResult } from "$types/system/fs";

  const {
    process,
    handler,
  }: {
    process: IOpenWithRuntime;
    handler: FileOpenerResult;
  } = $props();
  const { selectedId } = process;
</script>

<button
  onclick={() => ($selectedId = handler.id)}
  ondblclick={() => process.go(handler.id)}
  class:active={$selectedId === handler.id}
  class="option"
>
  <Icon icon={handler.app ? `@app::${handler.app?.id}` : handler.handler?.icon || "ComponentIcon"}></Icon>
  <div>
    <h1>{handler.type === "app" ? handler.app?.metadata.name : handler.handler?.name}</h1>
    <p>{handler.type === "handler" ? handler.handler?.description : handler.app?.metadata.author}</p>
  </div>
</button>
