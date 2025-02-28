<script lang="ts">
  import type { AppStorage } from "$types/app";
  import type { OpenWithRuntime } from "../runtime";
  import Option from "./Options/Option.svelte";

  const { process, apps }: { process: OpenWithRuntime; apps: AppStorage } =
    $props();
  const { viewMode } = process;
</script>

{#if apps}
  {#if apps.filter((a) => !a.thirdParty).length}
    <section>
      <p class="name">Built-in</p>
      {#each apps as app (app.id + app.originId)}
        {#if !app.thirdParty}
          <Option {app} {process} />
        {/if}
      {/each}
    </section>
  {/if}

  {#if apps.filter((a) => a.thirdParty).length}
    <section>
      <p class="name">Third-Party</p>
      {#each apps as app (app.id + app.originId)}
        {#if app.thirdParty}
          <Option {app} {process} />
        {/if}
      {/each}
    </section>
  {/if}
  {#if !apps.length}
    <div class="empty">
      <p>Couldn't find any compatible applications!</p>
      <button class="link" onclick={() => ($viewMode = "apps")}>
        Show apps
      </button>
    </div>
  {/if}
{/if}
