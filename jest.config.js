const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest');

const oldModuleMapper = pathsToModuleNameMapper(compilerOptions.paths);
const moduleMapper = {};
Object
	.keys(oldModuleMapper)
	.map((k) => moduleMapper[k] = oldModuleMapper[k].replace('.', '<rootDir>'));

module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleNameMapper: moduleMapper,
	collectCoverage: true,
	moduleDirectories: ['node_modules', __dirname],
    coveragePathIgnorePatterns: [
      "/node_modules",
      "/test"
    ]
};