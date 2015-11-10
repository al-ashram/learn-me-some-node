var fs = require('fs');

filepath = process.argv[2];

var buf = fs.readFileSync(filepath);

var str = buf.toString();

var array = str.split("\n");

console.log(array.length - 1);

