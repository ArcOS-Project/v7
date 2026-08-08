<script lang="ts">
  import type { INewLoginAppRuntime } from "$interfaces/runtimes/INewLoginAppRuntime";
  import type { Unsubscriber } from "$types/shared/writable";
  import { onDestroy, onMount } from "svelte";
  import Field from "./Field.svelte";

  let { process }: { process: INewLoginAppRuntime } = $props();
  const { State, Status, ServerInfo } = process;

  let identity = $state<string>();
  let password = $state<string>();
  let unsub: Unsubscriber;

  onMount(() => {
    unsub = State.subscribe((v) => {
      identity = "";
      password = "";
    })
  })

  onDestroy(() => {
    unsub?.();
  })

  async function doLogin() {
    if ((!identity && !$State.selectedUser) || !password) return;

    process.PerformLogin(identity || $State.selectedUser!.username, password);
  }
</script>

<div class="login-form">
  <div class="left">
    {#if !$State.selectedUser}
      <Field bind:value={identity} placeholder="Username or Email" icon="user"></Field>
    {/if}
    <Field bind:value={password} placeholder="Password" icon="key-round" password onsubmit={doLogin}></Field>
  </div>
  <div class="right">
    <button class="continue" aria-label="Continue" disabled={(!identity && !$State.selectedUser) || !password} onclick={doLogin}>
      <span class="lucide icon-arrow-right"></span>
    </button>
  </div>
</div>

<button class="link password-reset" disabled>Forgot password?</button>

{#if !$State.selectedUser && !ServerInfo?.disableRegistration}
  <button class="login-action create-user" onclick={() => process.CreateUser()}>No account?</button>
{/if}
