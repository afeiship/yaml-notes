var yaml = require('js-yaml');
var fs = require('fs');

var json1 = yaml.load(fs.readFileSync('./src/009-reference.yml', 'utf-8'));

console.log(json1);

