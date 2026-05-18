<script lang="ts">
  import { MessageBox } from "$ts/util/dialog";
  import { Store } from "$ts/writable";
  import { onMount } from "svelte";
  import type { TotpAuthGuiRuntime } from "./runtime";
  import Input from "./TotpAuthGui/Input.svelte";

  const { process }: { process: TotpAuthGuiRuntime } = $props();

  const code = Store<string>();
  let errored = $state(false);
  let locked = $state(false);

  onMount(() => {
    code.subscribe((v) => {
      if (v?.length !== 6) return;

      verify();
    });
  });

  async function verify() {
    if (!process.validate($code)) return;
    if (locked) return;
    locked = true;

    const unlocked = await process.verifyTotp($code);

    if (!unlocked) {
      errored = true;
      MessageBox(
        {
          title: "ArcOS Security",
          message: "The 2FA code you entered is incorrect! Please try again.",
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
          image: "ErrorIcon",
        },
        process.parentPid,
        true
      );

      $code = "";
    }
  }
</script>

<span class="lucide icon-smartphone"></span>
<h1>Enter code to log in</h1>
<p>Enter the 2FA code from your Authenticator app</p>

{#if !errored}
  <Input bind:code={$code} length={6} />
{:else}
  <div class="inputs"></div>
{/if}

<div class="buttons">
  <button onclick={() => process.cancel()}>Cancel</button>
  <button onclick={() => process.cantAccess()}>I can't access it</button>
</div>
