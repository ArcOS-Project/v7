<script lang="ts">
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
  import type { IArcFindService } from "$interfaces/services/IArcFindService";
  import ServiceGate from "$lib/ServiceGate.svelte";
  import type { UserPreferencesStore } from "$types/user";
  import type { BooleanStore, StringStore } from "$types/writable";
  import Bottom from "./StartMenu/Bottom.svelte";
  import LeftPane from "./StartMenu/LeftPane.svelte";
  import RightPane from "./StartMenu/RightPane.svelte";

  const {
    process,
    userPreferences,
    startMenuOpened,
    username,
  }: {
    userPreferences: UserPreferencesStore;
    startMenuOpened: BooleanStore;
    process: IShellRuntime;
    username: string;
  } = $props();

  let searchQuery = $state<StringStore | undefined>();
</script>

<div
  class="startmenu shell-colored"
  class:colored={$userPreferences.shell.taskbar.colored}
  class:opened={$startMenuOpened}
  class:searching={searchQuery && $searchQuery}
>
  <div class="top">
    <ServiceGate id="ArcFindSvc">
      {#snippet ifActive(service: IArcFindService)}
        <LeftPane {process} {service} bind:searchQuery />
      {/snippet}
      {#snippet ifInactive()}
        <!-- Same component but no service passed -->
        <LeftPane {process} bind:searchQuery />
      {/snippet}
    </ServiceGate>
    <RightPane {process} {userPreferences} {username} />
  </div>
  <Bottom {process} />
</div>
