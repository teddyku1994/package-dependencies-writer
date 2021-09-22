const fs = require("fs");
const path = require("path");

const parseDocName = (docName, type) => {
  if (!docName || !docName.trim()) return `packageDependencies.${type}`;
  const cleanedName = docName.replace(`.${type}`, "");
  return `${cleanedName}.${type}`;
};

const writeMdFile = (destPath, dependencies, docName) => {
  const filePath = path.join(destPath, parseDocName(docName, "md"));
  let content = "# Package Dependencies";
  dependencies.forEach((dep) => {
    const { name, version, license, repository, licenseText } = dep;
    if (name) content += `\n ### ${name}`;
    if (version) content += `\n - version: ${version}`;
    if (license) content += `\n - license: ${license}`;
    if (repository) content += `\n - repository: ${repository}`;
    // content += `\n - licenseText: ${licenseText}`;
  });
  fs.writeFileSync(filePath, content);
};

const writeJsonFile = (destPath, dependencies, docName) => {
  const filePath = path.join(destPath, parseDocName(docName, "json"));
  const content = {};
  dependencies.forEach((dep) => {
    content[dep.name] = dep;
  });
  fs.writeFileSync(filePath, JSON.stringify(content));
};

module.exports = { writeMdFile, writeJsonFile };
