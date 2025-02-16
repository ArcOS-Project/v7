import type { Keyword } from "$types/lang";

export const umount: Keyword = async (lang) => {
  if (!lang.expectTokenLength(1, "umount")) return;

  const [identifier] = lang.tokens;
  const drive = lang.fs.getDriveIdByIdentifier(identifier);
  const result = await lang.fs.umountDrive(drive);

  if (!result) {
    lang.error("Failed to unmount drive", "umount");

    return;
  }

  return result;
};
