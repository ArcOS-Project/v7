<script lang="ts" generics="T extends IBaseService">
  import type { IBaseService, ServiceIdentifier } from "$interfaces/IServiceHost";
  import { Daemon } from "$ts/env";
  import type { Unsubscriber } from "$types/shared/writable";
  import { onDestroy, onMount, type Snippet } from "svelte";

  let {
    id,
    ifActive,
    ifInactive,
    onActivated,
    onDeactivated,
  }: {
    id: ServiceIdentifier;
    ifActive: Snippet<[T]>;
    ifInactive?: Snippet;
    onDeactivated?: () => void;
    onActivated?: (service: T) => void;
  } = $props();

  let _service = $state<T | undefined>();
  let unsub = $state<Unsubscriber>();

  onMount(() => {
    unsub = Daemon?.serviceHost?.Services.subscribe(() => {
      _service = Daemon?.serviceHost?.getService(id);

      if (_service) {
        onActivated?.(_service);
      } else {
        onDeactivated?.();
      }
    });
  });

  onDestroy(() => {
    unsub?.();
  });
</script>

{#if _service}
  {@render ifActive(_service)}
{:else if ifInactive}
  {@render ifInactive()}
{/if}
