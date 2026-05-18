<script lang="ts">
  import type { SettingsRuntime } from "$apps/user/settings/runtime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import ActionSubtle from "$lib/Window/ActionBar/ActionSubtle.svelte";
  import { MessageBox } from "$ts/util/dialog";
  import { formatBytes } from "$ts/util/fs";
  import { onMount } from "svelte";
  import UserStyleWarning from "./UserStyles/UserStyleWarning.svelte";

  let value = $state("");

  const { process }: { process: SettingsRuntime } = $props();
  const { userPreferences, slideVisible } = process;

  onMount(() => {
    if (!$slideVisible) return;

    reset();

    MessageBox(
      {
        title: "User styles are risky!",
        image: "WarningIcon",
        content: UserStyleWarning,
        buttons: [{ caption: "Understood", action: () => {}, suggested: true }],
      },
      process.pid,
      true
    );
  });

  function reset() {
    value = $userPreferences.shell.customStyle?.content || "";
  }

  function apply() {
    $userPreferences.shell.customStyle.content = value.replaceAll(/\<(?:\/|)(?:[A-Za-z\-]+)\>/g, "");

    process.slideVisible.set(false);
  }
</script>

<div class="top">
  <textarea bind:value maxlength="4096"></textarea>
</div>
<ActionBar>
  {#snippet leftContent()}
    <ActionSubtle text="{formatBytes(value.length)} / 4.0KB" />
  {/snippet}
  {#snippet rightContent()}
    <ActionButton onclick={() => process.slideVisible.set(false)}>Cancel</ActionButton>
    <ActionButton onclick={reset}>Discard</ActionButton>
    <ActionButton onclick={apply} suggested>Apply</ActionButton>
  {/snippet}
</ActionBar>