<script lang="ts">
  import type { SettingsRuntime } from "$apps/user/settings/runtime";
  import { MessageBox } from "$ts/dialog";
  import { formatBytes } from "$ts/fs/util";
  import { WarningIcon } from "$ts/images/dialog";
  import UserStyleWarning from "./UserStyles/UserStyleWarning.svelte";

  let value = $state("");

  const { process }: { process: SettingsRuntime } = $props();
  const { userPreferences, slideVisible } = process;

  $effect(() => {
    if (!$slideVisible) return;

    reset();

    MessageBox(
      {
        title: "User styles are risky!",
        image: WarningIcon,
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
    $userPreferences.shell.customStyle.content = value.replaceAll(
      /\<(?:\/|)(?:[A-Za-z\-]+)\>/g,
      ""
    );

    process.slideVisible.set(false);
  }
</script>

<div class="top">
  <textarea bind:value maxlength="4096"></textarea>
</div>
<div class="bottom">
  <div class="left">{formatBytes(value.length)} / 4.0KB</div>
  <div class="right">
    <button onclick={() => process.slideVisible.set(false)}>Cancel</button>
    <button onclick={reset}>Discard</button>
    <button onclick={apply} class="suggested">Apply</button>
  </div>
</div>
