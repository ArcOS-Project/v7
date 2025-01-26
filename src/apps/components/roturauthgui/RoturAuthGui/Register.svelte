<script lang="ts">
  import type { RoturAuthGuiProcess } from "../runtime";

  const { process }: { process: RoturAuthGuiProcess } = $props();
  const { isRegistering } = process;

  let username = $state("");
  let password = $state("");

  function go() {
    process.register(username, password);
  }
</script>

<div class="field">
  <label for="usernameField">Username</label>
  <input type="text" id="usernameField" bind:value={username} />
</div>

<div class="field">
  <label for="passwordField">Password</label>
  <input type="password" id="passwordField" bind:value={password} />
</div>

<div class="actions">
  <button class="suggested" disabled={!username || !password} onclick={go}>
    Register
  </button>
  <div class="alternatives">
    <button onclick={() => ($isRegistering = false)}>I have an account</button>
    <div class="dot"></div>
    <button onclick={() => process.killSelf()}>Cancel</button>
  </div>
</div>
