var fs = require('fs');
var answer;

fs.readFile(process.argv[2], "utf8", function(err, content) {
  answer = content.split('\n').length - 1;
  console.log(answer);
})

/*######NODESCHOOL SOLUTION######
 var fs = require('fs')
 var file = process.argv[2]

 fs.readFile(file, function (err, contents) {
   // fs.readFile(file, 'utf8', callback) can also be used
   var lines = contents.toString().split('\n').length - 1
   console.log(lines)
 })
 
 */