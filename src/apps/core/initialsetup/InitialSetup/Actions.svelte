<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import { Sleep } from "$ts/sleep";
  import { Store } from "$ts/writable";
  import type { ReadableStore } from "$types/shared/writable";
  import type { PageButtonPage, PageButtons } from "../types";
  import Button from "./Actions/Button.svelte";

  const {
    pageNumber,
    pageButtons,
    identityInfoValid,
    actionsDisabled,
    hide,
  }: {
    pageNumber: ReadableStore<number>;
    pageButtons: PageButtons;
    identityInfoValid: ReadableStore<boolean>;
    actionsDisabled: ReadableStore<boolean>;
    hide: boolean;
  } = $props();

  let buttons = Store<PageButtonPage | undefined>();

  pageNumber.subscribe(async (v) => {
    v ||= 0;

    await Sleep(300);

    $buttons = undefined;

    await Sleep(0);

    $buttons = pageButtons[v];

    if (!$buttons) throw new Error("InitialSetupWizardActions: Out of bounds");
  });
</script>

<ActionBar className="{hide ? 'hide' : ''} actions">
  {#snippet leftContent()}
    {#if $buttons?.left}
      <Button {pageNumber} button={$buttons.left} {identityInfoValid} {actionsDisabled} />
    {/if}
  {/snippet}
  {#snippet rightContent()}
    {#if $buttons && $buttons.previous}
      <Button {pageNumber} button={$buttons.previous} {identityInfoValid} {actionsDisabled} />
    {/if}
    {#if $buttons && $buttons.next}
      <Button {pageNumber} button={$buttons.next} {identityInfoValid} {actionsDisabled} />
    {/if}
  {/snippet}
</ActionBar>
