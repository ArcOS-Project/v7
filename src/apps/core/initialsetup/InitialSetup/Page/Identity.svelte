<script lang="ts">
  import HtmlSpinner from "$lib/HtmlSpinner.svelte";
  import { Sleep } from "$ts/sleep";
  import {
    checkPasswordStrength,
    validateEmail,
    validateUsername,
  } from "$ts/util";
  import { PasswordStrengthCaptions, type PasswordStrength } from "$types/user";
  import type { InitialSetupRuntime } from "../../runtime";

  const { process }: { process: InitialSetupRuntime } = $props();
  const { newUsername, password, confirm, email, fullName } = process;

  let enteredUsername = $state("");
  let enteredEmail = $state("");
  let enteredPassword = $state("");
  let usernameCheckTimeout: NodeJS.Timeout | undefined;
  let emailCheckTimeout: NodeJS.Timeout | undefined;
  let usernameInvalid = $state(false);
  let usernameTaken = $state(false);
  let usernameAvailable = $state(false);
  let emailInvalid = $state(false);
  let emailTaken = $state(false);
  let emailAvailable = $state(false);
  let checkingUsernameAvailability = $state(false);
  let checkingEmailAvailability = $state(false);
  let passwordInvalid = $state(false);
  let passwordStrength = $state<PasswordStrength>("tooWeak");

  async function onUsernameKeydown() {
    await Sleep(1);
    checkingUsernameAvailability = true;

    if (usernameCheckTimeout) clearTimeout(usernameCheckTimeout);

    usernameCheckTimeout = setTimeout(async () => {
      $newUsername = "";

      if (!enteredUsername) {
        checkingUsernameAvailability = false;
        usernameTaken = false;
        usernameAvailable = false;
        $newUsername = "";
        clearTimeout(usernameCheckTimeout);

        return;
      }

      usernameInvalid = !validateUsername(enteredUsername);

      if (usernameInvalid) {
        checkingUsernameAvailability = false;
        usernameTaken = false;
        usernameAvailable = false;
        return;
      }

      const available =
        await process.server.checkUsernameAvailability(enteredUsername);

      if (available) $newUsername = enteredUsername;

      usernameTaken = !available;
      usernameAvailable = available;
      checkingUsernameAvailability = false;
    }, 1000);
  }

  async function onEmailKeydown() {
    await Sleep(1);

    checkingEmailAvailability = true;

    if (emailCheckTimeout) clearTimeout(emailCheckTimeout);

    emailCheckTimeout = setTimeout(async () => {
      $email = "";

      if (!enteredEmail) {
        checkingEmailAvailability = false;
        emailTaken = false;
        emailAvailable = false;
        emailInvalid = false;
        $email = "";
        clearTimeout(emailCheckTimeout);

        return;
      }

      emailInvalid = !validateEmail(enteredEmail);

      if (emailInvalid) {
        checkingEmailAvailability = false;
        emailTaken = false;
        emailAvailable = false;
        return;
      }

      const available =
        await process.server.checkEmailAvailability(enteredEmail);

      if (available) $email = enteredEmail;

      emailTaken = !available;
      emailAvailable = available;
      checkingEmailAvailability = false;
    }, 1000);
  }

  async function onPasswordKeydown() {
    await Sleep(1);

    if (!enteredPassword) {
      passwordStrength = "tooWeak";
      passwordInvalid = false;
      $password = "";
      return;
    }

    passwordStrength = checkPasswordStrength(enteredPassword)
      .value as PasswordStrength;
    passwordInvalid =
      passwordStrength === "tooWeak" || passwordStrength === "weak";

    if (!passwordInvalid) $password = enteredPassword;
  }

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
      <p class="name">Full Name</p>
      <input type="text" placeholder="John Doe" bind:value={$fullName} />
    </div>
    <div class="field username">
      <p class="name">Username</p>
      <input
        type="text"
        placeholder="johndoe"
        bind:value={enteredUsername}
        oninput={onUsernameKeydown}
        class:taken={usernameTaken || usernameInvalid}
        class:available={usernameAvailable}
      />
      <HtmlSpinner
        height={16}
        stopped={!checkingUsernameAvailability}
        thickness={2}
      />
    </div>
    <div class="field email">
      <p class="name">Email address*</p>
      <input
        type="email"
        placeholder="john.doe@gmail.com"
        bind:value={enteredEmail}
        oninput={onEmailKeydown}
        class:taken={emailTaken || emailInvalid}
        class:available={emailAvailable}
      />
      <HtmlSpinner
        height={16}
        stopped={!checkingEmailAvailability}
        thickness={2}
      />
    </div>
    <div class="field">
      <p class="name">Password</p>
      <div class="duo">
        <input
          type="password"
          placeholder="Password"
          bind:value={enteredPassword}
          oninput={onPasswordKeydown}
          class:taken={passwordInvalid}
        />
        <input
          type="password"
          placeholder="Confirm"
          bind:value={$confirm}
          class:taken={passwordInvalid}
        />
      </div>
    </div>
    {#if usernameTaken && emailTaken}
      <p class="error">Username and email address are both taken!</p>
    {:else if usernameTaken}
      <p class="error">Username is already taken!</p>
    {:else if emailTaken}
      <p class="error">Email is already taken!</p>
    {/if}
    {#if emailInvalid && usernameInvalid}
      <p class="error">Username and email address are both invalid!</p>
    {:else if usernameInvalid}
      <p class="error">Username is invalid!</p>
    {:else if emailInvalid}
      <p class="error">Email address is invalid!</p>
    {/if}
    {#if passwordInvalid}
      <p class="error">
        Password is {PasswordStrengthCaptions[passwordStrength]}!
      </p>
    {/if}
  </div>
  <p class="disclaimer">
    * You will receive an email with a link to activate your account.
  </p>
</div>
