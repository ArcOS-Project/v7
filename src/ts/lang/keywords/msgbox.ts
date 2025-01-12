import { MessageBox } from "$ts/dialog";
import { ComponentIcon } from "$ts/images/general";
import type { Keyword } from "$types/lang";

export const MsgBox: Keyword = async (lang) => {
  lang.expectTokenLength(2, "msgbox");

  const [title, message] = lang.tokens;

  MessageBox(
    {
      title,
      message,
      buttons: [{ caption: "OK", action: () => {} }],
      image: ComponentIcon,
    },
    0
  );
};
