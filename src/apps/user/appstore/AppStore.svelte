<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import Spinner from "$lib/Spinner.svelte";
  import { Daemon } from "$ts/daemon";
  import { Env } from "$ts/env";
  import { onMount, type Component } from "svelte";
  import Sidebar from "./AppStore/Sidebar.svelte";
  import type { AppStoreRuntime } from "./runtime";
  import { appStorePages } from "./store";

  const { process }: { process: AppStoreRuntime } = $props();
  const { currentPage, pageProps, loadingPage, userPreferences } = process;

  let Page: Component<any> = $state<any>();
  let id = $state<string>("");
  let staticPageProps = $state<Record<string, any>>({});

  onMount(() => {
    currentPage.subscribe((v) => {
      staticPageProps = {};
      const data = appStorePages.get(v);

      if (!data) return (id = "");

      Page = data.content;
      id = v;
      staticPageProps = pageProps();
    });

    pageProps.subscribe((v) => {
      if ($loadingPage) staticPageProps = v;
    });
  });
</script>

{#if $userPreferences.security.enableThirdParty}
  <Sidebar {process} />
  <div class="container">
    <CustomTitlebar {process} />
    <div class="page {id}" class:loading={$loadingPage}>
      {#if $loadingPage}
        <Spinner height={32} />
      {:else if Page}
        <Page {process} {...staticPageProps} />
      {/if}
    </div>
  </div>
{:else}
  <div class="tpa-disabled-notice">
    <CustomTitlebar {process} />
    <div class="content">
      <span class="lucide icon-circle-alert"></span>
      <h1>Third-party apps</h1>
      <p>Sorry! You need to allow third-party apps to use the App Store.</p>

      <button
        class="suggested"
        onclick={() => process.spawnApp("systemSettings", +Env.get("shell_pid"), "apps")}
      >
        Take me there
      </button>
    </div>
  </div>
{/if}
