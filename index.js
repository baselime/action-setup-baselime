const core = require('@actions/core');
const tc = require('@actions/tool-cache');
const os = require('os');
const path = require('path');
const fs = require('fs-extra');
const fetch = require('node-fetch');

async function setup() {
  const version = core.getInput('version');
  const apiKey = core.getInput('baselime-api-key');

  // Download the specific version of the tool, e.g. as a tarball
  const { url } = getDownloadURL(version || await getLatestCLIVersion());
  const pathToTarball = await tc.downloadTool(url);

  // Extract the tarball onto the runner
  const pathToCLI = await tc.extractTar(pathToTarball);

  // Expose the tool by adding it to the PATH
  core.addPath(pathToCLI);

  await fs.outputJson(getPath(), { apiKey });
}

function getDownloadURL(version) {
  const filename = "baselime";
  const url = `https://github.com/Baselime/cli/releases/download/v${version}/${filename}-${os.platform()}-x64-v${version}.tar.gz`;
  return {
    url,
  };
}

function getPath() {
  return path.join(os.homedir(), ".config", "baselime", `default.json`);
}

async function getLatestCLIVersion() {
  try {
    const res = await (await fetch("https://api.github.com/repos/baselime/cli/releases/latest")).json();
    return res.tag_name.replace("v", "");
  } catch (error) {
    console.error("There was an error getting the latest version of the Baselime CLI", { error });
    throw error;
  }
}


module.exports = setup

if (require.main === module) {
  setup();
}
