<script lang="ts">
  import type { IAppProcess } from "$interfaces/IAppProcess";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import { Daemon } from "$ts/env";
  import { MessageBox } from "$ts/util/dialog";

  let { process }: { process: IAppProcess } = $props();

  let title = $state<string>();
  let message = $state<string>();
  let loading = $state<boolean>(false);

  async function send() {
    loading = true;
    const result = await Daemon.helpers?.submitBetaFeedback(title!, message!);

    if (!result?.success) {
      MessageBox(
        {
          title: "Something went wrong",
          message: `The beta feedback couldn't be sent. ${result?.errorMessage ?? "Unknown failure"}`,
          image: "BadStatusIcon",
          sound: "arcos.dialog.error",
          buttons: [
            {
              caption: "Retry",
              action: () => send(),
            },
            {
              caption: "Okay",
              action: () => {
                loading = false;
              },
              suggested: true,
            },
          ],
        },
        process.pid,
        true
      );
      return;
    }

    MessageBox(
      {
        title: "Thank you!",
        message: `The feedback has been submitted to the server. If we have any questions, we'll be in touch via the Messages app.`,
        image: "GoodStatusIcon",
        sound: "arcos.dialog.info",
        buttons: [
          {
            caption: "Okay",
            action: () => {
              process.closeWindow();
            },
            suggested: true,
          },
        ],
      },
      process.pid,
      true
    );
  }
</script>

<div class="top">
  <input type="text" placeholder="Title..." bind:value={title} />
  <textarea placeholder="Message..." id="" bind:value={message}></textarea>
</div>
<ActionBar>
  {#snippet rightContent()}
    <ActionButton onclick={() => process.closeWindow()}>Cancel</ActionButton>
    <ActionButton suggested disabled={!title || !message} {loading} onclick={send}>Send</ActionButton>
  {/snippet}
</ActionBar>
