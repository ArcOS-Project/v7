<script lang="ts">
  import type { InitialSetupRuntime } from "../../runtime";

  const { process }: { process: InitialSetupRuntime } = $props();
  const { username, password, confirm, email } = process;
</script>

<div class="form-page identity">
  <h1>Your ArcOS Identity</h1>
  <p class="subtitle">
    We'll use this information to create your ArcOS account.
  </p>
  <div class="fields">
    <div class="field">
      <p class="name">Username</p>
      <input type="text" placeholder="johndoe" bind:value={$username} />
    </div>
    <div class="field">
      <p class="name">Email address*</p>
      <input
        type="email"
        placeholder="john.doe@gmail.com"
        bind:value={$email}
      />
    </div>
    <div class="field">
      <p class="name">Password</p>
      <div class="duo">
        <input type="password" placeholder="Password" bind:value={$password} />
        <input type="password" placeholder="Confirm" bind:value={$confirm} />
      </div>
    </div>
  </div>
  <p class="disclaimer">
    * You will receive an email with a link to activate your account.
  </p>
</div>
