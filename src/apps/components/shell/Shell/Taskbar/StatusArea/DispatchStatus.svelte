<script lang="ts">
  import type { IGlobalDispatch } from "$interfaces/services/IGlobalDispatch";

  let { service }: { service: IGlobalDispatch } = $props();
  const { ConnectionState } = service;
</script>

<span
  class="lucide"
  class:icon-wifi-off={$ConnectionState === "disconnected"}
  class:icon-wifi-sync={$ConnectionState === "connecting"}
  class:icon-wifi={$ConnectionState === "connected"}
></span>
