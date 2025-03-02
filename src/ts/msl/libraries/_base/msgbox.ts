import { MessageBox } from "$ts/dialog";
import { WarningIcon } from "$ts/images/dialog";
import { htmlspecialchars } from "$ts/util";
import type { Keyword } from "$types/msl";

export const MsgBox: Keyword = async (lang) => {
  if (!lang.expectTokenLength(2, "msgbox")) return;

  const [title, message] = lang.tokens;

  MessageBox(
    {
      title,
      message: htmlspecialchars(message),
      buttons: [{ caption: "OK", action: () => {} }],
      image: WarningIcon,
    },
    lang.pid
  );
};
