<script lang="ts">
  import type { UserPreferencesStore } from "$types/user";

  const { userPreferences }: { userPreferences: UserPreferencesStore } =
    $props();

  let hex = $state("70D6FF");
  let picker: HTMLInputElement;

  function openPicker() {
    picker.click();
  }

  userPreferences.subscribe((v) => {
    if (v.desktop.accent !== hex) hex = v.desktop.accent;
  });

  function pickerInput() {
    hex = picker.value.replace("#", "").toUpperCase();
    $userPreferences.desktop.accent = hex;
  }
</script>

<div class="right">
  <button
    class="accent-circle"
    onclick={openPicker}
    style="background-color:#{hex};"
    aria-label="Change accent color"
  ></button>
  <input
    type="color"
    bind:this={picker}
    class="picker no-display"
    oninput={pickerInput}
    value="#{hex}"
  />
</div>
