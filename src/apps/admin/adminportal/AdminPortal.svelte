<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import Spinner from "$lib/Spinner.svelte";
  import { onMount, type Component } from "svelte";
  import Sidebar from "./AdminPortal/Sidebar.svelte";
  import StatusBar from "./AdminPortal/StatusBar.svelte";
  import type { AdminPortalRuntime } from "./runtime";
  import { AdminPortalPageStore } from "./store";
  import type { AdminPortalPage } from "./types";

  const { process }: { process: AdminPortalRuntime } = $props();
  const { currentPage, switchPageProps, ready, windowTitle, windowIcon } = process;

  let Page: Component | undefined = $state();
  let pageData = $state<AdminPortalPage>();
  let className = $state("");
  let loading = $state(true);
  let noAccess = $state(false);
  let pageProps = $state<Record<string, any>>({});

  onMount(() => {
    const sub = currentPage.subscribe(async (v) => {
      $ready = false;
      loading = true;
      noAccess = false;
      Page = undefined;
      className = "";
      pageData = AdminPortalPageStore.get(v);

      if (pageData?.scopes && !process.admin.canAccess(...pageData!.scopes)) {
        loading = false;
        noAccess = true;
        $ready = true;

        return;
      }

      Page = pageData?.content;
      pageProps = pageData?.props ? { ...$switchPageProps, ...(await pageData.props(process)) } : $switchPageProps;
      loading = false;
      className = v;
      $ready = true;
    });

    return () => sub();
  });
</script>

<Sidebar {process} />
<div class="container {className}">
  <CustomTitlebar {process}>
    {#if pageData?.parent}
      <button
        class="lucide icon-arrow-up"
        aria-label="Go back"
        onclick={() => process.switchPage(pageData?.parent!)}
        title="Parent directory"
      ></button>
    {/if}
    <img src={$windowIcon} alt="" />
    <span>{$windowTitle}</span>
  </CustomTitlebar>
  <div class="page-content">
    {#if loading}
      <div class="loading">
        <Spinner height={32} />
        <p>Loading {pageData?.name}</p>
      </div>
    {:else if noAccess && pageData?.scopes}
      <div class="no-access">
        <span class="lucide icon-ban"></span>
        <h1>Access denied</h1>
        <p>Need {process.admin.getMissingScopes(...pageData.scopes).join(", ")}</p>
      </div>
    {:else if Page}
      <Page {process} data={pageProps} />
    {/if}
  </div>
  {#if pageData}
    <StatusBar {process} {pageData} />
  {/if}
</div>
