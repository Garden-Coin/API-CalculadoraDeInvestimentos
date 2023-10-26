/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const { name, version, description, dependencies } = require('./package.json');

const json = {
	name,
	description,
	scripts: {
		start: 'node ./index.js NODE_ENV=production'
	},
	dependencies,
	version
};
const packagePath = './dist/package.json';
if(!fs.existsSync('./dist') || !fs.existsSync(packagePath)){
	fs.writeFile(
		packagePath, 
		JSON.stringify(json),
		{ encoding: 'utf8',}, 
		(err) => { 
			if (err) console.error(err); 
		}
	);
}