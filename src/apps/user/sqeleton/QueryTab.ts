import type { ICommandResult } from "$interfaces/ICommandResult";
import type { ISqeletonRuntime } from "$interfaces/runtimes/ISqeletonRuntime";
import { CommandResult } from "$ts/result";
import { PlainTextFileTab } from "$ts/ui/tabs/PlainTextFileTab";
import { UserPaths } from "$ts/user/store";
import type { LoadSaveDialogData } from "../filemanager/types";
import QueryTabPane from "./Sqeleton/QueryTabPane.svelte";

export class SqeletonQueryTab extends PlainTextFileTab<ISqeletonRuntime> {
  public override component = QueryTabPane;
  public override loadSaveData: Omit<LoadSaveDialogData, "returnId"> = {
    title: "Choose where to save this query",
    icon: "SqeletonIcon",
    startDir: UserPaths.Documents,
    extensions: [".sql"],
  };

  public async onLoad(): Promise<ICommandResult> {
    const result = await super.onLoad();

    this.icon.set("database");

    return result;
  }
}
