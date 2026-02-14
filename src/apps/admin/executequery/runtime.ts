import type { FileManagerRuntime } from "$apps/user/filemanager/runtime";
import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/util/dialog";
import { Fs } from "$ts/env";
import { getJsonHierarchy } from "$ts/util/hierarchy";
import { tryJsonParse, tryJsonStringify } from "$ts/util/json";
import { AdminBootstrapper } from "$ts/servicehost/services/AdminBootstrapper";
import { Daemon } from "$ts/daemon";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { getParentDirectory } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { App, AppProcessData } from "$types/app";
import type { ExpandedUserInfo } from "$types/user";
import { ExecuteQueryAltMenu } from "./altmenu";
import LoadQueryOverlayApp from "./LoadQuery/LoadQuery";
import SaveQueryOverlayApp from "./SaveQuery/SaveQuery";
import { QueryDesignations, QuerySources } from "./store";
import type { QueryDesignationsType, QueryExpression, QueryExpressionsType, QuerySourceKey, SavedQuery } from "./types";

export class ExecuteQueryRuntime extends AppProcess {
  result = Store<any[]>([]);
  dataSource = Store<any[]>([]);
  selectedSource = Store<QuerySourceKey>();
  loading = Store<boolean>(false);
  truncated = Store<boolean>(false);
  totalCount = Store<number>(0);
  columns = Store<string[]>([]);
  columnTypes = Store<string[]>([]);
  expressions = Store<QueryExpressionsType>(
    Object.fromEntries(QuerySources.map((s) => [s, [] as QueryExpression[]])) as QueryExpressionsType
  );
  admin: AdminBootstrapper;
  users: ExpandedUserInfo[] = [];
  readonly queryDesignations: QueryDesignationsType = QueryDesignations(this);
  protected override overlayStore: Record<string, App> = {
    loadQuery: LoadQueryOverlayApp,
    saveQuery: SaveQueryOverlayApp,
  };

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
    this.admin = Daemon.serviceHost?.getService<AdminBootstrapper>("AdminBootstrapper")!;
    this.altMenu.set(ExecuteQueryAltMenu(this));
  }

  async start() {
    this.users = await this.admin.getAllUsers();

    this.selectedSource.subscribe((v) => this.updateResult(v));
  }

  async stop() {}
  async render() {}

  //#endregion LIFECYCLE
  //#region REFRESH

  async updateResult(key: QuerySourceKey) {
    const designation = this.queryDesignations[key];

    if (!designation) return;

    if (designation.scopes && !this.admin.canAccess(...designation.scopes)) {
      this.noAccessToSource();
      return;
    }

    this.loading.set(true);

    const dataSource = await designation.obtainer();

    this.result.set([]);
    this.dataSource.set(dataSource);
    this.columns.set(this.findMostColumnsOf(dataSource));

    this.updateColumnTypes();
    this.loading.set(false);
  }

  updateColumnTypes(items: any[] = this.dataSource()) {
    const columns = this.columns();

    if (!columns) return;

    const result: string[] = [];
    const testSubject = items[0];

    for (const column of columns) {
      const value = testSubject[column];
      result.push(Array.isArray(value) ? "array" : typeof value);
    }

    this.columnTypes.set(result);
  }

  //#endregion
  //#region EXECUTION
  async executeQuery() {
    const expressions = this.expressions();
    const selectedSource = this.selectedSource();

    this.truncated.set(false);

    let queryResult = this.dataSource().filter((item) => {
      for (const expression of expressions[selectedSource]) {
        const result = this.evaluateExpression(item, expression);

        if (result === false) return false;
      }

      return true;
    });
    this.totalCount.set(queryResult.length);

    if (queryResult.length > 1000) {
      this.truncated.set(true);

      queryResult.length = 1000;
    }

    this.result.set(queryResult);
  }

  evaluateExpression(item: any, expression: QueryExpression): boolean {
    const { comparisonType, comparisonValue, columnName } = expression;

    if (
      columnName === undefined ||
      comparisonType === undefined ||
      (comparisonValue === undefined && !comparisonType.includes("defined"))
    )
      return true;

    const columns = this.columns();
    const columnTypes = this.columnTypes();
    const columnIndex = columns.indexOf(columnName);
    const value = item[columnName];
    const valueIsObject = columnTypes[columnIndex] === "object";

    switch (comparisonType) {
      case "is equal to":
        return this.comparison_isEqualTo(value, expression, valueIsObject);
      case "is not equal to":
        return this.comparison_isNotEqualTo(value, expression, valueIsObject);
      case "includes":
        return this.comparison_includes(value, expression, valueIsObject);
      case "does not include":
        return this.comparison_doesNotInclude(value, expression, valueIsObject);
      case "is defined":
        return this.comparison_isDefined(value);
      case "is not defined":
        return this.comparison_isNotDefined(value);
      case "is boolean":
        return this.comparison_isBoolean(value, expression);
      case "is less than":
        return this.comparison_isLessThan(value, expression);
      case "is less than or equal to":
        return this.comparison_isLessThanOrEqualTo(value, expression);
      case "is greater than":
        return this.comparison_isGreaterThan(value, expression);
      case "is greater than or equal to":
        return this.comparison_isGreaterThanOrEqualTo(value, expression);
    }

    return false;
  }

  comparison_isEqualTo(value: any, { comparisonValue, hierarchyValue }: QueryExpression, valueIsObject = false): boolean {
    if (valueIsObject) {
      return getJsonHierarchy(value, comparisonValue as string) == hierarchyValue;
    } else {
      return value == tryJsonParse(comparisonValue);
    }
  }

  comparison_isNotEqualTo(value: any, { comparisonValue, hierarchyValue }: QueryExpression, valueIsObject = false): boolean {
    if (valueIsObject) {
      return getJsonHierarchy(value, comparisonValue as string) != hierarchyValue;
    } else {
      return value != tryJsonParse(comparisonValue);
    }
  }

  comparison_includes(value: any, { comparisonValue, hierarchyValue }: QueryExpression, valueIsObject = false) {
    if (!comparisonValue) return true;

    const valueStr = tryJsonStringify(value, 0);

    if (Array.isArray(value)) {
      return value.includes(comparisonValue);
    } else if (valueIsObject) {
      return getJsonHierarchy(value, comparisonValue as string)?.includes?.(hierarchyValue?.toString().toLowerCase());
    } else {
      return valueStr.toLowerCase().includes(comparisonValue.toString().toLowerCase());
    }
  }

  comparison_doesNotInclude(value: any, { comparisonValue, hierarchyValue }: QueryExpression, valueIsObject = false) {
    if (!comparisonValue) return true;

    const valueStr = tryJsonStringify(value, 0);

    if (Array.isArray(value)) {
      return !value.includes(comparisonValue);
    } else if (valueIsObject) {
      return !getJsonHierarchy(value, comparisonValue as string)?.includes?.(hierarchyValue?.toString().toLowerCase());
    } else {
      return !valueStr.toLowerCase().includes(comparisonValue.toString().toLowerCase());
    }
  }

  comparison_isDefined(value: any) {
    return value !== null && value !== undefined;
  }

  comparison_isNotDefined(value: any) {
    return value === null || value === undefined;
  }

  comparison_isBoolean(value: any, { comparisonValue }: QueryExpression) {
    return !!value === Boolean(comparisonValue);
  }

  comparison_isLessThan(value: any, { comparisonValue }: QueryExpression) {
    return Number.isNaN(+value) || Number.isNaN(+comparisonValue!) ? false : comparisonValue! > value;
  }

  comparison_isLessThanOrEqualTo(value: any, { comparisonValue }: QueryExpression) {
    return Number.isNaN(+value) || Number.isNaN(+comparisonValue!) ? false : comparisonValue! >= value;
  }

  comparison_isGreaterThan(value: any, { comparisonValue }: QueryExpression) {
    return Number.isNaN(+value) || Number.isNaN(+comparisonValue!) ? false : comparisonValue! < value;
  }

  comparison_isGreaterThanOrEqualTo(value: any, { comparisonValue }: QueryExpression) {
    return Number.isNaN(+value) || Number.isNaN(+comparisonValue!) ? false : comparisonValue! <= value;
  }

  //#endregion
  //#region ACTIONS

  duplicateExpression(index: number) {
    const selectedSource = this.selectedSource();

    this.expressions.update((expressions) => {
      const sourceExpression = expressions[selectedSource][index];
      if (!sourceExpression) return expressions;

      expressions[selectedSource].push({ ...JSON.parse(JSON.stringify(sourceExpression)) });
      return expressions;
    });
  }

  deleteExpression(index: number) {
    const selectedSource = this.selectedSource();

    this.expressions.update((expressions) => {
      const sourceExpression = expressions[selectedSource][index];
      if (!sourceExpression) return expressions;

      expressions[selectedSource].splice(index, 1);

      return expressions;
    });
  }

  addExpression() {
    this.expressions.update((v) => {
      v[this.selectedSource()].push({
        columnName: undefined,
        comparisonType: undefined,
        comparisonValue: undefined,
      });

      return v;
    });
  }

  async exportResults() {
    const [path] = await Daemon.files!.LoadSaveDialog({
      title: "Choose where to save the results",
      icon: this.app.data.metadata.icon,
      startDir: "A:/",
      isSave: true,
      extensions: [".json"],
      saveName: `query-export-${Date.now()}`,
    });

    if (!path) return;

    await Fs.writeFile(path, textToBlob(JSON.stringify(this.result(), null, 2)), undefined, false);

    const proc = await Daemon.spawn?.spawnApp<FileManagerRuntime>("fileManager", this.parentPid, getParentDirectory(path));

    proc?.selection.set([path]);
  }

  //#endregion
  //#region LOAD/SAVE

  async loadQueryDialog() {
    return await this.spawnOverlay("loadQuery", this);
  }

  async saveQueryDialog() {
    return await this.spawnOverlay("saveQuery", this);
  }

  async loadQueryList(): Promise<string[]> {
    const files = await Fs.readDir("A:/Queries");
    const result: string[] = files?.files?.map(({ name }) => name) || [];

    return result;
  }

  async saveQuery(name: string, data: QueryExpressionsType = this.expressions()) {
    await Fs.writeFile(
      this.normalizeQueryPath(name),
      textToBlob(
        JSON.stringify(
          {
            expressions: data,
            selectedSource: this.selectedSource(),
          },
          null,
          2
        )
      ),
      undefined,
      false
    );
  }

  async loadQuery(name: string) {
    const content = await Fs.readFile(this.normalizeQueryPath(name));
    if (!content) return false;

    const json = tryJsonParse<SavedQuery>(arrayBufferToText(content));
    if (!json || typeof json === "string") return false;

    this.selectedSource.set(json.selectedSource);
    this.expressions.set(json.expressions);

    return true;
  }

  async deleteQuery(name: string) {
    return await Fs.deleteItem(this.normalizeQueryPath(name));
  }

  normalizeQueryPath(name: string) {
    return `A:/Queries/${name.toLowerCase().replaceAll(/[\/\. ]/g, "-")}.json`;
  }

  //#endregion
  //#region ERROR

  noAccessToSource() {
    MessageBox(
      {
        title: "Inaccessible",
        message:
          "The datasource you've selected isn't available on your account. You're missing scopes to access this datasource, so the result will always be empty.",
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
        sound: "arcos.dialog.warning",
        image: "WarningIcon",
      },
      this.pid,
      true
    );
  }

  //#endregion
  //#region UTILS

  findMostColumnsOf(input: any[]): string[] {
    const columns = input.map((i) => Object.keys(i)) as string[][];
    const lengths = columns.map((i) => i.length);

    let maxLength = 0;
    let highestIndex = -1;

    for (let i = 0; i < lengths.length; i++) {
      const length = lengths[i];

      if (length > maxLength) {
        maxLength = length;
        highestIndex = i;
      }
    }

    return columns[highestIndex];
  }

  //#endregion
}
