<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import type { AppPermissionsRuntime } from "../runtime";
  import { PERMISSIONS } from "$ts/permissions/store";
  import { Permissions } from "$ts/permissions";
  import { onMount } from "svelte";

  const { Configuration } = Permissions!;
  const { app, process }: { app: string; process: AppPermissionsRuntime } = $props();

  let uuid = $state("");
  let disabled: boolean = $state(false);

  onMount(() => {
      Configuration.subscribe((permissions) => {
          const reg = permissions?.registration ?? {};
          uuid = Object.keys(reg).find((key) => reg[key] === app) ?? "";
          if (!uuid) {
            disabled = true;
          }
      });
  });

  function resetPerms() {
    if (!uuid) return;
    Configuration.update((permissions) => {
      permissions.allowed[uuid] = [];
      permissions.denied[uuid] = [];
      return permissions;
    })
  }
</script>

<InfoBlock >
  <InfoRow className="actions">
    <button {disabled} onclick={() => resetPerms()}>Reset all</button>
    <button class="suggested" onclick={() => process.closeWindow()}>Close</button>
  </InfoRow>
</InfoBlock>