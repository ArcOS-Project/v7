<script lang="ts">
  import type { AppComponentProps } from "$types/app";
  import Spinner from "../../../lib/Spinner.svelte";
  import type { LoginAppRuntime } from "./runtime";

  const { process }: AppComponentProps<LoginAppRuntime> = $props();

  const { displayStatus, status, working, profileImage } = process;

  let username: string = $state("");
  let password: string = $state("");

  function go() {
    if (!username || !password) return;

    process.proceed(username, password);
  }
</script>

<img src={$profileImage} alt="" />
<div class="container" class:hide={$displayStatus}>
  <div class="left">
    <div class="field username">
      <div class="icon">
        <span class="lucide icon-user"></span>
      </div>
      <input type="text" bind:value={username} placeholder="Username" />
    </div>
    <div class="field password">
      <div class="icon">
        <span class="lucide icon-key-round"></span>
      </div>
      <input type="text" bind:value={password} placeholder="Username" />
    </div>
  </div>
  <div class="right">
    <button
      class="continue"
      aria-label="Login"
      disabled={!username || !password || $working}
      onclick={go}
    >
      <span class="lucide icon-arrow-right"></span>
    </button>
  </div>
</div>
<div class="status" class:show={$displayStatus}>
  <Spinner height={24} />
  {$status}
</div>
