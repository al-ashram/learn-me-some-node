var getFilteredFiles = require('./06_other_file.js')
var filepath = process.argv[2]
var extension = process.argv[3]


getFilteredFiles(filepath,extension,function(error, result){

    if (error){
      throw error;
    };

    for (var i = 0; i < result.length; i++){
      console.log(result[i]);
    }
});


// console.log("ehe")
