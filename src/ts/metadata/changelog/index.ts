import axios from "axios";

class changeLogs {
  private CHANGELOG_URL = "https://cdn.arcapi.nl/changelogs";
  ChangeLogUrls: Record<string, string> = {};
  ChangeLogCache: Record<string, string> = {};

  async refreshChangelogs() {
    this.ChangeLogUrls = {};
    this.ChangeLogCache = {};
    try {
      const response = await axios.get(`${this.CHANGELOG_URL}/__REPO__?t=${Date.now()}`, {
        responseType: "text",
      });

      this.ChangeLogUrls = this.parseChangeLogsRepoFile(response.data);
    } catch {
      return false;
    }
  }

  parseChangeLogsRepoFile(input: string): Record<string, string> {
    return Object.fromEntries(
      input
        .split("\n")
        .filter(Boolean)
        .map((s) => s.split(" "))
        .map(([ver, filename]) => [ver, `${this.CHANGELOG_URL}/${filename}?t=${Date.now()}`])
    );
  }

  async readChangelog(version: string) {
    if (this.ChangeLogCache[version]) return this.ChangeLogCache[version];
    if (!this.ChangeLogUrls[version]) return undefined;

    try {
      const response = await axios.get(this.ChangeLogUrls[version], { responseType: "text" });

      this.ChangeLogCache[version] = response.data;

      return this.ChangeLogCache[version];
    } catch {
      return undefined;
    }
  }
}

export const ChangeLogs = new changeLogs();

if (import.meta.env.DEV) (window as any).changelogs = ChangeLogs;
