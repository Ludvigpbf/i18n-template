const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");

console.log("Initialize i18n-template setup...");

// Function to find package.json in current or parent directories
function findPackageJson(startPath) {
  let currentPath = startPath;

  while (true) {
    const packageJsonPath = path.join(currentPath, "package.json");

    if (fs.existsSync(packageJsonPath)) {
      return packageJsonPath;
    }

    const parentPath = path.dirname(currentPath);
    if (parentPath === currentPath) {
      break;
    }

    currentPath = parentPath;
  }

  throw new Error("Could not find package.json");
}

// Read the package.json files
console.log("Reading package.json files...");
const projectPackageJsonPath = findPackageJson(path.dirname(__dirname));
const projectPackageJson = require(projectPackageJsonPath);
console.log(`Project package.json: ${JSON.stringify(projectPackageJson, null, 2)}`);
const templatePackageJson = require("./package.json");
console.log(`Template package.json: ${JSON.stringify(templatePackageJson, null, 2)}`);

// Merge the dependencies
console.log("Merging dependencies...");
projectPackageJson.dependencies = {
  ...projectPackageJson.dependencies,
  ...templatePackageJson.dependencies,
};

console.log(`Merged package.json: ${JSON.stringify(projectPackageJson, null, 2)}`);

// Write the merged package.json back to disk
console.log("Writing merged package.json back to disk...");
fs.writeFileSync(
  projectPackageJsonPath,
  JSON.stringify(projectPackageJson, null, 2)
);

// Move the locales folder out of the i18n-template folder
console.log("Moving locales folder out of the i18n-template folder...");
if (fs.existsSync("./i18n-template/locales")) {
  fs.renameSync("./i18n-template/locales", "./locales");
}

// Install the dependencies
console.log("Installing dependencies...");
execSync("npm install", {
  stdio: "inherit",
  cwd: path.dirname(projectPackageJsonPath),
});

// Delete the specified files and directories
console.log("Deleting specified files and directories...");
[
  "./i18n-template",
].forEach((path) => {
  if (fs.existsSync(path)) {
    fs.rmSync(path, { recursive: true, force: true });
  }
});

console.log("Done!");
