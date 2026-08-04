<script lang="ts">
  import type { IMailbrokerManagerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
  import { textToBlob } from "$ts/util/convert";
  import type { Mailbroker } from "$types/server/mailbroker";
  import type { ReadableStore, Unsubscriber } from "$types/shared/writable";
  import { onDestroy, onMount } from "svelte";

  let { process, updateData }: { process: IMailbrokerManagerRuntime; updateData: ReadableStore<Mailbroker.MailTemplateUpdate> } =
    $props();

  let unsubscriber: Unsubscriber;

  onMount(() => {
    unsubscriber = updateData.subscribe((v) => {
      URL.revokeObjectURL(src);

      src = URL.createObjectURL(textToBlob($updateData.htmlContent ?? "", "text/html"));
    });
  });

  onDestroy(() => {
    unsubscriber?.();
  });

  let src = $state("");
</script>

<textarea readonly={!process.admin.canAccess(AdminScopes.adminMailbrokerTemplatesWrite)} bind:value={$updateData.htmlContent}
></textarea>

<div class="iframe-wrapper">
  <iframe {src} frameborder="0" title="Template preview"></iframe>
</div>
