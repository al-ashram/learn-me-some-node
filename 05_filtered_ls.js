var fs = require('fs');
var p = require('path');
var filepath = process.argv[2]
var extension = process.argv[3]
var newArray =[];


  fs.readdir(filepath, function(err, list){
    if (err){
      throw err;
    };

    function myFilter(path, ext){
      for (var i = 0; i<list.length; i++){
        if (p.extname(list[i]) == ("." + ext)){
          newArray.push(list[i]);
        }
      }
    }

    myFilter(filepath,extension)

    for (var i = 0; i < newArray.length; i++){
      console.log(newArray[i]);
    }

  });



