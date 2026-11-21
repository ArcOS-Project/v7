import { exec } from "child_process";
import { program } from "commander";
import { build } from "vite";
import packageJson from "../package.json" with { type: "json" };
import { checkParameters } from "./check-params.mjs";
import { generateTypes } from "./collect-tpa-props.mjs";
import { checkConsoleUsages } from "./console-usage.mjs";
import { checkRuntimeInterfaces } from "./runtime-interfaces.mjs";
import { checkTypeOutblow } from "./typeoutblow.mjs";
import { validateRegions } from "./validate-regions.mjs";

export const ASCII_ART = [
  "  ___                      _      ",
  " / __| __ _ __ _ _ _  _ __| |__ _ ",
  " \\__ \\/ _` / _| '_| || / _` / _` |",
  " |___/\\__,_\\__|_|  \\_,_\\__,_\\__,_|",
  "",
  `Sacruda build script for v${packageJson.version}`,
  "Copyright © 2026 Izaak Kuipers. All rights belong to their respective authors.",
  "",
  "Use --help to see available options",
  "",
];
export const EchoIntro = () => console.log(ASCII_ART.join(`\n`));

const flags = program
  .name("tools/build.mjs")
  .description("Build Sacruda in style")
  .option("-c, --no-checks", "Specify to skip code quality/integrity checks")
  .option("-h, --no-hash", "Skip obtaining the hash and writing it to the build file")
  .option("-m, --no-minify", "Don't minify the compiled JS")
  .option("-t, --build-types", "Build type definitions instead of building Sacruda")
  .option("-b, --no-build", "Skip building Sacruda itself")
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
  console.log(`Building Sacruda ${packageJson.version}...`);

  await build({
    build: {
      minify,
    },
  });
}

async function doTypedefs() {
  console.log(`Generating type definitions for ${packageJson.version}...`);
  await generateTypes();
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
    checkRuntimeInterfaces();
  }

  if (buildTypes) return await doTypedefs();
  if (getHash) await doGitHash();

  if (doBuild) await buildIt();
})();
