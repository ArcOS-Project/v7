<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import { formatBytes } from "$ts/kernel/mods/fs/util";
  import type { StoreItem } from "$types/package";
  import dayjs from "dayjs";
  import InstalledBy from "./Details/InstalledBy.svelte";

  const { item, process }: { item: StoreItem; process: AdminPortalRuntime } = $props();
</script>

<div class="details">
  <InfoBlock>
    <InfoRow>
      <Segment title="Official">{item.official ? "Yes" : "No"}</Segment>
      <Segment title="Blocked">{item.official ? "Yes" : "No"}</Segment>
      <Segment title="Deprecated">{item.deprecated ? "Yes" : "No"}</Segment>
      <Segment title="Install count">{item.installCount} times</Segment>
      <Segment title="Compressed size">{formatBytes(item.size)}</Segment>
    </InfoRow>
    <InfoRow>
      <Segment title="Item Created">{dayjs(item.createdAt).format("MMM D YYYY, HH:mm")}</Segment>
      <Segment title="Item Modified">{dayjs(item.updatedAt).format("MMM D YYYY, HH:mm")}</Segment>
      <Segment title="Last Updated">{dayjs(item.lastUpdated).format("MMM D YYYY, HH:mm")}</Segment>
    </InfoRow>
  </InfoBlock>
  <InfoBlock>
    <InfoRow>
      <Segment title="App ID">{item.pkg.appId}</Segment>
      <Segment title="Author">{item.pkg.author}</Segment>
      <Segment title="Name">{item.pkg.name}</Segment>
      <Segment title="Version">{item.pkg.version}</Segment>
    </InfoRow>
    <InfoRow>
      <Segment title="Location">{item.pkg.installLocation}</Segment>
      <Segment title="Item ID">{item._id}</Segment>
    </InfoRow>
    <InfoRow>
      <Segment title="Icon?">{item.pkg.store?.image ? "Provided" : "No"}</Segment>
      <Segment title="Banner?">{item.pkg.store?.banner ? "Provided" : "No"}</Segment>
      <Segment title="Screenshots?">{item.pkg.store?.screenshots?.length ? "Provided" : "None"}</Segment>
    </InfoRow>
  </InfoBlock>
  <InstalledBy {process} {item} />
</div>
