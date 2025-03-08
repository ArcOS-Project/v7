<script lang="ts">
  import type { UserPreferencesStore } from "$types/user";

  const { userPreferences }: { userPreferences: UserPreferencesStore } = $props();
</script>

<div class="card notes">
  <textarea name="" id="" bind:value={$userPreferences.shell.actionCenter.noteContent}></textarea>
</div>
