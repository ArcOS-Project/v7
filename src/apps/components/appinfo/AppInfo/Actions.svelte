<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import type { AppInfoRuntime } from "../runtime";

  const { appId, process }: { appId: string; process: AppInfoRuntime } =
    $props();
  const { userPreferences } = process;

  let disabled = $state(false);

  $effect(() => {
    const sub = userPreferences.subscribe((v) => {
      disabled = v.disabledApps.includes(appId);
    });

    () => sub();
  });

  async function killAll() {
    const instances = process.handler.renderer?.getAppInstances(appId);

    for (const instance of instances || []) {
      instance.killSelf();
    }
  }
</script>

<InfoBlock className="actions">
  <InfoRow>
    <p class="id">{appId}</p>
    <button onclick={killAll} {disabled}>Kill all</button>
    <button class="suggested" onclick={() => process.killSelf()}>Close</button>
  </InfoRow>
</InfoBlock>
