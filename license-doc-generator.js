const checker = require("license-checker");
const path = require("path");

const {
  getPackageMap,
  getPackageJsonDependencies,
  getDirectDevDependencies,
  writeMdFile,
  writeJsonFile,
} = require("./utils");

module.exports.run = (fileType, pkgFilePath, destFilePath, docName) => {
  checker.init(
    {
      start: pkgFilePath,
      customPath: path.join(__dirname, "format.json"),
    },
    (err, packages) => {
      if (err) {
        console.log(err);
      } else {
        const type = fileType === "json" ? "json" : "md";
        const packageMap = getPackageMap(packages);
        const dependencies = getPackageJsonDependencies(pkgFilePath);
        const directDevDependencies = getDirectDevDependencies(
          packageMap,
          dependencies
        );
        if (!destFilePath)
          throw new Error(
            "please specify where to create the file as third argument"
          );
        if (type === "md")
          writeMdFile(destFilePath, directDevDependencies, docName);
        else writeJsonFile(destFilePath, directDevDependencies, docName);
      }
    }
  );
};
