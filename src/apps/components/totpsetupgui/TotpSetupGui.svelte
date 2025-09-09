<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import { ErrorIcon } from "$ts/images/dialog";
  import { GoodStatusIcon } from "$ts/images/status";
  import QRCode from "@castlenine/svelte-qrcode";
  import { onMount } from "svelte";
  import Input from "../totpauthgui/TotpAuthGui/Input.svelte";
  import type { TotpSetupGuiRuntime } from "./runtime";

  const { process }: { process: TotpSetupGuiRuntime } = $props();
  const { code, url } = process;
  let errored = $state(false);
  let locked = $state(false);

  onMount(() => {
    code.subscribe((v) => {
      if (v?.length !== 6) return;

      verify();
    });
  });

  async function verify() {
    if (!process.validate()) return;
    if (locked) return;
    locked = true;

    const activated = await process.activateTotp();

    if (!activated) {
      errored = true;
      MessageBox(
        {
          title: "ArcOS Security",
          message:
            "The 2FA code you entered is incorrect! Please enter the code displayed in your authenticator app to enable two-factor authentication.",
          buttons: [
            {
              caption: "Okay",
              action: () => {
                errored = false;
                locked = false;
              },
              suggested: true,
            },
          ],
          sound: "arcos.dialog.error",
          image: ErrorIcon,
        },
        process.parentPid,
        true
      );
      $code = "";
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
        true
      );
    }
  }
</script>

{#if $url}
  <QRCode data={$url} height={150} width={150} padding={5} />
{/if}

<h1>Scan with an Authenticator app</h1>
<p>Then enter the 2FA code you see on your device:</p>

{#if !errored}
  <Input length={6} bind:code={$code} />
{:else}
  <div class="inputs"></div>
{/if}

<div class="buttons">
  <button onclick={() => process.closeWindow()}>Cancel</button>
</div>
