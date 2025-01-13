import { MessageBox } from "$ts/dialog";
import { WarningIcon } from "$ts/images/dialog";
import type { Keyword } from "$types/lang";

export const MsgBox: Keyword = async (lang) => {
  lang.expectTokenLength(2, "msgbox");

  const [title, message] = lang.tokens;

  MessageBox(
    {
      title,
      message,
      buttons: [{ caption: "OK", action: () => {} }],
      image: WarningIcon,
    },
    lang.pid
  );
};
