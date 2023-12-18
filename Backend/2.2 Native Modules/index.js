const fs = require("fs")

fs.readFile("message.txt", 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace("Hello from NodeJS!", 'Hello from Angela!');
  
    fs.writeFile("message.txt", result, 'utf8', function (err) {
       if (err) return console.log(err);
       console.log(result)
    });
  });