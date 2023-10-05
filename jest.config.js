const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest');

console.log(compilerOptions.paths);

module.exports = {
  preset: "ts-jest",
  testEnvironment: 'node',
  moduleDirectories: ["node_modules", "."],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths)
}