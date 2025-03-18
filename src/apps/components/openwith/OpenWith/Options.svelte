<script lang="ts">
  import { appShortcuts } from "$ts/apps/store";
  import type { AppStorage } from "$types/app";
  import type { FileOpenerResult } from "$types/fs";
  import type { OpenWithRuntime } from "../runtime";
  import Option from "./Options/Option.svelte";

  const { process, handlers: handlers }: { process: OpenWithRuntime; handlers: FileOpenerResult[] } = $props();
  const { viewMode } = process;
</script>

{#if handlers}
  {#if handlers.filter((a) => a.type === "app" && !a.app?.thirdParty).length}
    <section>
      <p class="name">Built-in</p>
      {#each handlers as handler (handler.type + (handler.type === "app" ? handler.app?.id! : handler.handler?.name!))}
        {#if handler.type === "app" && !handler.app?.thirdParty}
          <Option {handler} {process} />
        {/if}
      {/each}
    </section>
  {/if}

  {#if handlers.filter((a) => a.type === "app" && a.app?.thirdParty).length}
    <section>
      <p class="name">Third-Party</p>
      {#each handlers as handler (handler.type + (handler.type === "app" ? handler.app?.id! : handler.handler?.name!))}
        {#if handler.type === "app" && handler.app?.thirdParty}
          <Option {handler} {process} />
        {/if}
      {/each}
    </section>
  {/if}
  {#if handlers.filter((a) => a.type === "handler" && a.handler).length}
    <section>
      <p class="name">Handlers</p>
      {#each handlers as handler (handler.type + (handler.type === "app" ? handler.app?.id! : handler.handler?.name!))}
        {#if handler.type === "handler" && handler.handler}
          <Option {handler} {process} />
        {/if}
      {/each}
    </section>
  {/if}

  {#if !handlers.length}
    <div class="empty">
      <p>Couldn't find any compatible applications!</p>
      <button class="link" onclick={() => ($viewMode = "apps")}> Show apps </button>
    </div>
  {/if}
{/if}
