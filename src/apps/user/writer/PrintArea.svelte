<script lang="ts">
  import type { PrinterLockComponentProps } from "$interfaces/modules/IPrinterKernelModule";
  import type { IWriterRuntime } from "$interfaces/runtimes/IWriterRuntime";

  let { process, lock }: PrinterLockComponentProps<IWriterRuntime>= $props();
  const { buffer } = process;
</script>

bleh --
{$buffer}
