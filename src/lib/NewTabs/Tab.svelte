<script lang="ts" generics="A extends IAppProcess = IAppProcess, R extends IBaseTab<A> = IBaseTab<A>, T extends ITabHandler<A, R> = ITabHandler<A, R>">
  import type { IAppProcess } from '$interfaces/IAppProcess';
  import type { IBaseTab, ITabHandler } from '$interfaces/ITabHandler';

  export let handler: T;
  export let tab: R;
  export let pinned = false;
  export let temporary = false;
</script> 