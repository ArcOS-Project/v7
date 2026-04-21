import { exec, execSync } from "child_process";
import { program } from "commander";
import { build } from "vite";
import { checkParameters } from "./check-params.mjs";
import { checkConsoleUsages } from "./console-usage.mjs";
import { checkTypeOutblow } from "./typeoutblow.mjs";
import { validateRegions } from "./validate-regions.mjs";
import packageJson from "../package.json" with { type: "json" };

export const ASCII_ART = [
  "    _           ___  ___ ",
  "   /_\\  _ _ __ / _ \\/ __|",
  "  / _ \\| '_/ _| (_) \\__ \\",
  " /_/ \\_\\_| \\__|\\___/|___/",
  "",
  `ArcOS build script for v${packageJson.version}`,
  "Copyright © 2026 Izaak Kuipers. All rights belong to their respective authors.",
  "",
  "Use --help to see available options",
  "",
];
export const EchoIntro = () => console.log(ASCII_ART.join(`\n`));

const flags = program
  .name("tools/build.mjs")
  .description("Build ArcOS in style")
  .option("-c, --no-checks", "Specify to skip code quality/integrity checks")
  .option("-h, --no-hash", "Skip obtaining the hash and writing it to the build file")
  .option("-m, --no-minify", "Don't minify the compiled JS")
  .option("-t, --build-types", "Build type definitions instead of building ArcOS")
  .option("-b, --no-build", "Skip building ArcOS itself")
  .parse()
  .opts();

const runChecks = !!flags.checks;
const getHash = !!flags.hash;
const minify = !!flags.minify;
const buildTypes = !!flags.buildTypes;
const doBuild = !!flags.build;

async function sh(cmd) {
  return new Promise(function (resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      console.log(stdout);
      console.error(stderr);
      if (err) {
        reject(err);
        process.exit(1);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

async function runSvelteChecks() {
  console.log("Running svelte checks...");

  await sh("npm run check");
}

async function buildIt() {
  console.log(`Building ArcOS ${packageJson.version}...`);

  await build({
    build: {
      minify,
    },
  });
}

async function doTypedefs() {
  console.log(`Generating type definitions for ${packageJson.version}...`);
  await sh("npm run build:types:all");
}

async function doGitHash() {
  console.log("Writing ./public/build file...");
  await sh("git rev-parse --short HEAD > ./public/build");
}

(async () => {
  EchoIntro();

  console.log(`CHECKS ${runChecks} | TYPES ${buildTypes} | HASH ${getHash} | MINIFY ${minify}\n`);

  if (runChecks) {
    await runSvelteChecks();
    checkConsoleUsages();
    validateRegions();
    await checkParameters();
    await checkTypeOutblow();
  }

  if (buildTypes) return await doTypedefs();
  if (getHash) await doGitHash();
  if (doBuild) await buildIt();
})();
