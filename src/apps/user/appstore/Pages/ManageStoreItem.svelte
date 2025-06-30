<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import { StoreItemIcon } from "$ts/distrib/util";
  import { formatBytes } from "$ts/fs/util";
  import type { StoreItem } from "$types/package";
  import dayjs from "dayjs";
  import type { AppStoreRuntime } from "../runtime";

  const { process, pkg }: { process: AppStoreRuntime; pkg: StoreItem | undefined } = $props();
</script>

{#if pkg}
  <div class="header">
    <img src={StoreItemIcon(pkg)} alt="" />
    <div class="info">
      <h1>
        <span class="name">{pkg.pkg.name}</span>
        <span class="version">v{pkg.pkg.version}</span>
      </h1>
      <p>{pkg.pkg.description}</p>
    </div>
    <button class="suggested" disabled={pkg.blocked || pkg.deprecated}>Update...</button>
  </div>
  {#if pkg.blocked}
    <div class="notice warning">
      <span class="lucide icon-triangle-alert"></span>
      <p>
        This package has been blocked by an ArcOS Administrator! It might violate our rules. You should have received a message in
        your Messages App explaining the verdict. Contact us so that we can unblock your package.
      </p>
    </div>
  {/if}
  <InfoBlock>
    <InfoRow>
      <Segment title="Official">{pkg.official ? "Yes" : "No"}</Segment>
      <Segment title="Blocked">{pkg.official ? "Yes" : "No"}</Segment>
      <Segment title="Deprecated">???</Segment>
      <Segment title="Install count">{pkg.installCount} times</Segment>
      <Segment title="Compressed size">{formatBytes(pkg.size)}</Segment>
    </InfoRow>
    <InfoRow>
      <Segment title="Item Created">{dayjs(pkg.createdAt).format("MMM D YYYY, HH:mm")}</Segment>
      <Segment title="Item Modified">{dayjs(pkg.updatedAt).format("MMM D YYYY, HH:mm")}</Segment>
      <Segment title="Last Updated">{dayjs(pkg.lastUpdated).format("MMM D YYYY, HH:mm")}</Segment>
    </InfoRow>
  </InfoBlock>

  <InfoBlock>
    <InfoRow>
      <Segment title="App ID">{pkg.pkg.appId}</Segment>
      <Segment title="Author">{pkg.pkg.author}</Segment>
      <Segment title="Name">{pkg.pkg.name}</Segment>
      <Segment title="Version">{pkg.pkg.version}</Segment>
    </InfoRow>
    <InfoRow>
      <Segment title="Location">{pkg.pkg.installLocation}</Segment>
      <Segment title="Item ID">{pkg._id}</Segment>
    </InfoRow>
  </InfoBlock>

  <section class="danger-zone">
    <h1>Danger Zone</h1>
    <p>
      Beware! These actions can seriously ruin your day, as they cannot be rolled back. Keep that in mind, and think before you
      act.
    </p>
    <div class="actions">
      <div class="action">
        <div class="info">
          <h1>Deprecate package</h1>
          <p>Mark this package as outdated and unmaintained.</p>
        </div>
        <button onclick={() => process.deprecatePackage(pkg)} disabled={pkg.deprecated}>Deprecate</button>
      </div>
      <div class="action">
        <div class="info">
          <h1>Delete package</h1>
          <p>Completely remove this package from the store</p>
        </div>
        <button onclick={() => process.deletePackage(pkg)}>Delete...</button>
      </div>
    </div>
  </section>
{:else}
  <p class="error-text">ERR_NO_PKG</p>
{/if}
