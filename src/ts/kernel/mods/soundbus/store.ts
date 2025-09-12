import type { SoundStore } from "$types/soundbus";

import v646973636F72640A from "$assets/audio/646973636F72640A.mp3";
import dialogError from "$assets/audio/Error.wav";
import dialogInfo from "$assets/audio/Info.wav";
import notification from "$assets/audio/Notification.wav";
import dialogWarning from "$assets/audio/Warning.wav";
import click from "$assets/audio/click.wav";
import systemLogoff from "$assets/audio/logoff.wav";
import systemLogon from "$assets/audio/logon.wav";
import mwomp from "$assets/audio/mwomp.mp3";

export const ArcSounds: SoundStore = {
  "arcos.dialog.error": dialogError,
  "arcos.dialog.warning": dialogWarning,
  "arcos.dialog.info": dialogInfo,
  "arcos.notification": notification,
  "arcos.system.logon": systemLogon,
  "arcos.system.logoff": systemLogoff,
  "arcos.click": click,
  "arcos.mwomp": mwomp,
  "646973636F72640A": v646973636F72640A,
};
