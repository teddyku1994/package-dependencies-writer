const fs = require("fs");
const path = require("path");

const readPackageJsonFile = (filePath) => {
  const packageJsonPath = path.join(filePath, "package.json");
  const packageJson = fs.readFileSync(packageJsonPath, "utf8");
  return JSON.parse(packageJson);
};

const getPackageJsonDependencies = (filePath) => {
  const packageJson = readPackageJsonFile(filePath);
  const devDependencies = Object.keys(packageJson.devDependencies);
  const dependencies = Object.keys(packageJson.dependencies);
  return [...new Set([...dependencies, ...devDependencies])];
};

module.exports = getPackageJsonDependencies;
