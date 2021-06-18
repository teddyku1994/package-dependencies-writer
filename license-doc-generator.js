const checker = require("license-checker");

const {
  getPackageMap,
  getPackageJsonDependencies,
  getDirectDevDependencies,
  writeMdFile,
} = require("./utils");

module.exports.run = (pkgFilePath, destFilePath, docName) => {
  checker.init(
    {
      start: pkgFilePath,
    },
    (err, packages) => {
      if (err) {
        console.log(err);
      } else {
        const packageMap = getPackageMap(packages);
        const dependencies = getPackageJsonDependencies(pkgFilePath);
        const directDevDependencies = getDirectDevDependencies(
          packageMap,
          dependencies
        );
        if (!destFilePath) return;
        writeMdFile(destFilePath, directDevDependencies, docName);
      }
    }
  );
};
