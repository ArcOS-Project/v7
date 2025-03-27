<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import { ErrorIcon } from "$ts/images/dialog";
  import { onMount } from "svelte";
  import type { TotpAuthGuiRuntime } from "./runtime";

  const { process }: { process: TotpAuthGuiRuntime } = $props();
  const { inputs, digits } = process;
  const PATTERN = "[0-9]{1}";

  function handleKeydown(e: KeyboardEvent, i: number) {
    const target = e.target as HTMLInputElement;

    if (!target.value && e.key === "Backspace") {
      $inputs[i - 1]?.focus();
      $inputs[i - 1]?.select();
    }

    setTimeout(() => {
      if (target.value.length === 1) {
        $inputs[i + 1]?.focus();
        $inputs[i + 1]?.select();
      }

      verify();
    }, 10);
  }

  onMount(() => {
    setTimeout(() => {
      $inputs[0]?.focus();
    }, 200);
  });

  async function verify() {
    if (!process.validate()) return;

    const unlocked = await process.verifyTotp();

    if (!unlocked) {
      MessageBox(
        {
          title: "ArcOS Security",
          message: "The 2FA code you entered is incorrect! Please try again.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          sound: "arcos.dialog.error",
          image: ErrorIcon,
        },
        process.parentPid,
        true,
      );
      $digits = [undefined, undefined, undefined, undefined, undefined, undefined];
    }
  }
</script>

<span class="lucide icon-smartphone"></span>
<h1>Enter code to log in</h1>
<p>Enter the 2FA code from your Authenticator app</p>

<div class="inputs">
  {#each $digits as _, i}
    <input type="text" pattern={PATTERN} bind:value={$digits[i]} bind:this={$inputs[i]} onkeydown={(e) => handleKeydown(e, i)} />
  {/each}
</div>

<div class="buttons">
  <button onclick={() => process.cancel()}>Cancel</button>
  <button onclick={() => process.cantAccess()}>I can't access it</button>
</div>
