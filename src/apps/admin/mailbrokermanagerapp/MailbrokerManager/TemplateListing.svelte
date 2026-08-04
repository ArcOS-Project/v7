<script lang="ts">
  import type { IMailbrokerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
  import { Plural } from "$ts/util";
  import { Store } from "$ts/writable";
  import type { Mailbroker } from "$types/server/mailbroker";
  import type { Unsubscriber } from "$types/shared/writable";
  import { onDestroy, onMount } from "svelte";
  import ListingOption from "./TemplateListing/ListingOption.svelte";

  const {
    process,
    templates,
    hideNewButton = false,
  }: {
    process: IMailbrokerRuntime;
    templates: Mailbroker.MailTemplate[];
    hideNewButton?: boolean;
  } = $props();
  const searchValue = Store<string>("");

  let filteredTemplates = $state<Mailbroker.MailTemplate[]>(templates);
  let unsubscribe: Unsubscriber;

  onMount(() => {
    unsubscribe = searchValue.subscribe((v) => {
      const query = v.toLowerCase().trim();

      if (!query) {
        filteredTemplates = templates;
        return;
      }

      filteredTemplates = templates.filter((template) => {
        if (template.name.toLowerCase().includes(query)) return true;
        if (template.fromSuffix.toLowerCase().includes(query)) return true;
        if (template.subjectContent.toLowerCase().includes(query)) return true;
        if (template.textContent.toLowerCase().includes(query)) return true;
        if (template._id.toLowerCase().includes(query)) return true;

        return false;
      });
    });
  });

  onDestroy(() => {
    unsubscribe?.();
  });
</script>

<div class="template-listing">
  <div class="listing-header">
    <h1>{filteredTemplates.length} {Plural("template", filteredTemplates.length)}</h1>
    <div class="search-bar">
      <span class="lucide icon-search"> </span>
      <input type="text" bind:value={$searchValue} placeholder="Search templates" />
    </div>
    {#if !hideNewButton && process.admin.canAccess(AdminScopes.adminMailbrokerTemplatesWrite)}
      <button class="suggested new-template" onclick={() => process.switchPage("newTemplate")}>
        <span>New...</span>
      </button>
    {/if}
  </div>

  <div class="templates">
    {#each filteredTemplates as template (template._id)}
      <ListingOption {process} {template} />
    {/each}

    {#if !filteredTemplates.length}
      <p class="empty-notice">
        <span>There are no templates that match the criteria.</span>
      </p>
    {/if}
  </div>
</div>
