<script lang="ts">
  import { Sleep } from "$ts/sleep";
  import { Store, type ReadableStore } from "$ts/writable";
  import type { PageButtonPage, PageButtons } from "../types";
  import Button from "./Actions/Button.svelte";

  const {
    pageNumber,
    pageButtons,
    identityInfoValid,
  }: {
    pageNumber: ReadableStore<number>;
    pageButtons: PageButtons;
    identityInfoValid: ReadableStore<boolean>;
  } = $props();

  let buttons = Store<PageButtonPage | undefined>();

  pageNumber.subscribe(async (v) => {
    v ||= 0;

    $buttons = undefined;

    await Sleep(0);

    $buttons = pageButtons[v];

    if (!buttons) throw new Error("Page buttons out of bounds");
  });
</script>

<div class="actions">
  <!-- {#if buttons} -->
  {#if $buttons && $buttons.left}
    <div class="left">
      <Button {pageNumber} button={$buttons.left} {identityInfoValid} />
    </div>
  {/if}
  {#if $buttons && $buttons.previous}
    <Button {pageNumber} button={$buttons.previous} {identityInfoValid} />
  {/if}
  {#if $buttons && $buttons.next}
    <Button {pageNumber} button={$buttons.next} {identityInfoValid} />
  {/if}
  <!-- {/if} -->
</div>
