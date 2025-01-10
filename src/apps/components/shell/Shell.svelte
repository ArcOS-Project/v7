<script lang="ts">
  import { Wallpapers } from "$ts/wallpaper/store";
  import type { AppComponentProps } from "$types/app";
  import type { ShellRuntime } from "./runtime";

  const { process }: AppComponentProps<ShellRuntime> = $props();
  const { userPreferences } = process;
</script>

(ArcOS shell goes here)

<code>
  {JSON.stringify($userPreferences, null, 2)}
</code>

<select bind:value={$userPreferences.desktop.wallpaper}>
  {#each Object.entries(Wallpapers) as [id, wallpaper]}
    <option value={id}>{wallpaper.name} by {wallpaper.author}</option>
  {/each}
</select>
