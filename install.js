const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");

console.log("Start install i18n-template...");

// Function to find package.json in parent directories
function findPackageJson(startPath) {
  let currentPath = startPath;

  while (currentPath !== "/") {
    const packageJsonPath = path.join(currentPath, "package.json");

    if (fs.existsSync(packageJsonPath)) {
      return packageJsonPath;
    }

    currentPath = path.dirname(currentPath);
  }

  throw new Error("Could not find package.json");
}

// Read the package.json files
console.log("Reading package.json files...");
const projectPackageJsonPath = findPackageJson(__dirname);
const projectPackageJson = require(projectPackageJsonPath);
const templatePackageJson = require("./package.json");

// Merge the dependencies
console.log("Merging dependencies...");
projectPackageJson.dependencies = {
  ...projectPackageJson.dependencies,
  ...templatePackageJson.dependencies,
};

// Write the merged package.json back to disk
console.log("Writing merged package.json back to disk...");
fs.writeFileSync(projectPackageJsonPath, JSON.stringify(projectPackageJson, null, 2));

// Install the dependencies
console.log("Installing dependencies...");
execSync('npm install', { stdio: 'inherit', cwd: path.dirname(projectPackageJsonPath) });

// Move the files and folders out of the i18n-template folder
console.log('Moving files and folders out of the i18n-template folder...');
fs.readdirSync('./i18n-template').forEach((file) => {
  fs.renameSync(`./i18n-template/${file}`, `./${file}`);
});

// Delete the specified files and directories
console.log("Deleting specified files and directories...");
[
  "./package.json",
  "./package-lock.json",
  "./node_modules",
  "./.gitignore",
  "./install.js",
  './i18n-template',
].forEach((path) => {
  if (fs.existsSync(path)) {
    fs.rmSync(path, { recursive: true, force: true });
  }
});

console.log("Done!");
