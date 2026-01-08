import { RegisteredProcess } from "$ts/apps/util";
import { ArcOSVersion } from "$ts/env";
import { BugReportIcon } from "$ts/images/general";
import { FeedbackProcess } from "./runtime";

const feedbackApp = RegisteredProcess({
  metadata: {
    name: "Give feedback",
    version: ArcOSVersion,
    author: "ArcOS Team",
    icon: BugReportIcon,
  },
  assets: {
    runtime: FeedbackProcess,
  },
  core: false,
  hidden: false,
  id: "feedback",
});

export default feedbackApp;
