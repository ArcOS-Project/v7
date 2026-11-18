import { __Console__ } from "$ts/console";

export const ASCII_ART = [
  "  ___                      _      ",
  " / __| __ _ __ _ _ _  _ __| |__ _ ",
  " \\__ \\/ _` / _| '_| || / _` / _` |",
  " |___/\\__,_\\__|_|  \\_,_\\__,_\\__,_|",
];
export const LINES = [
  ...ASCII_ART,
  "",
  "PROJECT: ReArc - The reimagination of ArcOS, known as Sacruda. © 2025, 2026, 2027 IzKuipers",
  "",
  "Created by Izaak Z. Kuipers. Licensed under GPLv3.",
  "All rights belong to Izaak Kuipers.",
  "",
  "",
];

export const EchoIntro = () => __Console__.log(LINES.join(`\n`));
