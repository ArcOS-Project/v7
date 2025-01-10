<script lang="ts">
  import type { ReadableStore } from "$ts/writable";
  import { onDestroy, onMount } from "svelte";
  import type { PageButton } from "../../types";
  import type { Unsubscriber } from "svelte/store";

  const {
    pageNumber,
    button,
    identityInfoValid,
  }: {
    pageNumber: ReadableStore<number>;
    button: PageButton;
    identityInfoValid: ReadableStore<boolean>;
  } = $props();

  let identityInfoUnsubscribe: Unsubscriber;
  let pageNumberUnsubscribe: Unsubscriber;
  let disabled = $state(false);

  async function action() {
    if (!button) return;
    if (button.to !== undefined) {
      $pageNumber = button.to;

      return;
    }

    if (button.action) return await button.action();

    throw new Error(`No action specified for button "${button.caption}"`);
  }

  async function update() {
    if (!button || !button.disabled) return;

    disabled = await button.disabled();
  }

  onMount(async () => {
    identityInfoUnsubscribe = identityInfoValid.subscribe(update);
    pageNumberUnsubscribe = pageNumber.subscribe(update);

    if (button && button.disabled) disabled = await button.disabled();

    disabled = disabled;
  });

  onDestroy(() => {
    if (identityInfoUnsubscribe) identityInfoUnsubscribe();
    if (pageNumberUnsubscribe) pageNumberUnsubscribe();
  });
</script>

{#if button}
  <button onclick={action} class:suggested={button.suggested} {disabled}>
    {button.caption}
  </button>
{/if}
