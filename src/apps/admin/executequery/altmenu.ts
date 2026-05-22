import type { IExecuteQueryRuntime } from "$interfaces/runtimes/IExecuteQueryRuntime";
import type { ContextMenuItem } from "$types/app";
import { QuerySources, type QueryExpression, type QueryExpressionsType } from "./types";

export function ExecuteQueryAltMenu(runtime: IExecuteQueryRuntime): ContextMenuItem[] {
  return [
    {
      caption: "Query",
      subItems: [
        {
          caption: "Load query...",
          icon: "folder-open",
          action: () => {
            runtime.loadQueryDialog();
          },
        },
        {
          caption: "Save query...",
          icon: "save",
          action: () => {
            runtime.saveQueryDialog();
          },
          disabled: () => !runtime.selectedSource(),
        },
        {
          caption: "Clear query",
          icon: "trash-2",
          action: () => {
            runtime.expressions.set(
              Object.fromEntries(QuerySources.map((s) => [s, [] as QueryExpression[]])) as QueryExpressionsType
            );
            runtime.selectedSource.set("");
          },
        },
        { sep: true },
        {
          caption: "Execute",
          icon: "play",
          action: () => {
            runtime.executeQuery();
          },
          disabled: () => !runtime.selectedSource(),
        },
        { sep: true },
        {
          caption: "Add expression",
          icon: "plus",
          action: () => {
            runtime.addExpression();
          },
        },
      ],
    },
  ];
}
