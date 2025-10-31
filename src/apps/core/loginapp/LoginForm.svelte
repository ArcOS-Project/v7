<script lang="ts">
  import { Store } from "$ts/writable";
  import { onMount } from "svelte";
  import Field from "./LoginForm/Field.svelte";
  import type { LoginAppRuntime } from "./runtime";

  let username = Store("");
  let password = Store("");
  let targetedUsername = Store<[string, string] | undefined>();

  const { process }: { process: LoginAppRuntime } = $props();
  const { serverInfo, persistence } = process;

  onMount(() => {
    username.subscribe((v) => {
      const result = /(?<hostname>[a-zA-Z.]+)\\(?<username>.+)/g.exec(v);

      if (result?.groups?.hostname) $targetedUsername = [result?.groups?.hostname, result?.groups.username];
      else $targetedUsername = undefined;
    });
  });

  function go() {
    process.proceed($persistence?.username || $targetedUsername?.[1] || $username, $password, $targetedUsername?.[0]);
  }
</script>

<div class="login-form">
  <div class="left">
    {#if !$persistence}
      <Field bind:value={$username} placeholder="%apps.loginApp.loginForm.username%" icon="user" />
    {/if}
    <Field bind:value={$password} placeholder="%apps.loginApp.loginForm.password%" icon="key-round" password onsubmit={go} />
  </div>
  <div class="right">
    <button class="continue" aria-label="Continue" disabled={!($persistence?.username || username) || !password} onclick={go}>
      <span class="lucide icon-arrow-right"></span>
    </button>
  </div>
</div>
{#if $targetedUsername?.[0]}
  <p class="targeted-server">
    Logging in to {$targetedUsername[0]}
  </p>
{/if}
{#if $persistence}
  <button class="switch-user" onclick={() => process.deletePersistence()}>%apps.loginApp.loginForm.switchUser%</button>
{:else if !$serverInfo?.disableRegistration}
  <button class="create-user" onclick={() => process.createUser()}>%apps.loginApp.loginForm.noAccount%</button>
{/if}
