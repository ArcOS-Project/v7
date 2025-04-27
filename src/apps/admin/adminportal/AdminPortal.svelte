<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import { onMount, type Component } from "svelte";
  import Sidebar from "./AdminPortal/Sidebar.svelte";
  import type { AdminPortalRuntime } from "./runtime";
  import { AdminPortalPageStore } from "./store";
  import type { AdminPortalPage } from "./types";
  import Spinner from "$lib/Spinner.svelte";
  import StatusBar from "./AdminPortal/StatusBar.svelte";

  const { process }: { process: AdminPortalRuntime } = $props();
  const { currentPage } = process;

  let Page: Component | undefined = $state();
  let pageData = $state<AdminPortalPage>();
  let className = $state("");
  let loading = $state(true);
  let noAccess = $state(false);
  let pageProps = $state<Record<string, any>>({});

  onMount(() => {
    const sub = currentPage.subscribe(async (v) => {
      loading = true;
      noAccess = false;
      Page = undefined;
      pageData = AdminPortalPageStore.get(v);

      if (pageData?.scopes && !process.admin.canAccess(...pageData!.scopes)) {
        loading = false;
        noAccess = true;
      }

      Page = pageData?.content;
      pageProps = pageData?.props ? await pageData.props(process) : {};
      loading = false;
      className = v;
    });

    return () => sub();
  });
</script>

<Sidebar {process} />
<div class="container {className}">
  <CustomTitlebar {process}></CustomTitlebar>
  <div class="page-content">
    {#if loading}
      <div class="loading">
        <Spinner height={32} />
        <p>Loading {pageData?.name}</p>
      </div>
    {:else if noAccess}
      <div class="no-access">
        <span class="lucide icon-ban"></span>
        <h1>Access denied</h1>
        <p>Need {pageData?.scopes?.join(", ")}</p>
      </div>
    {:else if Page}
      <Page {process} data={pageProps} />
    {/if}
  </div>
  {#if pageData}
    <StatusBar {process} {pageData} />
  {/if}
</div>
