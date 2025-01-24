<script lang="ts">
  import type { InitialSetupRuntime } from "../../runtime";

  const { process }: { process: InitialSetupRuntime } = $props();
  const { newUsername, password, confirm, email } = process;

  // TODO: username validation for incorrect characters and profanity on both the client and server sides:
  //        - client for UX: user feedback to indicate a problem with their chosen username
  //        - server: check to make sure the user isn't trying to bypass the preamble limits set by the client
  // TODO: username availability endpoint to see if the username is available before the user clicks 'Continue'
  // TODO: for the username validation, send the necessary validation options
  //       from the server to the client to make sure they always match up.
</script>

<div class="form-page identity">
  <h1>Your ArcOS Identity</h1>
  <p class="subtitle">
    We'll use this information to create your ArcOS account.
  </p>
  <div class="fields">
    <div class="field">
      <p class="name">Username</p>
      <input type="text" placeholder="johndoe" bind:value={$newUsername} />
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
