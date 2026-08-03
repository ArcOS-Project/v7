<script lang="ts">
  import type { IMailbrokerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import type { Mailbroker } from "$types/server/mailbroker";
  import TemplateListing from "../Mailbroker/TemplateListing.svelte";
  import type { MailbrokerPage } from "../types";

  let {
    data,
    process,
    pageData,
  }: {
    data: Mailbroker.MailTemplate[];
    process: IMailbrokerRuntime;
    pageData: MailbrokerPage;
  } = $props();
</script>

<TemplateListing templates={data} {process} hideNewButton={pageData.name.includes("Deprecated")} />
