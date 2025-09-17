import { ElevationLevel } from "$types/elevation";

// What icon belongs to what level?
export const ElevationLevelIcons: Record<ElevationLevel, string> = {
  [ElevationLevel.low]: "SecurityLowIcon",
  [ElevationLevel.medium]: "SecurityMediumIcon",
  [ElevationLevel.high]: "SecurityHighIcon",
};
