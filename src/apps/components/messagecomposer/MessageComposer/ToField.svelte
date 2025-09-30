<script lang="ts">
  import type { MessageComposerRuntime } from "../runtime";

  const { process }: { process: MessageComposerRuntime } = $props();
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
    {#each $recipients as recipient}
      <div class="recipient">
        <span>{recipient}</span>
        <button
          class="lucide icon-x"
          onclick={() => process.removeRecipient(recipient)}
          aria-label="%toField.removeRecipient({recipient})%"
          disabled={$sending}
          title="%toField.removeRecipient({recipient})%"
        ></button>
      </div>
    {/each}
    <input type="text" {onkeydown} bind:value placeholder="%toField.enterUsername%" disabled={$sending} {onblur} />
  </div>
</div>
