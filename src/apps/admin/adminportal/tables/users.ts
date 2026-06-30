import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
import { CommandResult } from "$ts/result";
import { TableDataSource } from "$ts/ui/tables";
import { sortByKey } from "$ts/util";
import type { AdminUsersQueryOptions } from "$types/server/admin";
import type { HeaderContent, ITableDataSource } from "$types/shared/tables";
import type { ExpandedUserInfo } from "$types/user";

export function AdminUsersTableDataSource(
  process: IAdminPortalRuntime
): typeof ITableDataSource<ExpandedUserInfo, AdminUsersQueryOptions> {
  class DataSource extends TableDataSource<ExpandedUserInfo, AdminUsersQueryOptions>() {
    Header: HeaderContent<ExpandedUserInfo> = [
      {
        caption: "",
      },
      {
        caption: "Username",
        sortable: true,
        sort: (data, reverse) => sortByKey(data, "username", reverse),
        sortDefault: true,
        columnPercentage: 35,
      },
      {
        caption: "Email",
        sortable: true,
        sort: (data, reverse) => sortByKey(data, "email", reverse),
        columnPercentage: 40,
      },
      {
        caption: "Created",
        sortable: true,
        sort: (data, reverse) => sortByKey(data, "createdAt", reverse),
        columnPercentage: 20,
      },
      {
        caption: "Approved",
        sortable: true,
        sort: (data, reverse) => sortByKey(data, "approved", reverse),
        columnPercentage: 1,
      },
      {
        caption: "Admin",
        sortable: true,
        sort: (data, reverse) => sortByKey(data, "admin", reverse),
        columnPercentage: 1,
      },
      {
        caption: "System",
        sortable: true,
        sort: (data, reverse) => sortByKey(data, "isSystem", reverse),
        columnPercentage: 1,
      },
    ];
    SortModePreference = "AdminPortalUsersTable";
    canSelect = true;

    async FetchData(): Promise<ICommandResult<ExpandedUserInfo[]>> {
      return CommandResult.Ok((await process.admin.queryUsers(this.Config ?? {})).result?.items ?? []);
    }

    OnRowSubmit(item: ExpandedUserInfo): void {
      process.switchPage("viewUser", { user: item });
    }
  }

  return DataSource;
}
