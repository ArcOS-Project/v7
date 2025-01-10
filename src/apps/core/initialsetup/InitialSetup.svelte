<script lang="ts">
  import type { AppComponentProps } from "$types/app";
  import type { Component } from "svelte";
  import Actions from "./IntialSetup/Actions.svelte";
  import type { InitialSetupRuntime } from "./runtime";

  const { process }: AppComponentProps<InitialSetupRuntime> = $props();
  const { pageNumber, pageButtons, identityInfoValid, pages } = process;

  let PageComponent: Component | undefined = $state();

  pageNumber.subscribe((v) => {
    PageComponent = pages[v || 0];
  });
</script>

<div class="container">
  <div class="content">
    {#if PageComponent}
      <PageComponent />
    {/if}
  </div>
  <Actions {pageNumber} {pageButtons} {identityInfoValid} />
</div>
