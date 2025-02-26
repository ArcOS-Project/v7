<script lang="ts">
  import { isPopulatable } from "$ts/apps/util";
  import type { AppStorage } from "$types/app";
  import type { OpenWithRuntime } from "../runtime";
  import Option from "./Options/Option.svelte";

  const { process, apps }: { process: OpenWithRuntime; apps: AppStorage } =
    $props();
</script>

{#if apps}
  {#if apps.filter((a) => !a.thirdParty).length}
    <section>
      <p class="name">Built-in</p>
      {#each apps as app}
        {#if !app.thirdParty}
          <Option {app} {process} />
        {/if}
      {/each}
    </section>
  {/if}

  {#if apps.filter((a) => a.thirdParty).length}
    <section>
      <p class="name">Third-Party</p>
      {#each apps as app}
        {#if app.thirdParty}
          <Option {app} {process} />
        {/if}
      {/each}
    </section>
  {/if}
{/if}
