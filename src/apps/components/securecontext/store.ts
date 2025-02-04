import {
  SecurityHighIcon,
  SecurityLowIcon,
  SecurityMediumIcon,
} from "$ts/images/general";
import { ElevationLevel } from "$types/elevation";

export const ElevationLevelIcons: Record<ElevationLevel, string> = {
  [ElevationLevel.low]: SecurityLowIcon,
  [ElevationLevel.medium]: SecurityMediumIcon,
  [ElevationLevel.high]: SecurityHighIcon,
};
