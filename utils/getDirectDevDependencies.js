const getDirectDevDependencies = (packageMap, packJsonDeps) => {
  const directDependencies = packJsonDeps.map((dep) => {
    const package = packageMap.get(dep);
    return {
      name: dep,
      version: package ? package.version : "unknown",
      license: package ? package.licenses : "unknown",
      repository: package ? package.repository : "unknown",
      licenseText: package ? package.licenseText : "unknown",
    };
  });
  return directDependencies;
};

module.exports = getDirectDevDependencies;
