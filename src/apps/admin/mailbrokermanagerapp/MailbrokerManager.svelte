<script lang="ts">
  import type { ICommandResult } from "$interfaces/ICommandResult";
  import type { IMailbrokerManagerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import { CommandResult } from "$ts/result";
  import { onMount, type Component } from "svelte";
  import Sidebar from "./MailbrokerManager/Sidebar.svelte";
  import { mailbrokerPages } from "./store";
  import type { MailbrokerPage } from "./types";
  import Spinner from "$lib/Spinner.svelte";

  let { process }: { process: IMailbrokerManagerRuntime } = $props();
  const { currentPage, pageProps } = process;
  let Page: Component | undefined = $state();
  let pageData = $state<MailbrokerPage>();
  let loading = $state<boolean>(false);
  let data = $state<ICommandResult<Record<string, any>>>();

  onMount(() => {
    const sub = currentPage.subscribe(async (v) => {
      loading = true;
      pageData = mailbrokerPages.get(v);
      const canAccess = !pageData?.scopes || process.admin.canAccess(...pageData?.scopes);
      data = canAccess
        ? ((await pageData?.data?.(process, pageProps())) ?? CommandResult.Ok())
        : CommandResult.Error("You're missing the required scopes to access this resource.");

      Page = pageData?.content;
      loading = false;
    });

    return () => sub();
  });
</script>

<Sidebar {process} />
<div class="container">
  <CustomTitlebar {process} />
  <div class="page-content page-{pageData?.name.toLowerCase().replaceAll(' ', '-')}" class:loading>
    {#if loading}
      <Spinner height={32} />
    {:else if Page && data?.success}
      {@const result = data.result!}
      <Page {process} data={result} pageProps={pageProps()} {pageData} />
    {:else}
      <div class="page-load-error">
        <div class="error">
          <span class="lucide icon-circle-x"></span>
          <div>
            <h1>The page failed to load</h1>
            <p>{data?.errorMessage ?? "An unknown error occurred."}</p>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>
