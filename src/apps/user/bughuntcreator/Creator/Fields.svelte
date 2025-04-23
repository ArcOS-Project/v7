<script lang="ts">
  import type { BugHuntCreatorRuntime } from "../runtime";

  const { process }: { process: BugHuntCreatorRuntime } = $props();
  const { userPreferences: preferences, title, body } = process;
</script>

<div class="fields">
  <div class="field title">
    <p class="caption">Title</p>
    <div class="value">
      <input type="text" placeholder="Short title to give us a summary" bind:value={$title} />
    </div>
  </div>
  <div class="field options">
    <p class="caption">Options</p>
    <div class="value">
      <div class="option">
        <input
          type="checkbox"
          bind:checked={$preferences.appPreferences.BugHunt.sendAnonymously}
          disabled={$preferences.appPreferences.BugHunt.makePublic}
        />
        <span class:disabled={$preferences.appPreferences.BugHunt.makePublic}>Send anonymously</span>
      </div>
      <div class="option">
        <input
          type="checkbox"
          bind:checked={$preferences.appPreferences.BugHunt.makePublic}
          disabled={$preferences.appPreferences.BugHunt.sendAnonymously}
        />
        <span class:disabled={$preferences.appPreferences.BugHunt.sendAnonymously}>Make public</span>
      </div>
      <div class="option">
        <input type="checkbox" bind:checked={$preferences.appPreferences.BugHunt.excludeLogs} />
        <span>Exclude system logs</span>
      </div>
    </div>
  </div>
  <textarea class="body" bind:value={$body} placeholder="Report Body: Provide any particular information about the bug here."
  ></textarea>
  <div class="notice">
    All information you provide in a bug report is treated as confidential and will never be shared with external parties. Select <b
      >Data Privacy</b
    > for more information. Public reports don't include user data.
  </div>
</div>
