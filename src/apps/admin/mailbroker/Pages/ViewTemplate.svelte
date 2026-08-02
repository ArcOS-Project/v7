<script lang="ts">
  import type { IMailbrokerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import { Store } from "$ts/writable";
  import type { Mailbroker } from "$types/server/mailbroker";
  import type { Unsubscriber } from "$types/shared/writable";
  import { onDestroy, onMount } from "svelte";
  import TemplateHeader from "./ViewTemplate/TemplateHeader.svelte";
  import TemplateEditor from "./ViewTemplate/TemplateEditor.svelte";

  interface PageProps {
    templateId: string;
  }

  const {
    process,
    data,
    pageProps,
  }: {
    process: IMailbrokerRuntime;
    data: Mailbroker.MailTemplate;
    pageProps: PageProps;
  } = $props();

  let modified = $state<boolean>(false);
  const updateData = Store<Mailbroker.MailTemplateUpdate>({
    fromSuffix: data.fromSuffix,
    htmlContent: data.htmlContent,
    subjectContent: data.subjectContent,
    name: data.name,
    textContent: data.textContent,
  });
  let unsubscriber: Unsubscriber;

  onMount(() => {
    let firstCall = false;

    unsubscriber = updateData.subscribe((v) => {
      if (!firstCall) return (firstCall = true);
      modified = true;
    });
  });

  onDestroy(() => {
    unsubscriber?.();
  });
</script>

<TemplateHeader {process} template={data} {updateData} />
<TemplateEditor {updateData} {process}/>