var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function(err){
          throw err;
       })
       .on('response', function(response){
          console.log(`Response code: ${response.statusCode}\nResponse message: ${response.statusMessage}\nContent type: ${response.headers['content-type']}`);
          console.log("Starting to download...");
      })
       .pipe(fs.createWriteStream('./future.jpg'))
       .on("finish", function(){
          console.log("Download complete!");
       });