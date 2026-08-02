<script lang="ts">
  import type { IMailbrokerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import type { Mailbroker } from "$types/server/mailbroker";
  import type { ReadableStore } from "$types/shared/writable";

  let { process, updateData }: { process: IMailbrokerRuntime; updateData: ReadableStore<Mailbroker.MailTemplateUpdate> } =
    $props();
</script>

general

<input type="text" bind:value={$updateData.name}>