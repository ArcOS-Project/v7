<script lang="ts">
  import { Store } from "$ts/writable";
  import { onMount } from "svelte";
  import Field from "./LoginForm/Field.svelte";
  import type { LoginAppRuntime } from "./runtime";

  let username = Store("");
  let password = Store("");

  const { process }: { process: LoginAppRuntime } = $props();
  const { serverInfo, persistence } = process;

  function go() {
    process.proceed($persistence?.username || $username, $password);
  }
</script>

<div class="login-form">
  <div class="left">
    {#if !$persistence}
      <Field bind:value={$username} placeholder="Username" icon="user" />
    {/if}
    <Field bind:value={$password} placeholder="Password" icon="key-round" password onsubmit={go} />
  </div>
  <div class="right">
    <button class="continue" aria-label="Continue" disabled={!($persistence?.username || username) || !password} onclick={go}>
      <span class="lucide icon-arrow-right"></span>
    </button>
  </div>
</div>
{#if $persistence}
  <button class="switch-user" onclick={() => process.deletePersistence()}>Switch user</button>
{:else if !$serverInfo?.disableRegistration}
  <button class="create-user" onclick={() => process.createUser()}>No account?</button>
{/if}
