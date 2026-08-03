<script lang="ts">
  import type { IMailbrokerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
  import type { Mailbroker } from "$types/server/mailbroker";
  import type { ReadableStore } from "$types/shared/writable";

  let { process, updateData }: { process: IMailbrokerRuntime; updateData: ReadableStore<Mailbroker.MailTemplateUpdate> } =
    $props();
</script>

<textarea bind:value={$updateData.textContent} readonly={!process.admin.canAccess(AdminScopes.adminMailbrokerTemplatesWrite)}></textarea>