<script lang="ts">
  import { RoturIcon } from "$ts/images/general";
  import type { RoturAuthGuiProcess } from "../runtime";

  const { process }: { process: RoturAuthGuiProcess } = $props();
  const { isRegistering } = process;
</script>

<div class="field">
  <label for="usernameField">Username</label>
  <input type="text" id="usernameField" />
</div>

<div class="field">
  <label for="passwordField">Password</label>
  <input type="password" id="passwordField" />
</div>

<div class="actions">
  <button class="suggested">Register</button>
  <div class="alternatives">
    <button onclick={() => ($isRegistering = false)}>I have an account</button>
    <div class="dot"></div>
    <button onclick={() => process.killSelf()}>Cancel</button>
  </div>
</div>
