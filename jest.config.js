const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest');

console.log(compilerOptions.paths);
console.log(pathsToModuleNameMapper(compilerOptions.paths));

module.exports = {
  preset: "ts-jest",
  testEnvironment: 'node',  
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleDirectories: ["node_modules", __dirname],
}