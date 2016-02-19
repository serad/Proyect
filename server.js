//server.js

var express = require("Express");
var app = express();

//Rutas de nuestro API
app.get('/',function (req, res){
    res.send("Hola munto");
})

app.listen(3000);
console.log('Example running');