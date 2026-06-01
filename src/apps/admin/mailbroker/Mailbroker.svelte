<script lang="ts">
  import type { ICommandResult } from "$interfaces/ICommandResult";
  import type { IMailbrokerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import { CommandResult } from "$ts/result";
  import { onMount, type Component } from "svelte";
  import Sidebar from "./Mailbroker/Sidebar.svelte";
  import { mailbrokerPages } from "./store";
  import type { MailbrokerPage } from "./types";

  let { process }: { process: IMailbrokerRuntime } = $props();
  const { currentPage } = process;
  let Page: Component | undefined = $state();
  let pageData = $state<MailbrokerPage>();
  let loading = $state<boolean>(false);
  let data = $state<ICommandResult<Record<string, any>>>();

  onMount(() => {
    const sub = currentPage.subscribe(async (v) => {
      loading = true;
      pageData = mailbrokerPages.get(v);
      data = (await pageData?.data?.(process)) ?? CommandResult.Ok();
      Page = pageData?.content;
      loading = false;
    });

    return () => sub();
  });
</script>

<Sidebar {process} />
<div class="container page-{$currentPage}">
  <CustomTitlebar {process} />
  <div class="page-content">
    {#if loading}
      loading
    {:else if Page && data?.success}
      {@const result = data.result!}
      <Page {process} data={result} />
    {:else}
      error: {data?.errorMessage ?? "Unknown error"}
    {/if}
  </div>
</div>
