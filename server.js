var express = require('express');
var app 	= express();
//post 데이터처리
var bodyParser = require('body-parser');

var session = require('express-session');
var fs = require("fs")

var router  = require('./router/main')(app);

app.use(express.static(__dirname + '/public'));
console.log("__dirname" + __dirname);

app.set('views','./views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server  = app.listen(3000, function() {

	console.log("express server has started on port 3000 ");

})