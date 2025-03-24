<script lang="ts">
  import { AppOrigins } from "$ts/apps/store";
  import { maybeIconId } from "$ts/images";
  import type { FileOpenerResult } from "$types/fs";
  import type { OpenWithRuntime } from "../../runtime";

  const {
    process,
    handler,
  }: {
    process: OpenWithRuntime;
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
  <img src={maybeIconId((handler.type === "app" ? handler.app?.metadata.icon : handler.handler?.icon)!)} alt="" />
  <div>
    <h1>{handler.type === "app" ? handler.app?.metadata.name : handler.handler?.name}</h1>
    <p>{handler.type === "handler" ? handler.handler?.description : handler.app?.metadata.author}</p>
  </div>
</button>
