<script lang="ts">
  import type { IUserConnector } from "$interfaces/modules/server/IUserConnector";
  import type { IMessageComposerRuntime } from "$interfaces/runtimes/IMessageComposerRuntime";
  import HtmlSpinner from "$lib/HtmlSpinner.svelte";
  import { Daemon } from "$ts/env";
  import { onMount } from "svelte";

  let { recipient, process }: { recipient: string; process: IMessageComposerRuntime } = $props();
  const { sending } = process;

  let exists = $state<boolean>(true);
  let loading = $state<boolean>(true);

  onMount(async () => {
    const result = await Daemon.GetConnector<IUserConnector>("UserConnector").AvailabilityUsername(recipient);
    exists = !result.success;
    loading = false;
  });
</script>

<div class="recipient" class:bad={!exists} title={exists ? "This user does not exist" : ""} class:loading>
  <span>{recipient}</span>
  {#if !loading}
    <button
      class="lucide icon-x"
      onclick={() => process.removeRecipient(recipient)}
      aria-label="Remove {recipient}"
      disabled={$sending}
      title="Remove {recipient}"
    ></button>
  {:else}
    <HtmlSpinner thickness={2} height={16}></HtmlSpinner>
  {/if}
</div>
