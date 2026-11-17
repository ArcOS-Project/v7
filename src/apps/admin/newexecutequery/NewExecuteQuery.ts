import "$css/apps/admin/newexecutequery.css";
import type { App } from "$types/apps/app";
import NewExecuteQuerySvelte from "./NewExecuteQuery.svelte";
import { NewExecuteQueryRuntime } from "./runtime";

const NewExecuteQuery: App = {
  metadata: {
    name: "Execute Server Query",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: "ArcFindIcon",
    appGroup: "adminTools",
  },
  position: { centered: true },
  size: { w: 1200, h: 800 },
  minSize: { w: 1200, h: 800 },
  maxSize: { w: NaN, h: NaN },
  state: {
    maximized: false,
    minimized: false,
    resizable: true,
    fullscreen: false,
    headless: true,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  assets: {
    runtime: NewExecuteQueryRuntime,
    component: NewExecuteQuerySvelte as any,
  },
  glass: true,
  elevated: true,
  hidden: false,
  core: false,
  overlay: false,
  noSafeMode: false,
  vital: true,
  id: "NewExecuteQuery",
};

export default NewExecuteQuery;
