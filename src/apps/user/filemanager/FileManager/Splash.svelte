<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import { FileManagerIcon } from "$ts/images/apps";
</script>

<div class="splash">
  <img src={FileManagerIcon} alt="" />
  <Spinner height={30} />
</div>
