const fs = require("fs");
const path = require("path");

const parseDocName = (docName) => {
  if (!docName || !docName.trim()) return "packageDependencies.md";
  const cleanedName = docName.replace(".md", "");
  return `${cleanedName}.md`;
};

const writeMdFile = (destPath, dependencies, docName) => {
  const filePath = path.join(destPath, parseDocName(docName));
  let content = "# Package Dependencies";
  dependencies.forEach((dep) => {
    const { name, version, licenses, repositories } = dep;
    content += `\n ### ${name}`;
    content += `\n - version: ${version}`;
    content += `\n - licenses: ${licenses}`;
    content += `\n - repositories: ${repositories}`;
  });
  fs.writeFileSync(filePath, content);
};

module.exports = writeMdFile;
