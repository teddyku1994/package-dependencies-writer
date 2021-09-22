const getDirectDevDependencies = (packageMap, packJsonDeps) => {
  const directDependencies = packJsonDeps.map((dep) => {
    const package = packageMap.get(dep);
    return {
      name: dep,
      version: package ? package.version : undefined,
      license: package ? package.licenses : undefined,
      repository: package ? package.repository : undefined,
      licenseText:
        package && package.fromLicense ? package.licenseText : undefined,
    };
  });
  return directDependencies;
};

module.exports = getDirectDevDependencies;
