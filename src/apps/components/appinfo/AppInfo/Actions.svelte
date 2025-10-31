<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import { onMount } from "svelte";
  import type { AppInfoRuntime } from "../runtime";

  const { appId, process }: { appId: string; process: AppInfoRuntime } = $props();
  const { userPreferences } = process;

  let disabled = $state(false);

  onMount(() => {
    const sub = userPreferences.subscribe((v) => {
      disabled = v.disabledApps.includes(appId);
    });

    () => sub();
  });
</script>

<InfoBlock className="actions">
  <InfoRow>
    <p class="id">{appId}</p>
    <button onclick={() => process.killAll()} {disabled}>%actions.killAll%</button>
    <button class="suggested" onclick={() => process.closeWindow()}>%general.close%</button>
  </InfoRow>
</InfoBlock>
