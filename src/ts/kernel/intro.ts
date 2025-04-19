export const ASCII_ART = [
  "    _           ___  ___ ",
  "   /_\\  _ _ __ / _ \\/ __|",
  "  / _ \\| '_/ _| (_) \\__ \\",
  " /_/ \\_\\_| \\__|\\___/|___/",
];
export const LINES = [
  ...ASCII_ART,
  "",
  "PROJECT: ReArc - The reimagination of ArcOS. © 2025 IzKuipers",
  "",
  "Created by Izaak Z. Kuipers. Licensed under GPLv3.",
  "All rights belong to Izaak Kuipers.",
  "",
  "",
];

export const EchoIntro = () => console.log(LINES.join(`\n`));
