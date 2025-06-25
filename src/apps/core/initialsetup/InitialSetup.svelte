<script lang="ts">
  import { BETA } from "$ts/env";
  import { Sleep } from "$ts/sleep";
  import type { AppComponentProps } from "$types/app";
  import type { Component } from "svelte";
  import Actions from "./InitialSetup/Actions.svelte";
  import type { InitialSetupRuntime } from "./runtime";

  const { process }: AppComponentProps<InitialSetupRuntime> = $props();
  const { pageNumber, pageButtons, identityInfoValid, pages, actionsDisabled, showMainContent } = process;

  let PageComponent: Component | undefined = $state();
  let hide = $state(true);

  pageNumber.subscribe(async (v) => {
    hide = true;

    await Sleep(300);

    PageComponent = pages[v || 0] as Component;

    await Sleep(300);

    hide = false;
  });
</script>

<div class="container" class:show={$showMainContent}>
  <div class="content" class:hide>
    {#if PageComponent}
      <PageComponent {process} />
    {/if}
  </div>
  <Actions {pageNumber} {pageButtons} {identityInfoValid} {actionsDisabled} {hide} />
</div>
{#if BETA}
  <span class="beta-pill">BETA</span>
{/if}
