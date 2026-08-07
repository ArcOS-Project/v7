<script lang="ts">
  import type { ILoginAppRuntime } from "$interfaces/runtimes/ILoginAppRuntime";
  import { Store } from "$ts/writable";
  import Field from "./LoginForm/Field.svelte";

  let username = Store("");
  let password = Store("");

  const { process }: { process: ILoginAppRuntime } = $props();
  const { serverInfo, persistence } = process;

  function go() {
    process.proceed($persistence?.username || $username, $password);
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
{#if $persistence}
  <button class="switch-user" onclick={() => process.deletePersistence()}>%apps.loginApp.loginForm.switchUser%</button>
{:else if !$serverInfo?.disableRegistration}
  <button class="create-user" onclick={() => process.createUser()}>%apps.loginApp.loginForm.noAccount%</button>
{/if}
