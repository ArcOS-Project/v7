import { ArcOSVersion } from "$ts/env";
import { BugReportIcon } from "$ts/images/general";
import { RegisteredProcess } from "$ts/util/apps";
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
