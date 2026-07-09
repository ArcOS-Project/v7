<script lang="ts">
  import type { IMessageComposerRuntime } from "$interfaces/runtimes/IMessageComposerRuntime";
  import Recipient from "./ToField/Recipient.svelte";

  const { process }: { process: IMessageComposerRuntime } = $props();
  const { recipients, sending } = process;

  let value = $state<string>();

  function onkeydown(e: KeyboardEvent) {
    setTimeout(() => {
      if (!value && e.key === "Backspace") {
        process.removeRecipient($recipients[$recipients.length - 1] || "");
      } else if (value && (e.key === "Enter" || e.key === " " || e.key === "Tab")) {
        if (!$recipients.includes(value.trim())) $recipients.push(value.trim());
        $recipients = $recipients;
        value = "";
      }
    }, 1);
  }

  function onblur() {
    if (value && !$recipients.includes(value.trim())) $recipients.push(value.trim());
    $recipients = $recipients;
    value = "";
  }
</script>

<div class="field to">
  <p class="name">%toField.to%</p>
  <div class="value">
    {#each $recipients as recipient (recipient)}
      <Recipient {recipient} {process} />
    {/each}
    <input type="text" {onkeydown} bind:value placeholder="%toField.enterUsername%" disabled={$sending} {onblur} />
  </div>
</div>
