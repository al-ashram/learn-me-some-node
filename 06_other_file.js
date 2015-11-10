var fs = require('fs');
var p = require('path');

var filternow = function(filepath,extension, callback){

  var newArray =[];

  fs.readdir(filepath, function(err, list){
    if (err){
      callback(err);
      return;
    };



    for (var i = 0; i<list.length; i++){
      if (p.extname(list[i]) == ("." + extension)){
        newArray.push(list[i]);
      }
    }


    callback(null, newArray);
  
  });
};

// filternow(filepath,extension)
module.exports = filternow;



