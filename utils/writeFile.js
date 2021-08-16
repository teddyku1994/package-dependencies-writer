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
    content += `\n ### ${name}`;
    content += `\n - version: ${version}`;
    content += `\n - license: ${license}`;
    content += `\n - repository: ${repository}`;
    content += `\n - licenseText: ${licenseText}`;
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
