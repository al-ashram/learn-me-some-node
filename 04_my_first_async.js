var fs = require('fs');

filepath = process.argv[2];

fs.readFile(filepath, 'utf8', function(err, data){
  if (err) {
    throw err
  }
  var array = data.split("\n")
  console.log(array.length - 1);
});



