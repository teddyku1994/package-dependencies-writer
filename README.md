# NPM Package Dependencies Writer

This is a simple tool is inspired and build upon [license-checker](https://www.npmjs.com/package/license-checker) to help developers quickly generate a .md file of the direct dependencies of your project.

## Usage

---

run the command below to generate the .md file

```
$sh gen-doc to package-dependencies-writer <project_file_path> <output_doc_file_path> <doc_name>
```

- project_file_path (`required`): path of the project containing `package.json`
- output_doc_file_path (`required`): path to generate the .md document
- doc_name (`optional`, { `default: packageDependencies` }): name of the document
