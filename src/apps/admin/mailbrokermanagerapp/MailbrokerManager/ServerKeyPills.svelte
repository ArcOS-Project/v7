<script lang="ts">
  import { Server } from "$ts/env";
  import type { Mailbroker } from "$types/server/mailbroker";

  let { serverKey, disabled = false }: { serverKey: Mailbroker.MailKey; disabled: boolean } = $props();
</script>

<div class="pills">
  {#if disabled}
    <div class="pill clr-orange">
      <span>Disabled</span>
    </div>
  {:else}
    <div class="pill clr-green">
      <span>Enabled</span>
    </div>
  {/if}
  {#if serverKey.serverName === "arcapi.nl"}
    <div class="pill clr-purple">Master key</div>
  {/if}
  {#if Server.hostname === serverKey.serverName}
    <div class="pill clr-blue">This server</div>
  {/if}
</div>
