const parsePackageName = (name) => {
  return name.substring(0, name.lastIndexOf("@"));
};

const getPackageVer = (name) => {
  return name.substring(name.lastIndexOf("@") + 1);
};

const checkIfFileIsFromLicense = (filePath) => {
  if (!filePath) return false;
  const splittedPath = filePath.split("/");
  const licenseFile = splittedPath[splittedPath.length - 1];
  if (licenseFile.toLowerCase() !== "license") return false;
  return true;
};

const getPackageMap = (packages) => {
  const packageMap = new Map();
  const packageNames = Object.keys(packages);
  const parsePackageNames = packageNames.map((pkg) => ({
    original: pkg,
    new: parsePackageName(pkg),
    version: getPackageVer(pkg),
  }));
  parsePackageNames.forEach((pkg) =>
    packageMap.set(pkg.new, {
      ...packages[pkg.original],
      version: pkg.version,
      fromLicense: checkIfFileIsFromLicense(packages[pkg.original].licenseFile),
    })
  );
  return packageMap;
};

module.exports = getPackageMap;
