<script lang="ts">
  import type { ISettingsRuntime } from "$interfaces/runtimes/ISettingsRuntime";
  import { Daemon } from "$ts/env";
  import { Store } from "$ts/writable";

  const { process }: { process: ISettingsRuntime; } = $props();
  const { userPreferences } = process;

  const editing = Store<boolean>(false);
  let newDisplayName = $state<string>($userPreferences.account.displayName || Daemon.userInfo.username);

  function toggle() {
    if ($editing) {
      $userPreferences.account.displayName = !newDisplayName || newDisplayName === Daemon.userInfo.username ? undefined : newDisplayName;
      newDisplayName = $userPreferences.account.displayName || Daemon.userInfo.username;
      $editing = false;
    } else {
      $editing = true;
    }
  }

  function onkeydown(e: KeyboardEvent) {
    if (e?.key === "Enter") toggle();
  }
</script>

<h1 class="account-name" class:editing={$editing}>
  {#if $editing}
    <input type="text" bind:value={newDisplayName} {onkeydown} />
  {:else}
    <span>{$userPreferences.account.displayName || Daemon.userInfo.username}</span>
  {/if}
  <button
    class="lucide"
    class:icon-check={$editing}
    title="Change display name"
    class:icon-pencil={!$editing}
    onclick={toggle}
    aria-label="Edit"
  >
  </button>
</h1>
