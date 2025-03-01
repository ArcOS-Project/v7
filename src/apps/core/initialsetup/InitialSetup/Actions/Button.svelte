<script lang="ts">
  import type { ReadableStore } from "$ts/writable";
  import { onMount } from "svelte";
  import type { PageButton } from "../../types";

  const {
    pageNumber,
    button,
    identityInfoValid,
    actionsDisabled,
  }: {
    pageNumber: ReadableStore<number>;
    button: PageButton;
    identityInfoValid: ReadableStore<boolean>;
    actionsDisabled: ReadableStore<boolean>;
  } = $props();

  let disabled = $state(false);

  async function action() {
    if (!button) return;
    if (button.to !== undefined) {
      $pageNumber = button.to;

      return;
    }

    if (button.action) {
      $actionsDisabled = true;
      return await button.action();
    }

    throw new Error(`No action specified for button "${button.caption}"`);
  }

  async function update() {
    if (!button || !button.disabled) return;

    disabled = await button.disabled();
  }

  onMount(() => {
    const identityInfoUnsubscribe = identityInfoValid.subscribe(update);
    const pageNumberUnsubscribe = pageNumber.subscribe(update);

    if (button && button.disabled) checkDisabled();

    disabled = disabled;

    return () => {
      identityInfoUnsubscribe();
      pageNumberUnsubscribe();
    };
  });

  async function checkDisabled() {
    disabled = (await button?.disabled?.()) || false;
  }
</script>

{#if button}
  <button
    onclick={action}
    class:suggested={button.suggested}
    disabled={disabled || $actionsDisabled}
  >
    {button.caption}
  </button>
{/if}
