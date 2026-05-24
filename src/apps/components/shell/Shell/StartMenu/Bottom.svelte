<script lang="ts">
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
  import type { IArcFindService } from "$interfaces/services/IArcFindService";
  import ServiceGate from "$lib/ServiceGate.svelte";
  import { Sleep } from "$ts/sleep";
  import { onMount } from "svelte";
  import { StartMenuActions } from "../../store";
  import Search from "./Bottom/Search.svelte";

  const { process }: { process: IShellRuntime } = $props();
  const { startMenuOpened, userPreferences } = process;

  let searchBar = $state<HTMLInputElement>();

  onMount(() => {
    startMenuOpened.subscribe(async (v) => {
      if (!v) return;

      await Sleep(100);

      searchBar?.focus();
    });
  });
</script>

<div class="bottom">
  <form
    class="search"
    onsubmit={(e) => {
      e.preventDefault();
      return false;
    }}
    autocomplete="off"
  >
    <ServiceGate id="ArcFindSvc">
      {#snippet ifActive(service: IArcFindService)}
        <Search bind:searchBar {service} safeMode={process.safeMode} />
      {/snippet}
    </ServiceGate>
  </form>
  {#if Object.keys(StartMenuActions).filter((e) => $userPreferences.shell.start.actions?.includes(e)).length}
    <div class="actions">
      {#each Object.entries(StartMenuActions) as [id, action] (id)}
        {#if $userPreferences.shell.start.actions?.includes(id)}
          <button
            class={action.className || ""}
            aria-label={action.caption}
            onclick={() => action.action(process)}
            title={action.caption}
          >
            <span class="lucide icon-{action.icon}"></span>
          </button>
        {/if}
      {/each}
    </div>
  {/if}
</div>
