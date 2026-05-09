<script lang="ts">
  import type { ISecureContextRuntime } from "$interfaces/runtimes/ISecureContextRuntime";
  import type { AppComponentProps } from "$types/app";
  import Actions from "./SecureContext/Actions.svelte";
  import Display from "./SecureContext/Display.svelte";
  import Header from "./SecureContext/Header.svelte";
  import Notice from "./SecureContext/Notice.svelte";
  import Password from "./SecureContext/Password.svelte";

  const { process }: AppComponentProps<ISecureContextRuntime> = $props();
  const { data, userPreferences } = process;
</script>

{#if data}
  <Header {data} {process}></Header>
  <div class="top">
    <p class="what">{@html data.what}</p>
    <Display {data} {process} />
    <Notice {userPreferences} />
    <Password {process} />
    <div class="login-status">
      <p class="whoami">
        Authorizing as {$userPreferences.account.displayName || process.username.toLowerCase()}
      </p>
      <button class="link settings" onclick={() => process.settings()}>Security Settings</button>
    </div>
  </div>
  <Actions {process} />
{/if}
