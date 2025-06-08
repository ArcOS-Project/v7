<script lang="ts">
  import type { SettingsRuntime } from "$apps/user/settings/runtime";
  import { Store } from "$ts/writable";
  import type { UserInfo } from "$types/user";

  const { process, userInfo }: { process: SettingsRuntime; userInfo: UserInfo } = $props();
  const { userPreferences } = process;

  const editing = Store<boolean>(false);
  let newDisplayName = $state<string>($userPreferences.account.displayName || userInfo.username);

  function toggle() {
    if ($editing) {
      $userPreferences.account.displayName = !newDisplayName || newDisplayName === userInfo.username ? undefined : newDisplayName;
      newDisplayName = $userPreferences.account.displayName || userInfo.username;
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
    <span>{$userPreferences.account.displayName || userInfo.username}</span>
  {/if}
  <button class="lucide" class:icon-check={$editing} class:icon-pencil={!$editing} onclick={toggle} aria-label="Edit"> </button>
</h1>
