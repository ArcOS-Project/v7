export interface GitFolderItem {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  type: "dir" | "file";
}

export type GitFolder = GitFolderItem[];
