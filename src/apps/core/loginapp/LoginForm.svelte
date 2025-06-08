<script lang="ts">
  import Field from "./LoginForm/Field.svelte";
  import type { LoginAppRuntime } from "./runtime";

  let username = $state("");
  let password = $state("");

  const { process }: { process: LoginAppRuntime } = $props();
  const { serverInfo } = process;

  function createUser() {
    process.kernel.state?.loadState("initialSetup");
  }

  function go() {
    process.proceed(username, password);
  }
</script>

<div class="login-form">
  <div class="left">
    <Field bind:value={username} placeholder="Username" icon="user" />
    <Field bind:value={password} placeholder="Password" icon="key-round" password onsubmit={go} />
  </div>
  <div class="right">
    <button class="continue" aria-label="Continue" disabled={!username || !password} onclick={go}>
      <span class="lucide icon-arrow-right"></span>
    </button>
  </div>
</div>
{#if !serverInfo?.disableRegistration}
  <button class="create-user" onclick={createUser}>No account?</button>
{/if}
