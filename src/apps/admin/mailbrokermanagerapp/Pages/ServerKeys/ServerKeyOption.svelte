<script lang="ts">
  import type { IMailbrokerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import type { Mailbroker } from "$types/server/mailbroker";
  import ServerKeyPills from "../../MailbrokerManager/ServerKeyPills.svelte";

  let { process, serverKey }: { process: IMailbrokerRuntime; serverKey: Mailbroker.MailKey } = $props();
</script>

<button class="server-key-option" onclick={() => process.spawnOverlay("KeyOverlay", serverKey._id)}>
  <span class="lucide icon-key"></span>
  <div class="info">
    <h2>Key for {serverKey.serverName}</h2>
    <p class="what">{serverKey.disabled ? "Decommissioned" : "In-use"} server key</p>
    <ServerKeyPills {serverKey} disabled={serverKey.disabled}/>
  </div>
</button>
