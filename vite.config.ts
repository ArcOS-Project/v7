import { defineConfig, Plugin } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const htmlImport: Plugin<any> = {
  name: "htmlImport",
  /**
   * Checks to ensure that a html file is being imported.
   * If it is then it alters the code being passed as being a string being exported by default.
   * @param {string} code The file as a string.
   * @param {string} id The absolute path.
   * @returns {{code: string}}
   */
  transform(code: string, id: string) {
    if (/^.*\.html$/g.test(id)) {
      code = `export default \`${code}\``;
    }
    return { code };
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), htmlImport],
  envPrefix: "ARCOS_",
});
