<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import { ErrorIcon } from "$ts/images/dialog";
  import { GoodStatusIcon } from "$ts/images/status";
  import QRCode from "@castlenine/svelte-qrcode";
  import type { TotpSetupGuiRuntime } from "./runtime";

  const { process }: { process: TotpSetupGuiRuntime } = $props();
  const { inputs, digits, url } = process;
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

  async function verify() {
    if (!process.validate()) return;

    const activated = await process.activateTotp();

    if (!activated) {
      MessageBox(
        {
          title: "ArcOS Security",
          message:
            "The 2FA code you entered is incorrect! Please enter the code displayed in your authenticator app to enable two-factor authentication.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          sound: "arcos.dialog.error",
          image: ErrorIcon,
        },
        process.parentPid,
        true,
      );
      $digits = [undefined, undefined, undefined, undefined, undefined, undefined];
    } else {
      MessageBox(
        {
          title: "ArcOS Security",
          message:
            "Two-factor authentication has now been enabled on your account. You must restart for the changes to fully take effect.",
          buttons: [
            { caption: "Restart later", action: () => {} },
            { caption: "Restart now", suggested: true, action: () => process.userDaemon?.restart() },
          ],
          sound: "arcos.dialog.info",
          image: GoodStatusIcon,
        },
        process.parentPid,
        true,
      );
    }
  }
</script>

{#if $url}
  <QRCode data={$url} height={150} width={150} padding={5} />
{/if}

<h1>Scan with an Authenticator app</h1>
<p>Then enter the 2FA code you see on your device:</p>

<div class="inputs">
  {#each $digits as _, i}
    <input type="text" pattern={PATTERN} bind:value={$digits[i]} bind:this={$inputs[i]} onkeydown={(e) => handleKeydown(e, i)} />
  {/each}
</div>

<div class="buttons">
  <button onclick={() => process.closeWindow()}>Cancel</button>
</div>
