<script lang="ts">
  import type { AppComponentProps } from "$types/app";
  import type { SecureContextRuntime } from "./runtime";
  import Actions from "./SecureContext/Actions.svelte";
  import Display from "./SecureContext/Display.svelte";
  import Header from "./SecureContext/Header.svelte";
  import Notice from "./SecureContext/Notice.svelte";
  import Password from "./SecureContext/Password.svelte";

  const { process }: AppComponentProps<SecureContextRuntime> = $props();
  const { data } = process;

  function settings() {
    process.settings();
  }
</script>

{#if data}
  <Header {data}></Header>
  <div class="top">
    <p class="what">{@html data.what}</p>
    <Display {data} />
    <Notice userPreferences={process.userPreferences} />
    <Password {process} />
    <div class="login-status">
      <p class="whoami">Authorizing as {process.username}</p>
      <button class="link settings" onclick={settings}>Security Settings</button
      >
    </div>
  </div>
  <Actions {process} />
{/if}
