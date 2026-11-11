<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { ProfilePictures } from "$ts/images/pfp";
  import DataTableColumn from "./DataTableColumn.svelte";

  export let userId: string | undefined;
  export let fallback = ProfilePictures.undefined;
</script>

<DataTableColumn className="picture-column">
  <ProfilePicture {userId} {fallback} height={24}></ProfilePicture>
</DataTableColumn>
