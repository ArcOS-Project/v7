<script lang="ts">
  import type { MessagingAppRuntime } from "$apps/user/messages/runtime";

  const { process }: { process: MessagingAppRuntime } = $props();
</script>

<div class="search">
  <span class="lucide icon-search"></span>
  <input type="text" placeholder="Search for a message..." />
</div>
