<script lang="ts">
  import type { FileManagerRuntime } from "../../runtime";
  import type { Tab } from "../../types";

  const {
    tab,
    uuid,
    process,
  }: { tab: Tab; uuid: string; process: FileManagerRuntime } = $props();
  const { currentTabUuid } = process;
</script>

<div class="tab" class:selected={$currentTabUuid === uuid}>
  <div class="icon">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <img src={tab.icon} alt="" onclick={() => ($currentTabUuid = uuid)} />
    <button
      class="lucide icon-x"
      aria-label="Close Tab"
      onclick={() => process.closeTab(uuid)}
    ></button>
  </div>
  <button class="trigger" onclick={() => ($currentTabUuid = uuid)}>
    {tab.title}
  </button>
</div>
