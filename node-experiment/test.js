var filesYo=require('fs');
var https = require('https')

filesYo.writeFile(__dirname +"/index.html","<h1>HTML ROCKS!</h1>");

var dogUrl="https://github.com/LearnWebCode/welcome-to-git/blob/master/images/dog.jpg";
var dogFile=filesYo.createWriteStream(__dirname + "/node-dog.jpg");
var request = https.get(dogUrl,function(response){
   response.pipe(dogFile); 
});