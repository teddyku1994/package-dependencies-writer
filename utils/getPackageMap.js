const parsePackageName = (name) => {
  return name.substring(0, name.lastIndexOf("@"));
};

const getPackageVer = (name) => {
  return name.substring(name.lastIndexOf("@") + 1);
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
    packageMap.set(pkg.new, { ...packages[pkg.original], version: pkg.version })
  );
  return packageMap;
};

module.exports = getPackageMap;
