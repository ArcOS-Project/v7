<script lang="ts">
  import type { IMailbrokerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
  import type { Mailbroker } from "$types/server/mailbroker";
  import type { ReadableStore } from "$types/shared/writable";

  let { process, updateData }: { process: IMailbrokerRuntime; updateData: ReadableStore<Mailbroker.MailTemplateUpdate> } =
    $props();
</script>

<div class="property name">
  <h3>Template name</h3>
  <input
    type="text"
    bind:value={$updateData.name}
    readonly={!process.admin.canAccess(AdminScopes.adminMailbrokerTemplatesWrite)}
  />
</div>

<div class="property subject">
  <h3>Subject content</h3>
  <input
    type="text"
    bind:value={$updateData.subjectContent}
    readonly={!process.admin.canAccess(AdminScopes.adminMailbrokerTemplatesWrite)}
  />
</div>

<div class="property subject">
  <h3>From suffix</h3>
  <input
    type="text"
    bind:value={$updateData.fromSuffix}
    readonly={!process.admin.canAccess(AdminScopes.adminMailbrokerTemplatesWrite)}
  />
</div>
